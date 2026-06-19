import { useEffect, useState } from 'react'

export default function CoordinatorCheck({ dateKey, entry, onCheck, onClose }) {
  const [comment, setComment] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setComment(entry?.comment ?? '')
  }, [dateKey, entry])

  const hasContent = Boolean(entry?.content)
  const questions = Array.isArray(entry?.checkQuestions) ? entry.checkQuestions : []

  const handleToggle = async () => {
    setSaving(true)
    await onCheck(dateKey, !entry?.checked, comment)
    setSaving(false)
    if (!entry?.checked) onClose()
  }

  const handleSaveComment = async () => {
    await onCheck(dateKey, entry?.checked ?? false, comment)
  }

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">{dateKey}</h2>
        <div className="w-10" />
      </div>

      {!hasContent ? (
        <div className="text-center text-faint py-16">
          <p>아직 작성되지 않았어요.</p>
        </div>
      ) : (
        <>
          <ReadField label="오늘의 본문" value={entry.passage} />
          <ReadField label="묵상한 내용" value={entry.content} />
          <ReadField label="적용 / 실천" value={entry.application} />
          <ReadField label="기도제목" value={entry.prayer} />

          {questions.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-lamp mb-2">점검 질문</p>
              <div className="flex flex-col gap-3">
                {questions.map((q, idx) => (
                  <div key={q.id ?? idx} className="border border-lamp/30 rounded-xl p-3 bg-lamp/5">
                    {q.question && (
                      <p className="text-lamp text-sm font-semibold mb-1">{q.question}</p>
                    )}
                    <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                      {q.answer || '-'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-5">
            <p className="text-xs text-lampSoft mb-2">피드백 코멘트</p>
            <p className="text-xs text-faint/70 mb-2">작성자가 저장하면 이 내용이 보여요</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onBlur={handleSaveComment}
              rows={4}
              placeholder="말씀 묵상에 대한 피드백이나 격려를 남겨주세요"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
            />
          </div>

          <button
            onClick={handleToggle}
            disabled={saving}
            className={`w-full font-semibold py-4 rounded-2xl transition-colors disabled:opacity-60 ${
              entry?.checked
                ? 'bg-transparent border border-sage text-sage'
                : 'bg-sage text-nightDeep'
            }`}
          >
            {saving ? '처리 중...' : entry?.checked ? '확인 취소하기' : '확인했어요 🐇'}
          </button>
        </>
      )}
    </div>
  )
}

function ReadField({ label, value }) {
  return (
    <div className="mb-5">
      <p className="text-xs text-lampSoft mb-1">{label}</p>
      <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{value || '-'}</p>
    </div>
  )
}
