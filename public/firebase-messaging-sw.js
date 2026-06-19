/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js')

// ⚠️ src/firebase.js 의 firebaseConfig 와 동일한 값으로 채워주세요.
// 서비스워커는 모듈 import를 못 쓰기 때문에 값을 여기 한 번 더 적어야 합니다.
firebase.initializeApp({
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {}
  self.registration.showNotification(title || '등불', {
    body: body || '오늘의 말씀을 확인해 주세요',
    icon: './icons/icon-192.png'
  })
})
