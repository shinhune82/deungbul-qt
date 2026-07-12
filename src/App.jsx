import { useEffect, useState } from 'react'
import RoleGate from './components/RoleGate'
import InstallGuide from './components/InstallGuide'
import CalendarView from './components/CalendarView'
import WriteEntry from './components/WriteEntry'
import CoordinatorCheck from './components/CoordinatorCheck'
import NotificationSettings from './components/NotificationSettings'
import StreakStats from './components/StreakStats'
import UnitManager from './components/UnitManager'
import UpdateLog from './components/UpdateLog'
import { useEntries, todayKey } from './hooks/useEntries'
import { useUnits } from './hooks/useUnits'
import { UNITS as STATIC_UNITS } from './content/unit1'
import { ensureSignedIn } from './firebase'

const ROLE_KEY = 'qt_role'
const INSTALL_SEEN_KEY = 'qt_install_seen'

function HomeScreen({ onTabSelect, onTodaySelect, units = [] }) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-6rem)] px-5">
      <div className="mt-4 mb-4 rounded-2xl overflow-hidden border border-lamp/20 relative">
        <img
          src="./home-image.jpeg"
          alt="더플랜"
          style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9, maxHeight: '400px', objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentElement.style.height = '160px'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1f35 0%, #0d1526 50%, #101828 100%)'
          }}
        />
        <div className="absolute bottom-3 left-0 right-0 text-center">
          <p className="font-display text-lampSoft text-base drop-shadow">말씀과 함께하는 하루</p>
          <p className="text-faint/80 text-xs tracking-wider">· THE PLAN ·</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button onClick={() => onTabSelect('calendar')} className="flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10">
          <span className="text-2xl">📅</span>
          <span className="text-lamp font-semibold text-sm">캘린더</span>
          <span className="text-faint text-xs">기록 보기</span>
        </button>
        <button onClick={onTodaySelect} className="flex flex-col items-center justify-center gap-1.5 border border-lamp rounded-2xl py-5 bg-lamp/10 shadow-glow active:bg-lamp/20">
          <span className="text-2xl">✍️</span>
          <span className="text-lamp font-semibold text-sm">오늘</span>
          <span className="text-faint text-xs">오늘 큐티 작성</span>
        </button>
        <button onClick={() => onTabSelect('stats')} className="flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10">
          <span className="text-2xl">🕯️</span>
          <span className="text-lamp font-semibold text-sm">등불</span>
          <span className="text-faint text-xs">연속 기록</span>
        </button>
        <button onClick={() => onTabSelect('settings')} className="flex flex-col items-center justify-center gap-1.5 border border-lamp/30 rounded-2xl py-5 bg-lamp/5 active:bg-lamp/10">
          <span className="text-2xl">⚙️</span>
          <span className="text-lamp font-semibold text-sm">설정</span>
          <span className="text-faint text-xs">알림·단원 관리</span>
        </button>
      </div>

      <UpdateLog units={units} />
      <div className="h-8" />
    </div>
  )
}

