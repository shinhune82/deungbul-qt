# 등불 — 말씀 QT 노트

작성자가 매일 QT를 기록하고, 코디네이터가 확인 + 코멘트를 남기는 2인용 PWA입니다.
기존 여행일지/베이비밀프랩과 같은 구조(React + Firebase + GitHub Pages)로 만들었습니다.

## 1. Firebase 프로젝트 준비

1. https://console.firebase.google.com 에서 새 프로젝트 생성
2. **Firestore Database** 만들기 (프로덕션 모드, 리전은 asia-northeast3 추천)
3. **Authentication** → 로그인 방법에서 **익명(Anonymous)** 활성화
   - 둘만 쓰는 개인 앱이라 실명 로그인 없이 익명 인증 + Firestore 규칙으로만 최소 보안을 걸어둔 구조입니다.
4. **Cloud Messaging** → 웹 푸시 인증서 키 쌍 생성 → "키 쌍" 값을 복사 (이게 VAPID_KEY)
5. 프로젝트 설정 → 일반 → 내 앱 → 웹 앱 추가 → `firebaseConfig` 값 복사

## 2. 설정값 채우기

아래 두 파일에 **같은 firebaseConfig 값**을 채워주세요. (이 값들은 비밀키가 아니라 클라이언트 식별자입니다)

- `src/firebase.js` — `firebaseConfig`, `VAPID_KEY`
- `public/firebase-messaging-sw.js` — `firebase.initializeApp({...})` 안의 값

`src/components/RoleGate.jsx` 상단의 `COORDINATOR_PASSCODE`도 원하는 4자리 숫자로 바꿔주세요.

## 3. 로컬 실행

```bash
npm install
npm run dev
```

## 4. Firestore 보안 규칙 + Cloud Functions 배포

알림 발송 함수는 정해진 시각에 트리거되는 스케줄 함수라서 **Blaze(종량제) 플랜**이 필요합니다.
이 정도 사용량(15분마다 실행, 알림 발송)은 무료 할당량 안에서 거의 비용이 발생하지 않습니다.

```bash
npm install -g firebase-tools
firebase login
firebase use --add        # 방금 만든 프로젝트 선택
firebase deploy --only firestore:rules,functions
```

## 5. GitHub Pages 배포

`vite.config.js`의 `base` 값을 레포 구조에 맞게 확인하세요.
- `shinhune82.github.io/저장소이름` 형태로 배포 → `base: '/저장소이름/'`
- 루트 도메인에 직접 배포 → `base: '/'`

```bash
npm run build
# dist 폴더 내용을 gh-pages 브랜치 또는 GitHub Pages가 보는 폴더로 복사/푸시
```

## 6. 홈 화면 추가 + 알림 켜기 (두 분 모두 1회)

1. 배포된 주소를 각자 폰에서 열기
2. 앱 안내에 따라 홈 화면에 추가 (안드로이드는 버튼 한 번, 아이폰은 공유 → 홈 화면에 추가)
3. 홈 화면 아이콘으로 다시 실행 → 역할 선택 → 설정 탭 → "이 기기에서 알림 받기" 누르기

아이폰은 iOS 16.4 이상에서, **반드시 홈 화면에 추가한 뒤** 그 아이콘으로 실행한 상태에서만 알림 권한을 받을 수 있습니다.

## 폴더 구조

```
src/
  components/    화면 단위 컴포넌트
  hooks/useEntries.js   Firestore 실시간 구독 + 저장/체크 함수
  firebase.js    Firebase 초기화
functions/
  index.js       15분마다 실행되는 알림 스케줄러
firestore.rules  최소 보안 규칙 (익명 로그인 필수)
```

## 다음에 직접 손볼 만한 부분

- `public/icons/icon-192.png`, `icon-512.png` — 지금은 임시로 생성한 단순 등불 아이콘입니다. 원하는 이미지로 교체하면 좋습니다.
- 코디네이터 코멘트에 "답글" 기능을 추가하고 싶다면 `comment` 필드를 배열 구조로 바꾸면 됩니다.
