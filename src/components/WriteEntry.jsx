import { useEffect, useState } from 'react'

export default function WriteEntry({ dateKey, entry, onSave, onClose }) {
  const [mode, setMode] = useState('view') // 'view' | 'edit'
  const [passage, setPassage] = useState('')
  const [content, setContent] = useState('')
  const [application, setApplication] = useState('')
  const [prayer, setPrayer] = useState('')
  const [checkQuestion, setCheckQuestion] = useState('')
  const [saving, setSaving] = useState(false)

  const hasContent = Boolean(entry?.content)

  useEffect(() => {
    // 미작성이면 바로 편집 모드
    setMode(hasContent ? 'view' : 'edit')
    setPassage(entry?.passage ?? '')
    setContent(entry?.content ?? '')
    setApplication(entry?.application ?? '')
    setPrayer(entry?.prayer ?? '')
    setCheckQuestion(entry?.checkQuestion ?? '')
  }, [dateKey, entry])

  const handleSave = async () => {
    if (saving) return
    setSaving(true)
    await onSave(dateKey, { passage, content, application, prayer, checkQuestion })
    setSaving(false)
    onClose()
  }

  const hasFeedback = entry?.checked || entry?.comment

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">{dateKey}</h2>
        <div className="w-10" />
      </div>

      {mode === 'view' ? (
        /* ── 읽기 화면 ── */
        <>
          <ReadField label="오늘의 본문" value={entry?.passage} />
          <ReadField label="묵상한 내용" value={entry?.content} />
          <ReadField label="적용 / 실천" value={entry?.application} />
          <ReadField label="기도제목" value={entry?.prayer} />
          {entry?.checkQuestion && (
            <ReadField label="점검 질문" value={entry.checkQuestion} />
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
            className="w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl"
          >
            수정하기
          </button>
        </>
      ) : (
        /* ── 편집 화면 ── */
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

          <Field label="점검 질문">
            <textarea
              value={checkQuestion}
              onChange={(e) => setCheckQuestion(e.target.value)}
              rows={4}
              placeholder={"이번 주 나의 신앙 상태는 어떤가요?\n코디네이터에게 나누고 싶은 것이 있나요?"}
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
            />
          </Field>

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