export default function App() {
  const [role, setRole] = useState(() => localStorage.getItem(ROLE_KEY))
  const [installDone, setInstallDone] = useState(() => localStorage.getItem(INSTALL_SEEN_KEY) === '1')
  const [tab, setTab] = useState('home')
  const [selectedDate, setSelectedDate] = useState(null)
  const [showUnitManager, setShowUnitManager] = useState(false)
  const [authed, setAuthed] = useState(false)

  const { entries, saveEntry, setCheck, deleteEntry } = useEntries()
  const { units: firestoreUnits } = useUnits()
  const units = [...STATIC_UNITS, ...firestoreUnits]

  useEffect(() => {
    ensureSignedIn(() => setAuthed(true))
  }, [])

  // ── 뒤로가기 처리 ──────────────────────────────────────
  // 상태가 바뀔 때마다 히스토리에 푸시
  const pushHistory = (state) => {
    window.history.pushState(state, '')
  }

  // 브라우저/모바일 뒤로가기 감지
  useEffect(() => {
    const handlePopState = (e) => {
      const state = e.state
      if (!state) {
        // 히스토리 바닥 → 홈으로
        setSelectedDate(null)
        setShowUnitManager(false)
        setTab('home')
        return
      }
      setTab(state.tab ?? 'home')
      setSelectedDate(state.selectedDate ?? null)
      setShowUnitManager(state.showUnitManager ?? false)
    }
    window.addEventListener('popstate', handlePopState)
    // 초기 홈 상태 등록
    window.history.replaceState({ tab: 'home', selectedDate: null, showUnitManager: false }, '')
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])
  // ────────────────────────────────────────────────────────

  const handleSelectRole = (r) => {
    localStorage.setItem(ROLE_KEY, r)
    setRole(r)
  }

  const handleInstallDone = () => {
    localStorage.setItem(INSTALL_SEEN_KEY, '1')
    setInstallDone(true)
  }

  const goHome = () => {
    setSelectedDate(null)
    setShowUnitManager(false)
    setTab('home')
    pushHistory({ tab: 'home', selectedDate: null, showUnitManager: false })
  }

  const handleTabSelect = (t) => {
    setSelectedDate(null)
    setShowUnitManager(false)
    setTab(t)
    pushHistory({ tab: t, selectedDate: null, showUnitManager: false })
  }

  const handleTodaySelect = () => {
    setShowUnitManager(false)
    setSelectedDate(todayKey())
    setTab('calendar')
    pushHistory({ tab: 'calendar', selectedDate: todayKey(), showUnitManager: false })
  }

  const handleSelectDate = (date) => {
    setSelectedDate(date)
    pushHistory({ tab, selectedDate: date, showUnitManager: false })
  }

  const handleCloseDate = () => {
    setSelectedDate(null)
    pushHistory({ tab, selectedDate: null, showUnitManager: false })
  }

  const handleShowUnitManager = () => {
    setShowUnitManager(true)
    pushHistory({ tab, selectedDate: null, showUnitManager: true })
  }

  const handleCloseUnitManager = () => {
    setShowUnitManager(false)
    pushHistory({ tab, selectedDate: null, showUnitManager: false })
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
      <div className="px-5 pt-6 flex items-center justify-between">
        <button onClick={goHome} className="font-display text-lampSoft text-sm tracking-widest">
          THE PLAN
        </button>
        <span className="text-xs text-faint">{role === 'writer' ? '작성자' : '코디네이터'}</span>
      </div>

      {showUnitManager ? (
        <UnitManager onClose={handleCloseUnitManager} />
      ) : selectedDate ? (
        role === 'writer' ? (
          <WriteEntry
            dateKey={selectedDate}
            entry={entries[selectedDate]}
            units={units}
            onSave={saveEntry}
            onDelete={deleteEntry}
            onClose={handleCloseDate}
          />
        ) : (
          <CoordinatorCheck
            dateKey={selectedDate}
            entry={entries[selectedDate]}
            units={units}
            onCheck={setCheck}
            onClose={handleCloseDate}
          />
        )
      ) : (
        <>
          {tab === 'home'     && <HomeScreen onTabSelect={handleTabSelect} onTodaySelect={handleTodaySelect} units={firestoreUnits} />}
          {tab === 'calendar' && <CalendarView entries={entries} onSelectDate={handleSelectDate} />}
          {tab === 'stats'    && <StreakStats entries={entries} />}
          {tab === 'settings' && (
            <div className="px-5 pb-6">
              <button
                onClick={handleShowUnitManager}
                className="w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-6"
              >
                📖 본문 관리 (단원 추가/수정)
              </button>
              <NotificationSettings role={role} />
            </div>
          )}
        </>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-nightDeep border-t border-faint/20 flex">
        <button onClick={() => handleTabSelect('home')} className={`flex-1 py-4 text-sm ${tab === 'home' && !selectedDate && !showUnitManager ? 'text-lamp' : 'text-faint'}`}>홈</button>
        <button onClick={() => handleTabSelect('calendar')} className={`flex-1 py-4 text-sm ${tab === 'calendar' && !selectedDate ? 'text-lamp' : 'text-faint'}`}>캘린더</button>
        <button onClick={handleTodaySelect} className={`flex-1 py-4 text-sm ${selectedDate === todayKey() ? 'text-lamp' : 'text-faint'}`}>오늘</button>
        <button onClick={() => handleTabSelect('stats')} className={`flex-1 py-4 text-sm ${tab === 'stats' && !selectedDate ? 'text-lamp' : 'text-faint'}`}>등불</button>
        <button onClick={() => handleTabSelect('settings')} className={`flex-1 py-4 text-sm ${tab === 'settings' && !selectedDate ? 'text-lamp' : 'text-faint'}`}>설정</button>
      </div>
    </div>
  )
}
