import { useEffect, useState } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db, auth, getMessagingIfSupported, VAPID_KEY } from '../firebase'
import { getToken } from 'firebase/messaging'

export default function NotificationSettings({ role }) {
  const [settings, setSettings] = useState(
    role === 'writer' ? { time: '23:00' } : { mode: 'off', time: '21:00', intervalDays: 3 }
  )
  const [pushStatus, setPushStatus] = useState('idle') // idle | granted | denied | unsupported
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const ref = doc(db, 'settings', role)
    getDoc(ref).then((snap) => {
      if (snap.exists()) setSettings((prev) => ({ ...prev, ...snap.data() }))
    })
  }, [role])

  const handleSave = async () => {
    await setDoc(doc(db, 'settings', role), settings, { merge: true })
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  const handleEnablePush = async () => {
    try {
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        setPushStatus('denied')
        return
      }
      const messaging = await getMessagingIfSupported()
      if (!messaging) {
        setPushStatus('unsupported')
        return
      }
      const registration = await navigator.serviceWorker.ready
      const token = await getToken(messaging, {
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration: registration
      })
      if (token) {
        await setDoc(
          doc(db, 'fcm_tokens', role),
          { token, updatedAt: Date.now(), uid: auth.currentUser?.uid ?? null },
          { merge: true }
        )
        setPushStatus('granted')
      }
    } catch (err) {
      console.error('알림 등록 실패', err)
      setPushStatus('unsupported')
    }
  }

  return (
    <div className="px-5 pb-10">
      <h2 className="font-display text-lg mb-6">알림 설정</h2>

      <div className="border border-faint/40 rounded-2xl p-4 mb-6">
        <p className="text-sm text-faint mb-3">
          이 기기로 알림을 받으려면 먼저 푸시 권한을 허용해 주세요. (아이폰은 홈 화면에 추가한 뒤에만 동작해요)
        </p>
        <button
          onClick={handleEnablePush}
          className="w-full bg-lamp text-nightDeep font-semibold py-3 rounded-xl"
        >
          {pushStatus === 'granted' ? '알림 켜짐 ✓' : '이 기기에서 알림 받기'}
        </button>
        {pushStatus === 'denied' && (
          <p className="text-xs text-red-300 mt-2">알림이 거부되어 있어요. 기기 설정에서 허용해 주세요.</p>
        )}
        {pushStatus === 'unsupported' && (
          <p className="text-xs text-red-300 mt-2">
            이 브라우저/상태에서는 푸시가 지원되지 않아요. 홈 화면에 추가한 뒤 다시 시도해 주세요.
          </p>
        )}
      </div>

      {role === 'writer' ? (
        <div className="border border-faint/40 rounded-2xl p-4">
          <p className="text-xs text-lampSoft mb-2">매일 알림 시간</p>
          <input
            type="time"
            value={settings.time}
            onChange={(e) => setSettings({ ...settings, time: e.target.value })}
            className="bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"
          />
          <p className="text-xs text-faint mt-3">작성자는 매일 같은 시간에 알림을 받아요.</p>
        </div>
      ) : (
        <div className="border border-faint/40 rounded-2xl p-4 flex flex-col gap-4">
          <div>
            <p className="text-xs text-lampSoft mb-2">알림 방식</p>
            <div className="flex gap-2">
              {[
                { v: 'off', label: '안 함' },
                { v: 'daily', label: '매일' },
                { v: 'interval', label: 'N일마다' }
              ].map((opt) => (
                <button
                  key={opt.v}
                  onClick={() => setSettings({ ...settings, mode: opt.v })}
                  className={`flex-1 py-2 rounded-xl text-sm border ${
                    settings.mode === opt.v ? 'bg-sage text-nightDeep border-sage' : 'border-faint/40 text-faint'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {settings.mode !== 'off' && (
            <div>
              <p className="text-xs text-lampSoft mb-2">시간</p>
              <input
                type="time"
                value={settings.time}
                onChange={(e) => setSettings({ ...settings, time: e.target.value })}
                className="bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"
              />
            </div>
          )}

          {settings.mode === 'interval' && (
            <div>
              <p className="text-xs text-lampSoft mb-2">며칠마다</p>
              <input
                type="number"
                min={1}
                max={30}
                value={settings.intervalDays}
                onChange={(e) => setSettings({ ...settings, intervalDays: Number(e.target.value) })}
                className="bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper w-24"
              />
              <span className="text-faint text-sm ml-2">일마다</span>
            </div>
          )}
        </div>
      )}

      <button
        onClick={handleSave}
        className="w-full mt-6 bg-transparent border border-lamp text-lamp font-semibold py-3 rounded-xl"
      >
        {saved ? '저장됨' : '설정 저장'}
      </button>
    </div>
  )
}
