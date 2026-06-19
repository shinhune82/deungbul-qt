import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth'
import { getMessaging, isSupported as isMessagingSupported } from 'firebase/messaging'

// ⚠️ Firebase 콘솔 > 프로젝트 설정 > 일반 탭 하단 "내 앱"에서 복사해서 채워주세요.
// 이 값들은 비밀키가 아니라 클라이언트 식별자라 코드에 그대로 둬도 괜찮습니다.
// 실제 보안은 Firestore 보안 규칙(firestore.rules)이 담당합니다.
const firebaseConfig = {
  apiKey: "AIzaSyACbnHcH9OPbZurDjWf8m1cazFOSSadYKE",
  authDomain: "deungbul-qt.firebaseapp.com",
  projectId: "deungbul-qt",
  storageBucket: "deungbul-qt.firebasestorage.app",
  messagingSenderId: "1048157032708",
  appId: "1:1048157032708:web:46aab740a361a9f5ebc051",
  measurementId: "G-GQXXJHHKL7"
}

// Cloud Messaging > 웹 푸시 인증서에서 발급되는 VAPID 공개키
export const VAPID_KEY = 'BCm1sLB19B--eH-e3FgGQhaxwZlWeoF7oA7Fa2V3FWZWE44quYgHDyugQNux5hIe7U7qhRSvRvLEERpojWaXqEo'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

let messagingInstance = null
export async function getMessagingIfSupported() {
  if (messagingInstance) return messagingInstance
  const supported = await isMessagingSupported().catch(() => false)
  if (!supported) return null
  messagingInstance = getMessaging(app)
  return messagingInstance
}

// 본인 인증 없이 둘만 쓰는 앱이므로, 익명 로그인으로 Firestore 규칙에서
// "로그인된 사용자만 읽기/쓰기 가능" 정도의 최소 보안만 건다.
export function ensureSignedIn(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user)
    } else {
      signInAnonymously(auth).catch((err) => console.error('익명 로그인 실패', err))
    }
  })
}
