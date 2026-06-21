import { useEffect, useState } from 'react'
import RoleGate from './components/RoleGate'
import InstallGuide from './components/InstallGuide'
import CalendarView from './components/CalendarView'
import WriteEntry from './components/WriteEntry'
import CoordinatorCheck from './components/CoordinatorCheck'
import NotificationSettings from './components/NotificationSettings'
import StreakStats from './components/StreakStats'
import UnitManager from './components/UnitManager'
import { useEntries, todayKey } from './hooks/useEntries'
import { useUnits } from './hooks/useUnits'
import { UNITS as STATIC_UNITS } from './content/unit1'
import { ensureSignedIn } from './firebase'

const ROLE_KEY = 'qt_role'
const INSTALL_SEEN_KEY = 'qt_install_seen'

export default function App() {
  const [role, setRole] = useState(() => localStorage.getItem(ROLE_KEY))
  const [installDone, setInstallDone] = useState(() => localStorage.getItem(INSTALL_SEEN_KEY) === '1')
  const [tab, setTab] = useState('calendar')
  const [selectedDate, setSelectedDate] = useState(null)
  const [showUnitManager, setShowUnitManager] = useState(false)
  const [authed, setAuthed] = useState(false)

  const { entries, saveEntry, setCheck, deleteEntry } = useEntries()
  const { units: firestoreUnits } = useUnits()
  // 기존에 만들어둔 1단원(코드에 내장)은 그대로 두고, 새로 추가하는 단원은 Firestore에서 불러와 합칩니다.
  const units = [...STATIC_UNITS, ...firestoreUnits]

  useEffect(() => {
    ensureSignedIn(() => setAuthed(true))
  }, [])

  const handleSelectRole = (r) => {
    localStorage.setItem(ROLE_KEY, r)
    setRole(r)
  }

  const handleInstallDone = () => {
    localStorage.setItem(INSTALL_SEEN_KEY, '1')
    setInstallDone(true)
  }

  if (!role) return <RoleGate onSelect={handleSelectRole} />
  if (!installDone) return <InstallGuide onDone={handleInstallDone} />
  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center text-faint">
      <p>연결 중...</p>
    </div>
  )

  return (
    <div className="min-h-screen pb-24">
      {/* 헤더 */}
      <div className="px-5 pt-6 flex items-center justify-between">
        <p className="font-display text-lampSoft text-sm tracking-widest">THE PLAN</p>
        <span className="text-xs text-faint">{role === 'writer' ? '작성자' : '코디네이터'}</span>
      </div>

      {/* 메인 콘텐츠 */}
      {showUnitManager ? (
        <UnitManager onClose={() => setShowUnitManager(false)} />
      ) : selectedDate ? (
        role === 'writer' ? (
          <WriteEntry
            dateKey={selectedDate}
            entry={entries[selectedDate]}
            units={units}
            onSave={saveEntry}
            onDelete={deleteEntry}
            onClose={() => setSelectedDate(null)}
          />
        ) : (
          <CoordinatorCheck
            dateKey={selectedDate}
            entry={entries[selectedDate]}
            units={units}
            onCheck={setCheck}
            onClose={() => setSelectedDate(null)}
          />
        )
      ) : (
        <>
          {tab === 'calendar' && <CalendarView entries={entries} onSelectDate={setSelectedDate} />}
          {tab === 'stats' && <StreakStats entries={entries} />}
          {tab === 'settings' && (
            <div className="px-5 pb-6">
              <button
                onClick={() => setShowUnitManager(true)}
                className="w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-6"
              >
                📖 본문 관리 (단원 추가/수정)
              </button>
              <NotificationSettings role={role} />
            </div>
          )}
        </>
      )}

      {/* 하단 탭바 - 항상 표시 */}
      <div className="fixed bottom-0 left-0 right-0 bg-nightDeep border-t border-faint/20 flex">
        <button
          onClick={() => { setSelectedDate(null); setShowUnitManager(false); setTab('calendar') }}
          className={`flex-1 py-4 text-sm ${tab === 'calendar' && !selectedDate ? 'text-lamp' : 'text-faint'}`}
        >
          캘린더
        </button>
        <button
          onClick={() => { setShowUnitManager(false); setSelectedDate(todayKey()) }}
          className={`flex-1 py-4 text-sm ${selectedDate === todayKey() ? 'text-lamp' : 'text-faint'}`}
        >
          오늘
        </button>
        <button
          onClick={() => { setSelectedDate(null); setShowUnitManager(false); setTab('stats') }}
          className={`flex-1 py-4 text-sm ${tab === 'stats' && !selectedDate ? 'text-lamp' : 'text-faint'}`}
        >
          등불
        </button>
        <button
          onClick={() => { setSelectedDate(null); setShowUnitManager(false); setTab('settings') }}
          className={`flex-1 py-4 text-sm ${tab === 'settings' && !selectedDate ? 'text-lamp' : 'text-faint'}`}
        >
          설정
        </button>
      </div>
    </div>
  )
}
