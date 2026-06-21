import { useEffect, useState } from 'react'
import { getDailyPassage } from '../content/unit1'

export default function CoordinatorCheck({ dateKey, entry, onCheck, onClose }) {
  const passage = getDailyPassage(dateKey)
  const [comment, setComment] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setComment(entry?.comment ?? '')
  }, [dateKey, entry])

  const passageQA = Array.isArray(entry?.passageQA) ? entry.passageQA : []
  const groupQA = Array.isArray(entry?.groupQA) ? entry.groupQA : []
  const checks = Array.isArray(entry?.checkQuestions) ? entry.checkQuestions : []
  const hasCheckAnswers = checks.some((q) => q.question?.trim() || q.answer?.trim())
  const hasPassageAnswers = passageQA.some((q) => q.answer?.trim())
  const hasGroupAnswers = groupQA.some((q) => q.answer?.trim())
  const hasContent = Boolean(
    entry?.application?.trim() ||
    entry?.prayer?.trim() ||
    hasCheckAnswers ||
    hasPassageAnswers ||
    hasGroupAnswers
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
        <div className="mb-6 border border-lamp/30 rounded-xl p-4 bg-lamp/5">
          <p className="text-xs text-lampSoft mb-1">{passage.unitTitle}</p>
          <p className="font-display text-base text-lamp">{passage.title}</p>
        </div>
      )}

      {!hasContent ? (
        <div className="text-center text-faint py-16">
          <p>아직 작성되지 않았어요.</p>
        </div>
      ) : (
        <>
          {passageQA.length > 0 && <QASection label="묵상 질문" items={passageQA} />}

          <ReadField label="적용 / 실천" value={entry.application} />
          <ReadField label="기도제목" value={entry.prayer} />

          {groupQA.length > 0 && (
            <QASection label="코디네이터(소그룹)와 나눔" items={groupQA} accent="sage" />
          )}

          {checks.length > 0 && hasCheckAnswers && (
            <QASection label="추가 점검 질문" items={checks} />
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

function QASection({ label, items, accent = 'lamp' }) {
  const borderClass = accent === 'sage' ? 'border-sage/40 bg-sage/5' : 'border-lamp/30 bg-lamp/5'
  const labelClass = accent === 'sage' ? 'text-sage' : 'text-lampSoft'
  return (
    <div className="mb-5">
      <p className={`text-xs mb-2 ${labelClass}`}>{label}</p>
      <div className="flex flex-col gap-3">
        {items.map((q, idx) => (
          <div key={q.id ?? idx} className={`border rounded-xl p-3 ${borderClass}`}>
            {q.question && <p className="text-paper text-sm font-semibold mb-1">{q.question}</p>}
            <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
              {q.answer || '-'}
            </p>
          </div>
        ))}
      </div>
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
