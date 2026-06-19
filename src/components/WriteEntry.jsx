import { useEffect, useState } from 'react'

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function WriteEntry({ dateKey, entry, onSave, onDelete, onClose }) {
  const [mode, setMode] = useState('view') // 'view' | 'edit'
  const [passage, setPassage] = useState('')
  const [content, setContent] = useState('')
  const [application, setApplication] = useState('')
  const [prayer, setPrayer] = useState('')
  const [checkQuestions, setCheckQuestions] = useState([])
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const hasContent = Boolean(entry?.content)

  useEffect(() => {
    setMode(hasContent ? 'view' : 'edit')
    setConfirmDelete(false)
    setPassage(entry?.passage ?? '')
    setContent(entry?.content ?? '')
    setApplication(entry?.application ?? '')
    setPrayer(entry?.prayer ?? '')

    // 기존 데이터 호환: checkQuestion(문자열) -> checkQuestions(배열)로 변환
    if (Array.isArray(entry?.checkQuestions) && entry.checkQuestions.length > 0) {
      setCheckQuestions(entry.checkQuestions)
    } else if (entry?.checkQuestion) {
      setCheckQuestions([{ id: makeId(), question: '', answer: entry.checkQuestion }])
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

  const updateQuestion = (id, field, value) => {
    setCheckQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, [field]: value } : q)))
  }

  const handleSave = async () => {
    if (saving) return
    setSaving(true)
    // 빈 항목은 제거하고 저장
    const cleaned = checkQuestions.filter((q) => q.question.trim() || q.answer.trim())
    await onSave(dateKey, { passage, content, application, prayer, checkQuestions: cleaned })
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
  const viewQuestions = Array.isArray(entry?.checkQuestions) ? entry.checkQuestions : []

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">{dateKey}</h2>
        <div className="w-10" />
      </div>

      {mode === 'view' ? (
        <>
          <ReadField label="오늘의 본문" value={entry?.passage} />
          <ReadField label="묵상한 내용" value={entry?.content} />
          <ReadField label="적용 / 실천" value={entry?.application} />
          <ReadField label="기도제목" value={entry?.prayer} />

          {viewQuestions.length > 0 && (
            <div className="mb-5">
              <p className="text-xs text-lampSoft mb-2">점검 질문</p>
              <div className="flex flex-col gap-3">
                {viewQuestions.map((q, idx) => (
                  <div key={q.id ?? idx} className="border border-faint/30 rounded-xl p-3">
                    {q.question && (
                      <p className="text-paper text-sm font-semibold mb-1">{q.question}</p>
                    )}
                    <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                      {q.answer || '-'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
          <Field label="오늘의 본문">
            <input
              value={passage}
              onChange={(e) => setPassage(e.target.value)}
              placeholder="예) 시편 23편 1-6절"
              className="w-full bg-transparent border-b border-faint pb-2 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp"
            />
          </Field>

          <Field label="묵상한 내용">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              placeholder="말씀을 통해 느낀 것을 적어주세요"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
            />
          </Field>

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

          {/* 점검 질문 - 동적 추가/삭제 */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-lampSoft">점검 질문</p>
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
                    onChange={(e) => updateQuestion(q.id, 'question', e.target.value)}
                    placeholder="질문 (예: 이번 주 나의 신앙 상태는?)"
                    className="w-full bg-transparent border-b border-faint/50 pb-2 mb-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp"
                  />
                  <textarea
                    value={q.answer}
                    onChange={(e) => updateQuestion(q.id, 'answer', e.target.value)}
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
