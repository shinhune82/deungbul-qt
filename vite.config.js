import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/deungbul-qt/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: '등불 - 말씀 QT 노트',
        short_name: '등불',
        description: '매일 말씀 묵상과 코디네이터 피드백',
        theme_color: '#1B2240',
        background_color: '#1B2240',
        display: 'standalone',
        start_url: '/deungbul-qt/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      strategies: 'generateSW',
      workbox: {
        importScripts: ['firebase-messaging-sw.js']
      }
    })
  ]
})
