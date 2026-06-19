import { todayKey } from '../hooks/useEntries'

function calcStreak(entries) {
  let streak = 0
  const d = new Date()
  while (true) {
    const key = todayKey(d)
    if (entries[key]?.content) {
      streak += 1
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}

function calcMonthRate(entries) {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const todayDate = now.getDate()
  let written = 0
  let checked = 0
  for (let d = 1; d <= todayDate; d++) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    if (entries[key]?.content) written += 1
    if (entries[key]?.checked) checked += 1
  }
  return { written, checked, total: daysInMonth, soFar: todayDate }
}

export default function StreakStats({ entries }) {
  const streak = calcStreak(entries)
  const { written, checked, soFar } = calcMonthRate(entries)

  return (
    <div className="px-5 pt-6 pb-10">
      <h2 className="font-display text-lg mb-6">타고 있는 등불</h2>

      <div className="border border-faint/40 rounded-2xl p-6 mb-4 text-center">
        <p className="text-5xl font-display text-lamp">{streak}</p>
        <p className="text-faint text-sm mt-1">일째 연속 작성 중</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard label="이번 달 작성" value={`${written} / ${soFar}일`} />
        <StatCard label="이번 달 확인" value={`${checked} / ${soFar}일`} />
      </div>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="border border-faint/40 rounded-2xl p-4 text-center">
      <p className="text-paper text-lg font-display">{value}</p>
      <p className="text-faint text-xs mt-1">{label}</p>
    </div>
  )
}
