import { useEffect, useState } from 'react'
import { getDailyPassage } from '../hooks/useUnits'

export default function CoordinatorCheck({ dateKey, entry, units, onCheck, onClose }) {
  const passage = getDailyPassage(units ?? [], dateKey)
  const [comment, setComment] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setComment(entry?.comment ?? '')
  }, [dateKey, entry])

  const sections = Array.isArray(passage?.sections) ? passage.sections : []
  const sectionQA = Array.isArray(entry?.sectionQA) ? entry.sectionQA : []
  const groupQA = Array.isArray(entry?.groupQA) ? entry.groupQA : []

  const hasContent = Boolean(
    sectionQA.some((q) => q.answer?.trim()) ||
    groupQA.some((q) => q.answer?.trim()) ||
    entry?.groupSummary?.trim()
  )

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

      {passage && (
        <div className="mb-4 border border-lamp/30 rounded-xl px-4 py-3 bg-lamp/5">
          <p className="text-xs text-lampSoft mb-0.5">{passage.unitTitle}</p>
          <p className="font-display text-base text-lamp">{passage.title}</p>
        </div>
      )}

      {!hasContent ? (
        <div className="text-center text-faint py-16">
          <p>아직 작성되지 않았어요.</p>
        </div>
      ) : (
        <>
          {/* 본문 - 묵상질문 - 본문 - 묵상질문 교차 */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <div className="mb-4 border border-lamp/20 rounded-xl p-4 bg-lamp/5">
                <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{section.body}</p>
              </div>
              {section.question && (
                <div className="mb-5 border border-faint/40 rounded-xl p-3">
                  <p className="text-xs text-lampSoft mb-1">묵상 질문</p>
                  <p className="text-paper text-sm font-semibold mb-2">{section.question}</p>
                  <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                    {sectionQA[idx]?.answer || '-'}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* 코디네이터 나눔 */}
          {groupQA.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-sage mb-2">코디네이터(소그룹)와의 나눔 — 개인 생각 질문</p>
              <div className="flex flex-col gap-3">
                {groupQA.map((q, idx) => (
                  <div key={q.id ?? idx} className="border border-sage/40 rounded-xl p-3 bg-sage/5">
                    <p className="text-paper text-sm font-semibold mb-1">{q.question}</p>
                    <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{q.answer || '-'}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {entry?.groupSummary && (
            <div className="mb-5 border border-sage/40 rounded-xl p-3 bg-sage/5">
              <p className="text-xs text-sage mb-1">코디네이터와 나눌 내용 정리</p>
              <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{entry.groupSummary}</p>
            </div>
          )}

          {/* 피드백 */}
          <div className="mb-5">
            <p className="text-xs text-lampSoft mb-2">피드백 코멘트</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onBlur={handleSaveComment}
              rows={4}
              placeholder="피드백이나 격려를 남겨주세요"
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
