// 수동으로 작성하는 업데이트 내역
// 새 버전 추가 시 MANUAL_UPDATES 배열 맨 앞에 항목을 추가하세요.
const MANUAL_UPDATES = [
  {
    version: 'v1.3',
    date: '2026-07-04',
    items: [
      '토요일 코디네이터 나눔 화면 추가',
      '홈 화면 신설 — 캘린더·오늘·등불·설정 바로가기',
      'THE PLAN 클릭 시 홈으로 이동',
      'JSON으로 단원 가져오기 기능 추가',
    ],
  },
  {
    version: 'v1.0',
    date: '2026-06-01',
    items: [
      '더플랜 앱 최초 출시',
      '캘린더·오늘·등불·설정 탭 구성',
      '1단원 본문 탑재',
      'Firebase 연동 및 코디네이터 확인 기능',
    ],
  },
]

export default function UpdateLog({ units = [] }) {
  // Firestore에서 불러온 단원들을 업데이트 항목으로 변환
  const unitUpdates = [...units]
    .filter((u) => u.startDate && u.title)
    .sort((a, b) => (a.startDate > b.startDate ? -1 : 1))
    .map((u) => ({
      version: u.title,
      date: u.startDate,
      items: [`${u.title} 본문 등록`],
      isUnit: true,
    }))

  // 단원 업데이트 + 수동 업데이트 합치기 (날짜순 내림차순)
  const allUpdates = [...unitUpdates, ...MANUAL_UPDATES].sort((a, b) =>
    a.date > b.date ? -1 : 1
  )

  return (
    <div className="mt-6">
      <p className="text-xs text-lampSoft mb-4 tracking-widest">업데이트 내역</p>

      <div className="flex flex-col gap-4">
        {allUpdates.map((update, i) => (
          <div
            key={`${update.version}-${update.date}`}
            className={`border rounded-2xl p-4 ${
              i === 0
                ? update.isUnit
                  ? 'border-sage/40 bg-sage/5'
                  : 'border-lamp/40 bg-lamp/5'
                : 'border-faint/20 bg-night/30'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-semibold font-display ${
                  i === 0 ? (update.isUnit ? 'text-sage' : 'text-lamp') : 'text-faint'
                }`}>
                  {update.isUnit ? '📖' : '🔧'} {update.version}
                </span>
                {i === 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    update.isUnit
                      ? 'bg-sage text-nightDeep'
                      : 'bg-lamp text-nightDeep'
                  }`}>
                    최신
                  </span>
                )}
              </div>
              <span className="text-xs text-faint/60">{update.date}</span>
            </div>

            <ul className="flex flex-col gap-1.5">
              {update.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className={`mt-1 text-xs ${
                    i === 0 ? (update.isUnit ? 'text-sage' : 'text-lamp') : 'text-faint/40'
                  }`}>·</span>
                  <span className={`text-sm leading-relaxed ${
                    i === 0 ? 'text-paper' : 'text-faint/70'
                  }`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
