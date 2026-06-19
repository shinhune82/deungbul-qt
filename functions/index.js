const { onSchedule } = require('firebase-functions/v2/scheduler')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { getMessaging } = require('firebase-admin/messaging')

initializeApp()
const db = getFirestore()

function nowInSeoul() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }))
}

function dateKeyOf(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function toMinutes(hhmm) {
  if (!hhmm) return null
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// 알림 시각이 지금으로부터 15분 이내(0~14분 전)에 막 지났는지 확인.
// 15분 주기로 실행되는 함수가 그 타이밍을 한 번만 잡아내도록 하는 용도.
function justPassed(nowMinutes, targetMinutes, windowMin = 15) {
  if (targetMinutes === null) return false
  const diff = nowMinutes - targetMinutes
  return diff >= 0 && diff < windowMin
}

async function sendToRole(role, title, body) {
  const tokenDoc = await db.collection('fcm_tokens').doc(role).get()
  const token = tokenDoc.data()?.token
  if (!token) return
  try {
    await getMessaging().send({ token, notification: { title, body } })
  } catch (err) {
    console.error(`[${role}] 알림 발송 실패`, err.message)
  }
}

exports.scheduledNotifications = onSchedule(
  { schedule: 'every 15 minutes', timeZone: 'Asia/Seoul' },
  async () => {
    const now = nowInSeoul()
    const todayStr = dateKeyOf(now)
    const nowMinutes = now.getHours() * 60 + now.getMinutes()

    const [writerSnap, coordSnap] = await Promise.all([
      db.collection('settings').doc('writer').get(),
      db.collection('settings').doc('coordinator').get()
    ])

    // 작성자: 항상 매일 고정 시간
    const writer = writerSnap.data() || {}
    if (writer.lastSentDate !== todayStr && justPassed(nowMinutes, toMinutes(writer.time))) {
      await sendToRole('writer', '오늘의 말씀 시간이에요', '잠시 시간을 내어 QT를 기록해 보세요')
      await writerSnap.ref.set({ lastSentDate: todayStr }, { merge: true })
    }

    // 코디네이터: off / daily / interval
    const coord = coordSnap.data() || { mode: 'off' }
    if (coord.mode !== 'off') {
      const targetMinutes = toMinutes(coord.time)
      const timeOk = justPassed(nowMinutes, targetMinutes)

      let dueByInterval = true
      if (coord.mode === 'interval') {
        const intervalDays = Number(coord.intervalDays || 1)
        if (coord.lastSentDate) {
          const last = new Date(coord.lastSentDate)
          const daysSince = Math.floor((now - last) / 86400000)
          dueByInterval = daysSince >= intervalDays
        }
      } else if (coord.mode === 'daily') {
        dueByInterval = coord.lastSentDate !== todayStr
      }

      if (timeOk && dueByInterval) {
        await sendToRole('coordinator', '오늘의 묵상을 확인해 주세요', '작성자가 남긴 말씀을 살펴보고 코멘트를 남겨주세요')
        await coordSnap.ref.set({ lastSentDate: todayStr }, { merge: true })
      }
    }
  }
)
