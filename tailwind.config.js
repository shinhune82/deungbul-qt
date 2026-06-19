/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#1B2240',
        nightDeep: '#10162C',
        lamp: '#E8A33D',
        lampSoft: '#F2C879',
        paper: '#F7F1E2',
        ink: '#2B2A28',
        sage: '#7C9473',
        faint: '#D9CFB8'
      },
      fontFamily: {
        display: ['"Noto Serif KR"', 'serif'],
        body: ['"Pretendard Variable"', 'Pretendard', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 18px 4px rgba(232, 163, 61, 0.45)'
      }
    }
  },
  plugins: []
}
