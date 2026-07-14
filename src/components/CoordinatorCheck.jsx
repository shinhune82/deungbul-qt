import { useEffect, useState } from 'react'
import { getDailyPassage } from '../hooks/useUnits'

function normalizeSections(day) {
  if (!day) return []
  if (Array.isArray(day.sections) && day.sections.length > 0) return day.sections
  const questions = Array.isArray(day.reflectionQuestions) ? day.reflectionQuestions : []
  const sections = []
  if (day.body) sections.push({ type: 'body', body: day.body, question: null })
  questions.forEach((q) => sections.push({ type: 'reflection', body: null, question: q }))
  return sections
}

function isSaturday(dateKey) {
  return new Date(dateKey + 'T00:00:00').getDay() === 6
}

export default function CoordinatorCheck({ dateKey, entry, units, onCheck, onClose }) {
  const passage = getDailyPassage(units ?? [], dateKey)
  const isSat = isSaturday(dateKey)

  const [comment, setComment] = useState('')
  const [coordQA, setCoordQA] = useState([]) // 코디네이터 묵상질문 답변
  const [coordGroupQA, setCoordGroupQA] = useState([]) // 토요일 코디네이터 답변
  const [saving, setSaving] = useState(false)

  const sections = passage ? normalizeSections(passage) : []
  const sectionQA = Array.isArray(entry?.sectionQA) ? entry.sectionQA : []
  const groupQA = Array.isArray(entry?.groupQA) ? entry.groupQA : []

  const hasContent = Boolean(
    sectionQA.some((q) => q.answer?.trim()) ||
    groupQA.some((q) => q.answer?.trim()) ||
    entry?.groupSummary?.trim()
  )

  useEffect(() => {
    setComment(entry?.comment ?? '')

    // 코디네이터 묵상질문 답변 초기화
    const savedCoordQA = Array.isArray(entry?.coordQA) ? entry.coordQA : []
    setCoordQA(
      sections.map((s, idx) => ({
        question: s.question ?? '',
        answer: savedCoordQA[idx]?.answer ?? ''
      }))
    )

    // 토요일 코디네이터 답변 초기화
    const savedCoordGroupQA = Array.isArray(entry?.coordGroupQA) ? entry.coordGroupQA : []
    setCoordGroupQA(
      (passage?.groupQuestions ?? []).map((q, idx) => ({
        question: q,
        answer: savedCoordGroupQA[idx]?.answer ?? ''
      }))
    )
  }, [dateKey, entry])

  const handleSave = async () => {
    setSaving(true)
    await onCheck(dateKey, entry?.checked ?? false, comment, coordQA, coordGroupQA)
    setSaving(false)
  }

  const handleToggle = async () => {
    setSaving(true)
    await onCheck(dateKey, !entry?.checked, comment, coordQA, coordGroupQA)
    setSaving(false)
    if (!entry?.checked) onClose()
  }

  // ── 토요일 전용 화면 ───────────────────────────────
  if (isSat && passage?.isSaturdaySharing) {
    return (
      <div className="px-5 pb-10">
        <div className="flex items-center justify-between mb-5 pt-6">
          <button onClick={onClose} className="text-faint">‹ 닫기</button>
          <h2 className="font-display text-base">{dateKey}</h2>
          <div className="w-10" />
        </div>
        <div className="mb-6 border border-sage/40 rounded-xl px-4 py-3 bg-sage/5">
          <p className="text-xs text-sage mb-0.5">{passage.unitTitle}</p>
          <p className="font-display text-base text-sage">코디네이터(소그룹)와의 나눔</p>
        </div>

        {/* 작성자 답변 */}
        {groupQA.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-sage font-semibold mb-3">*개인이 생각할 질문 — 작성자 답변</p>
            <div className="flex flex-col gap-3">
              {groupQA.map((q, idx) => (
                <div key={idx} className="border border-sage/30 rounded-xl p-3 bg-sage/5">
                  <p className="text-paper text-sm font-semibold mb-1">{idx + 1}. {q.question}</p>
                  <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap mb-3">{q.answer || '-'}</p>
                  {/* 코디네이터 답변 칸 */}
                  <p className="text-xs text-lampSoft mb-1">코디네이터 나눔</p>
                  <textarea
                    value={coordGroupQA[idx]?.answer ?? ''}
                    onChange={(e) => {
                      const updated = [...coordGroupQA]
                      updated[idx] = { ...updated[idx], answer: e.target.value }
                      setCoordGroupQA(updated)
                    }}
                    onBlur={handleSave}
                    rows={2}
                    placeholder="함께 나눈 내용을 적어주세요"
                    className="w-full bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {entry?.groupSummary && (
          <div className="mb-5 border border-sage/40 rounded-xl p-3 bg-sage/5">
            <p className="text-xs text-sage mb-1">코디네이터와 나눌 내용 정리 — 작성자</p>
            <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{entry.groupSummary}</p>
          </div>
        )}

        {/* 피드백 코멘트 */}
        <div className="mb-5">
          <p className="text-xs text-lampSoft mb-2">피드백 코멘트</p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onBlur={handleSave}
            rows={3}
            placeholder="피드백이나 격려를 남겨주세요"
            className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
          />
        </div>

        <button
          onClick={handleToggle}
          disabled={saving}
          className={`w-full font-semibold py-4 rounded-2xl transition-colors disabled:opacity-60 ${
            entry?.checked ? 'bg-transparent border border-sage text-sage' : 'bg-sage text-nightDeep'
          }`}
        >
          {saving ? '처리 중...' : entry?.checked ? '확인 취소하기' : '확인했어요 🐇'}
        </button>
      </div>
    )
  }

  // ── 평일 화면 ─────────────────────────────────────
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
          {/* 본문 + 묵상질문 + 코디네이터 답변 교차 */}
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.body && (
                <div className="mb-4 border border-lamp/20 rounded-xl p-4 bg-lamp/5">
                  <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{section.body}</p>
                </div>
              )}
              {section.question && (
                <div className="mb-5 border border-faint/40 rounded-xl p-3">
                  <p className="text-xs text-lampSoft mb-1">묵상 질문</p>
                  <p className="text-paper text-sm font-semibold mb-2">{section.question}</p>

                  {/* 작성자 답변 */}
                  <p className="text-xs text-faint/60 mb-1">작성자</p>
                  <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap mb-3">
                    {sectionQA[idx]?.answer || '-'}
                  </p>

                  {/* 코디네이터 답변 칸 */}
                  <p className="text-xs text-lampSoft mb-1">코디네이터</p>
                  <textarea
                    value={coordQA[idx]?.answer ?? ''}
                    onChange={(e) => {
                      const updated = [...coordQA]
                      updated[idx] = { ...updated[idx], answer: e.target.value }
                      setCoordQA(updated)
                    }}
                    onBlur={handleSave}
                    rows={2}
                    placeholder="함께 나눈 내용을 적어주세요"
                    className="w-full bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                  />
                </div>
              )}
            </div>
          ))}

          {/* 피드백 코멘트 */}
          <div className="mb-5">
            <p className="text-xs text-lampSoft mb-2">피드백 코멘트</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onBlur={handleSave}
              rows={4}
              placeholder="피드백이나 격려를 남겨주세요"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
            />
          </div>

          <button
            onClick={handleToggle}
            disabled={saving}
            className={`w-full font-semibold py-4 rounded-2xl transition-colors disabled:opacity-60 ${
              entry?.checked ? 'bg-transparent border border-sage text-sage' : 'bg-sage text-nightDeep'
            }`}
          >
            {saving ? '처리 중...' : entry?.checked ? '확인 취소하기' : '확인했어요 🐇'}
          </button>
        </>
      )}
    </div>
  )
}
