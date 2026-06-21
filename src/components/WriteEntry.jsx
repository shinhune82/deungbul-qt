import { useEffect, useState } from 'react'
import { getDailyPassage } from '../hooks/useUnits'

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function WriteEntry({ dateKey, entry, units, onSave, onDelete, onClose }) {
  const passage = getDailyPassage(units ?? [], dateKey)
  const [mode, setMode] = useState('view')
  const [showFullBody, setShowFullBody] = useState(false)

  const [application, setApplication] = useState('')
  const [prayer, setPrayer] = useState('')
  const [passageQA, setPassageQA] = useState([])
  const [groupQA, setGroupQA] = useState([])
  const [checkQuestions, setCheckQuestions] = useState([])

  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const hasCheckAnswersInit = Array.isArray(entry?.checkQuestions)
    ? entry.checkQuestions.some((q) => q.question?.trim() || q.answer?.trim())
    : false
  const hasPassageQA = Array.isArray(entry?.passageQA)
    ? entry.passageQA.some((q) => q.answer?.trim())
    : false
  const hasGroupQA = Array.isArray(entry?.groupQA)
    ? entry.groupQA.some((q) => q.answer?.trim())
    : false
  const hasContent = Boolean(
    entry?.application?.trim() ||
    entry?.prayer?.trim() ||
    hasCheckAnswersInit ||
    hasPassageQA ||
    hasGroupQA
  )

  useEffect(() => {
    setMode(hasContent ? 'view' : 'edit')
    setConfirmDelete(false)
    setShowFullBody(false)
    setApplication(entry?.application ?? '')
    setPrayer(entry?.prayer ?? '')

    if (passage) {
      const saved = Array.isArray(entry?.passageQA) ? entry.passageQA : []
      setPassageQA(
        passage.reflectionQuestions.map((q, idx) => ({
          id: saved[idx]?.id ?? makeId(),
          question: q,
          answer: saved[idx]?.answer ?? ''
        }))
      )
      const savedGroup = Array.isArray(entry?.groupQA) ? entry.groupQA : []
      setGroupQA(
        passage.groupQuestions.map((q, idx) => ({
          id: savedGroup[idx]?.id ?? makeId(),
          question: q,
          answer: savedGroup[idx]?.answer ?? ''
        }))
      )
    } else {
      setPassageQA([])
      setGroupQA([])
    }

    if (Array.isArray(entry?.checkQuestions) && entry.checkQuestions.length > 0) {
      setCheckQuestions(entry.checkQuestions)
    } else {
      setCheckQuestions([{ id: makeId(), question: '', answer: '' }])
    }
  }, [dateKey, entry])

  const addQuestion = () => {
    setCheckQuestions((prev) => [...prev, { id: makeId(), question: '', answer: '' }])
  }
  const removeQuestion = (id) => {
    setCheckQuestions((prev) => (prev.length > 1 ? prev.filter((q) => q.id !== id) : prev))
  }
  const updateQuestion = (list, setList, id, field, value) => {
    setList((prev) => prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)))
  }

  const handleSave = async () => {
    if (saving) return
    setSaving(true)
    const cleanedChecks = checkQuestions.filter((q) => q.question.trim() || q.answer.trim())
    await onSave(dateKey, {
      passage: passage?.title ?? '',
      content: passage ? `${passage.unitTitle} - ${passage.title}` : '',
      application,
      prayer,
      passageQA,
      groupQA,
      checkQuestions: cleanedChecks
    })
    setSaving(false)
    onClose()
  }

  const handleDelete = async () => {
    if (!confirmDelete) {
      setConfirmDelete(true)
      return
    }
    setSaving(true)
    await onDelete(dateKey)
    setSaving(false)
    onClose()
  }

  const hasFeedback = entry?.checked || entry?.comment
  const viewPassageQA = Array.isArray(entry?.passageQA) ? entry.passageQA : []
  const viewGroupQA = Array.isArray(entry?.groupQA) ? entry.groupQA : []
  const viewChecks = Array.isArray(entry?.checkQuestions) ? entry.checkQuestions : []

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">{dateKey}</h2>
        <div className="w-10" />
      </div>

      {passage ? (
        <div className="mb-6 border border-lamp/30 rounded-xl p-4 bg-lamp/5">
          <p className="text-xs text-lampSoft mb-1">{passage.unitTitle}</p>
          <p className="font-display text-base text-lamp mb-3">{passage.title}</p>
          <p
            className={`text-paper text-sm leading-relaxed whitespace-pre-wrap ${
              showFullBody ? '' : 'line-clamp-6'
            }`}
          >
            {passage.body}
          </p>
          <button
            onClick={() => setShowFullBody((v) => !v)}
            className="text-xs text-lamp underline mt-2"
          >
            {showFullBody ? '본문 접기' : '본문 전체 보기'}
          </button>
        </div>
      ) : (
        <div className="mb-6 border border-faint/30 rounded-xl p-4 text-center text-faint text-sm">
          이 날짜에는 등록된 본문이 없어요 (주말이거나 단원 범위 밖)
        </div>
      )}

      {mode === 'view' ? (
        <>
          {viewPassageQA.length > 0 && (
            <QASection label="묵상 질문" items={viewPassageQA} />
          )}

          <ReadField label="적용 / 실천" value={entry?.application} />
          <ReadField label="기도제목" value={entry?.prayer} />

          {viewGroupQA.length > 0 && (
            <QASection label="코디네이터(소그룹)와 나눔" items={viewGroupQA} accent="sage" />
          )}

          {viewChecks.length > 0 && viewChecks.some((q) => q.question || q.answer) && (
            <QASection label="추가 점검 질문" items={viewChecks} />
          )}

          {hasFeedback && (
            <div className="mt-2 mb-6 border border-sage/50 rounded-xl p-4 bg-sage/10">
              <p className="text-sage text-sm font-semibold mb-1">
                {entry?.checked ? '코디네이터가 확인했어요 🐇' : '코디네이터 코멘트'}
              </p>
              {entry?.comment && (
                <p className="text-paper text-sm leading-relaxed">{entry.comment}</p>
              )}
            </div>
          )}

          <button
            onClick={() => setMode('edit')}
            className="w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-3"
          >
            수정하기
          </button>

          {!confirmDelete ? (
            <button onClick={handleDelete} className="w-full text-faint text-sm py-2">
              이 날짜 기록 삭제
            </button>
          ) : (
            <div className="border border-red-400/40 rounded-xl p-4 text-center">
              <p className="text-sm text-paper mb-3">정말 삭제할까요? 되돌릴 수 없어요.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 border border-faint text-faint py-2 rounded-xl text-sm"
                >
                  취소
                </button>
                <button
                  onClick={handleDelete}
                  disabled={saving}
                  className="flex-1 bg-red-400/80 text-nightDeep py-2 rounded-xl text-sm font-semibold disabled:opacity-60"
                >
                  {saving ? '삭제 중...' : '삭제하기'}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          {passageQA.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-lampSoft mb-2">묵상 질문</p>
              <div className="flex flex-col gap-3">
                {passageQA.map((q) => (
                  <div key={q.id} className="border border-faint/40 rounded-xl p-3">
                    <p className="text-paper text-sm font-semibold mb-2">{q.question}</p>
                    <textarea
                      value={q.answer}
                      onChange={(e) =>
                        updateQuestion(passageQA, setPassageQA, q.id, 'answer', e.target.value)
                      }
                      rows={3}
                      placeholder="답변을 적어주세요"
                      className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Field label="적용 / 실천">
            <textarea
              value={application}
              onChange={(e) => setApplication(e.target.value)}
              rows={3}
              placeholder="오늘 실천할 한 가지"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
            />
          </Field>

          <Field label="기도제목">
            <textarea
              value={prayer}
              onChange={(e) => setPrayer(e.target.value)}
              rows={3}
              placeholder="함께 나누고 싶은 기도제목"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
            />
          </Field>

          {groupQA.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-sage mb-2">코디네이터(소그룹)와 나눔</p>
              <div className="flex flex-col gap-3">
                {groupQA.map((q) => (
                  <div key={q.id} className="border border-sage/40 rounded-xl p-3 bg-sage/5">
                    <p className="text-paper text-sm font-semibold mb-2">{q.question}</p>
                    <textarea
                      value={q.answer}
                      onChange={(e) =>
                        updateQuestion(groupQA, setGroupQA, q.id, 'answer', e.target.value)
                      }
                      rows={3}
                      placeholder="답변을 적어주세요"
                      className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-lampSoft">추가 점검 질문 (선택)</p>
              <button
                onClick={addQuestion}
                type="button"
                className="text-xs text-lamp border border-lamp/50 rounded-lg px-2 py-1"
              >
                + 질문 추가
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {checkQuestions.map((q, idx) => (
                <div key={q.id} className="border border-faint/40 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-faint">질문 {idx + 1}</span>
                    {checkQuestions.length > 1 && (
                      <button
                        onClick={() => removeQuestion(q.id)}
                        type="button"
                        className="text-xs text-faint underline"
                      >
                        삭제
                      </button>
                    )}
                  </div>
                  <input
                    value={q.question}
                    onChange={(e) =>
                      updateQuestion(checkQuestions, setCheckQuestions, q.id, 'question', e.target.value)
                    }
                    placeholder="자유롭게 질문을 적어보세요"
                    className="w-full bg-transparent border-b border-faint/50 pb-2 mb-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp"
                  />
                  <textarea
                    value={q.answer}
                    onChange={(e) =>
                      updateQuestion(checkQuestions, setCheckQuestions, q.id, 'answer', e.target.value)
                    }
                    rows={3}
                    placeholder="답변을 적어주세요"
                    className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {hasContent && (
              <button
                onClick={() => setMode('view')}
                className="flex-1 border border-faint text-faint font-semibold py-4 rounded-2xl"
              >
                취소
              </button>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex-1 bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60"
            >
              {saving ? '저장 중...' : '저장하기'}
            </button>
          </div>
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

function Field({ label, children }) {
  return (
    <div className="mb-5">
      <p className="text-xs text-lampSoft mb-2">{label}</p>
      {children}
    </div>
  )
}
