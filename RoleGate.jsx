import { useState } from 'react'

const COORDINATOR_PASSCODE = '0000'

export default function RoleGate({ onSelect }) {
  const [showPasscode, setShowPasscode] = useState(false)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  const handleCoordinator = () => {
    if (code === COORDINATOR_PASSCODE) {
      onSelect('coordinator')
    } else {
      setError('코드가 맞지 않아요. 다시 확인해 주세요.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-lampSoft text-sm tracking-widest mb-2">더플랜 · THE PLAN</p>
      <h1 className="font-display text-3xl mb-1">누구로 들어가시겠어요?</h1>
      <p className="text-faint text-sm mb-10">이 기기에서 사용할 역할을 한 번만 선택하면 됩니다</p>

      <div className="w-full max-w-xs flex flex-col gap-3">
        <button
          className="bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow"
          onClick={() => onSelect('writer')}
        >
          작성자로 들어가기
        </button>

        {!showPasscode ? (
          <button
            className="border border-faint text-paper py-4 rounded-2xl"
            onClick={() => setShowPasscode(true)}
          >
            코디네이터로 들어가기
          </button>
        ) : (
          <div className="border border-faint rounded-2xl p-4 flex flex-col gap-2">
            <input
              autoFocus
              inputMode="numeric"
              maxLength={4}
              placeholder="4자리 코드"
              value={code}
              onChange={(e) => {
                setError('')
                setCode(e.target.value)
              }}
              className="bg-night border border-faint rounded-xl px-4 py-3 text-center text-lg tracking-widest"
            />
            {error && <p className="text-sm text-red-300">{error}</p>}
            <button className="bg-sage text-nightDeep font-semibold py-3 rounded-xl" onClick={handleCoordinator}>
              확인
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
