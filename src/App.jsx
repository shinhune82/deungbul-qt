import { useEffect, useState } from 'react'
import RoleGate from './components/RoleGate'
import InstallGuide from './components/InstallGuide'
import CalendarView from './components/CalendarView'
import WriteEntry from './components/WriteEntry'
import CoordinatorCheck from './components/CoordinatorCheck'
import NotificationSettings from './components/NotificationSettings'
import StreakStats from './components/StreakStats'
import { useEntries, todayKey } from './hooks/useEntries'
import { ensureSignedIn } from './firebase'

const ROLE_KEY = 'qt_role'
const INSTALL_SEEN_KEY = 'qt_install_seen'

export default function App() {
  const [role, setRole] = useState(() => localStorage.getItem(ROLE_KEY))
  const [installDone, setInstallDone] = useState(() => localStorage.getItem(INSTALL_SEEN_KEY) === '1')
  const [tab, setTab] = useState('calendar')
  const [selectedDate, setSelectedDate] = useState(null)
  const [authed, setAuthed] = useState(false)

  const { entries, saveEntry, setCheck } = useEntries()

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
  if (!authed) return <div className="min-h-screen flex items-center justify-center text-faint"><p>연결 중...</p></div>

  if (selectedDate) {
    const entry = entries[selectedDate]
    return role === 'writer' ? (
      <WriteEntry
        dateKey={selectedDate}
        entry={entry}
        onSave={saveEntry}
        onClose={() => setSelectedDate(null)}
      />
    ) : (
      <CoordinatorCheck
        dateKey={selectedDate}
        entry={entry}
        onCheck={setCheck}
        onClose={() => setSelectedDate(null)}
      />
    )
  }

  return (
    <div className="min-h-screen pb-24">
      <div className="px-5 pt-6 flex items-center justify-between">
        <p className="font-display text-lampSoft text-sm tracking-widest">THE PLAN</p>
        <span className="text-xs text-faint">{role === 'writer' ? '작성자' : '코디네이터'}</span>
      </div>

      {tab === 'calendar' && <CalendarView entries={entries} onSelectDate={setSelectedDate} />}
      {tab === 'stats' && <StreakStats entries={entries} />}
      {tab === 'settings' && <NotificationSettings role={role} />}

      <div className="fixed bottom-0 left-0 right-0 bg-nightDeep border-t border-faint/20 flex">
        <button onClick={() => setTab('calendar')} className={`flex-1 py-4 text-sm ${tab === 'calendar' ? 'text-lamp' : 'text-faint'}`}>캘린더</button>
        <button onClick={() => setSelectedDate(todayKey())} className="flex-1 py-4 text-sm text-faint">오늘</button>
        <button onClick={() => setTab('stats')} className={`flex-1 py-4 text-sm ${tab === 'stats' ? 'text-lamp' : 'text-faint'}`}>등불</button>
        <button onClick={() => setTab('settings')} className={`flex-1 py-4 text-sm ${tab === 'settings' ? 'text-lamp' : 'text-faint'}`}>설정</button>
      </div>
    </div>
  )
}
