import { useEffect, useState } from 'react'

function detectPlatform() {
  const ua = navigator.userAgent
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream
  const isAndroid = /Android/.test(ua)
  const isStandalone =
    window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true
  return { isIOS, isAndroid, isStandalone }
}

export default function InstallGuide({ onDone }) {
  const [platform, setPlatform] = useState(detectPlatform())
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  // 이미 홈 화면에서 실행 중이면 안내를 건너뜀
  useEffect(() => {
    if (platform.isStandalone) onDone()
  }, [platform.isStandalone])

  const handleAndroidInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    await deferredPrompt.userChoice
    onDone()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-lampSoft text-sm tracking-widest mb-2">한 번만 하면 끝나요</p>
      <h1 className="font-display text-2xl mb-6">홈 화면에 등불 추가하기</h1>

      {platform.isAndroid && (
        <div className="w-full max-w-xs flex flex-col gap-3">
          {deferredPrompt ? (
            <button
              className="bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow"
              onClick={handleAndroidInstall}
            >
              설치하기
            </button>
          ) : (
            <p className="text-faint text-sm leading-relaxed">
              브라우저 메뉴(⋮)에서 <span className="text-paper">"앱 설치"</span> 또는{' '}
              <span className="text-paper">"홈 화면에 추가"</span>를 눌러주세요.
            </p>
          )}
        </div>
      )}

      {platform.isIOS && (
        <ol className="w-full max-w-xs text-left text-faint text-sm leading-relaxed space-y-3">
          <li>1. 하단(또는 상단) 공유 버튼 <span className="text-paper">[ ⬆️ ]</span> 을 눌러요</li>
          <li>2. 아래로 스크롤해서 <span className="text-paper">"홈 화면에 추가"</span>를 선택해요</li>
          <li>3. 오른쪽 위 <span className="text-paper">"추가"</span>를 누르면 끝이에요</li>
        </ol>
      )}

      {!platform.isAndroid && !platform.isIOS && (
        <p className="text-faint text-sm">PC에서는 주소창의 설치 아이콘을 눌러 추가할 수 있어요.</p>
      )}

      <button className="mt-10 text-faint text-sm underline" onClick={onDone}>
        나중에 할게요
      </button>
    </div>
  )
}
