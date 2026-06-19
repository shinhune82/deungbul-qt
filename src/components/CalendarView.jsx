import { useState } from 'react'
import { todayKey } from '../hooks/useEntries'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

export default function CalendarView({ entries, onSelectDate }) {
  const [cursor, setCursor] = useState(new Date())

  const year = cursor.getFullYear()
  const month = cursor.getMonth()
  const firstDay = new Date(year, month, 1)
  const startWeekday = firstDay.getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const todayStr = todayKey()

  const cells = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const changeMonth = (delta) => {
    setCursor(new Date(year, month + delta, 1))
  }

  return (
    <div className="px-4 pt-4">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => changeMonth(-1)} className="text-faint text-xl px-3 py-1">‹</button>
        <h2 className="font-display text-lg">{year}년 {month + 1}월</h2>
        <button onClick={() => changeMonth(1)} className="text-faint text-xl px-3 py-1">›</button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center text-xs text-faint py-1">{w}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, idx) => {
          if (d === null) return <div key={`empty-${idx}`} />
          const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
          const entry = entries[key]
          const isWritten = Boolean(entry?.content)
          const isChecked = Boolean(entry?.checked)
          const isToday = key === todayStr

          return (
            <button
              key={key}
              onClick={() => onSelectDate(key)}
              className="flex flex-col items-center gap-0.5 py-1"
            >
              <div
                className={[
                  'lamp-dot',
                  isChecked ? 'is-checked' : isWritten ? 'is-written' : ''
                ].join(' ')}
                style={isToday ? { outline: '2px solid rgba(247,241,226,0.6)', outlineOffset: '2px' } : {}}
              >
                {isChecked && <span className="rabbit-icon">🐇</span>}
              </div>
              <span className={`text-[10px] ${isToday ? 'text-paper font-semibold' : 'text-faint'}`}>
                {d}
              </span>
            </button>
          )
        })}
      </div>

      {/* 범례 */}
      <div className="flex gap-5 mt-6 text-xs text-faint justify-center pb-2">
        <div className="flex items-center gap-2">
          <div style={{width:18, height:18, borderRadius:'50%', border:'1.5px solid #D9CFB8'}} />
          <span>미작성</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{
            width:18, height:18, borderRadius:'50%',
            background:'radial-gradient(circle, #fff5c0 0%, #E8A33D 60%, #F2C879 100%)',
            boxShadow:'0 0 8px 2px rgba(232,163,61,0.5)'
          }} />
          <span>보름달 (작성)</span>
        </div>
        <div className="flex items-center gap-2">
          <div style={{
            width:22, height:22, borderRadius:'50%',
            background:'radial-gradient(circle, #fff5c0 0%, #E8A33D 60%, #F2C879 100%)',
            boxShadow:'0 0 8px 2px rgba(232,163,61,0.5)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:13
          }}>
            <span style={{filter:'brightness(0) saturate(100%)'}}>🐇</span>
          </div>
          <span>달토끼 (확인)</span>
        </div>
      </div>
    </div>
  )
}
