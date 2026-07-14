import { useEffect, useState } from 'react'
import { getDailyPassage } from '../hooks/useUnits'

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

function normalizeSections(day) {
  if (!day) return []
  if (Array.isArray(day.sections) && day.sections.length > 0) return day.sections
  const questions = Array.isArray(day.reflectionQuestions) ? day.reflectionQuestions : []
  const sections = []
  if (day.body) sections.push({ type: 'body', body: day.body, question: null })
  questions.forEach((q) => sections.push({ type: 'reflection', body: null, question: q }))
  return sections
}

export default function WriteEntry({ dateKey, entry, units, onSave, onDelete, onClose }) {
  const passage = getDailyPassage(units ?? [], dateKey)
  const isSaturday = passage?.isSaturdaySharing === true

  const [mode, setMode] = useState('view')
  const [sectionQA, setSectionQA] = useState([])
  const [groupQA, setGroupQA] = useState([])
  const [groupSummary, setGroupSummary] = useState('')
  const [saving, setSaving] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const hasSectionAnswers = Array.isArray(entry?.sectionQA)
    ? entry.sectionQA.some((q) => q.answer?.trim()) : false
  const hasGroupAnswers = Array.isArray(entry?.groupQA)
    ? entry.groupQA.some((q) => q.answer?.trim()) : false
  const hasContent = Boolean(
    hasSectionAnswers || hasGroupAnswers ||
    entry?.groupSummary?.trim() || entry?.groupSharing?.trim()
  )

  useEffect(() => {
    setMode(hasContent ? 'view' : 'edit')
    setConfirmDelete(false)
    setGroupSummary(entry?.groupSummary ?? '')

    if (passage) {
      const savedGroup = Array.isArray(entry?.groupQA) ? entry.groupQA : []
      setGroupQA(
        (passage.groupQuestions ?? []).map((q, idx) => ({
          id: savedGroup[idx]?.id ?? makeId(),
          question: q,
          answer: savedGroup[idx]?.answer ?? ''
        }))
      )
      if (!isSaturday) {
        const rawSections = normalizeSections(passage)
        const saved = Array.isArray(entry?.sectionQA) ? entry.sectionQA : []
        setSectionQA(
          rawSections.map((s, idx) => ({
            id: saved[idx]?.id ?? makeId(),
            question: s.question ?? '',
            answer: saved[idx]?.answer ?? ''
          }))
        )
      } else {
        setSectionQA([])
      }
    } else {
      setSectionQA([])
      setGroupQA([])
    }
  }, [dateKey, entry])

  const handleSave = async () => {
    if (saving) return
    setSaving(true)
    await onSave(dateKey, {
      passage: passage?.title ?? '',
      content: passage ? `${passage.unitTitle} - ${passage.title}` : '',
      sectionQA,
      groupQA,
      groupSummary
    })
    setSaving(false)
    onClose()
  }

  const handleDelete = async () => {
    if (!confirmDelete) { setConfirmDelete(true); return }
    setSaving(true)
    await onDelete(dateKey)
    setSaving(false)
    onClose()
  }

  const hasFeedback = entry?.checked || entry?.comment
  const viewSectionQA = Array.isArray(entry?.sectionQA) ? entry.sectionQA : []
  const viewGroupQA = Array.isArray(entry?.groupQA) ? entry.groupQA : []
  const viewCoordQA = Array.isArray(entry?.coordQA) ? entry.coordQA : []
  const viewCoordGroupQA = Array.isArray(entry?.coordGroupQA) ? entry.coordGroupQA : []
  const sections = (!isSaturday && passage) ? normalizeSections(passage) : []

  // ── 토요일 전용 화면 ───────────────────────────────────────
  if (isSaturday) {
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

        {mode === 'view' ? (
          <>
            {groupQA.length > 0 && (
              <div className="mb-6">
                <p className="text-xs text-sage font-semibold mb-1">*개인이 생각할 질문</p>
                <p className="text-xs text-faint/70 mb-3">
                  다음의 질문들은 이미 공부하면서 생각했던 질문들입니다. 다시 한 번 질문들을 생각하시며 정리해보십시오.
                </p>
                <div className="flex flex-col gap-3">
                  {groupQA.map((q, idx) => (
                    <div key={q.id ?? idx} className="border border-sage/30 rounded-xl p-3 bg-sage/5">
                      <p className="text-paper text-sm font-semibold mb-1">{idx + 1}. {q.question}</p>
                      {/* 작성자 답변 */}
                      <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap mb-2">{q.answer || '-'}</p>
                      {/* 코디네이터 답변 — 내용 있을 때만 */}
                      {viewCoordGroupQA[idx]?.answer?.trim() && (
                        <div className="mt-2 pt-2 border-t border-faint/20">
                          <p className="text-xs text-lampSoft mb-1">코디네이터</p>
                          <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                            {viewCoordGroupQA[idx].answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs text-sage font-semibold mb-1">*코디네이터(소그룹)와 나눌 생각 정리하기</p>
              <p className="text-xs text-faint/70 mb-3">
                잠언 1장 1절에서 7절을 읽을 때 다가온 구절(lexio)을 쪽지에 적었을텐데, 그 쪽지묵상 말씀과 함께 몇 번이나 읽으며 묵상했는지, 또한 깨달은 것은 무엇인지를 적고 동시에 내가 대답한 기도(oratio)를 정리하십시오.
              </p>
              <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">{entry?.groupSummary || '-'}</p>
            </div>

            <div className="mb-6 border border-sage/20 rounded-xl p-3 bg-sage/5">
              <p className="text-xs text-sage font-semibold mb-1">*코디네이터(소그룹)에서 나누기</p>
              <p className="text-xs text-faint/70">정리된 생각을 코디네이터에게 먼저 얘기하고 나누는 시간을 가지십시오.</p>
            </div>

            {hasFeedback && (
              <div className="mt-2 mb-6 border border-sage/50 rounded-xl p-4 bg-sage/10">
                <p className="text-sage text-sm font-semibold mb-1">
                  {entry?.checked ? '코디네이터가 확인했어요 🐇' : '코디네이터 코멘트'}
                </p>
                {entry?.comment && <p className="text-paper text-sm leading-relaxed">{entry.comment}</p>}
              </div>
            )}

            <button onClick={() => setMode('edit')} className="w-full border border-sage text-sage font-semibold py-4 rounded-2xl mb-3">수정하기</button>
            {!confirmDelete ? (
              <button onClick={handleDelete} className="w-full text-faint text-sm py-2">이 날짜 기록 삭제</button>
            ) : (
              <div className="border border-red-400/40 rounded-xl p-4 text-center">
                <p className="text-sm text-paper mb-3">정말 삭제할까요? 되돌릴 수 없어요.</p>
                <div className="flex gap-2">
                  <button onClick={() => setConfirmDelete(false)} className="flex-1 border border-faint text-faint py-2 rounded-xl text-sm">취소</button>
                  <button onClick={handleDelete} disabled={saving} className="flex-1 bg-red-400/80 text-nightDeep py-2 rounded-xl text-sm font-semibold disabled:opacity-60">{saving ? '삭제 중...' : '삭제하기'}</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {groupQA.length > 0 && (
              <div className="mb-6">
                <p className="text-xs text-sage font-semibold mb-1">*개인이 생각할 질문</p>
                <p className="text-xs text-faint/70 mb-3">
                  다음의 질문들은 이미 공부하면서 생각했던 질문들입니다. 다시 한 번 질문들을 생각하시며 정리해보십시오.
                </p>
                <div className="flex flex-col gap-3">
                  {groupQA.map((q, idx) => (
                    <div key={q.id} className="border border-sage/30 rounded-xl p-3 bg-sage/5">
                      <p className="text-paper text-sm font-semibold mb-2">{idx + 1}. {q.question}</p>
                      <textarea
                        value={q.answer}
                        onChange={(e) => {
                          const updated = [...groupQA]
                          updated[idx] = { ...updated[idx], answer: e.target.value }
                          setGroupQA(updated)
                        }}
                        rows={3}
                        placeholder="답변을 적어주세요"
                        className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6 border border-sage/40 rounded-xl p-4 bg-sage/5">
              <p className="text-xs text-sage font-semibold mb-1">*코디네이터(소그룹)와 나눌 생각 정리하기</p>
              <p className="text-xs text-faint/70 mb-3">
                잠언 1장 1절에서 7절을 읽을 때 다가온 구절(lexio)을 쪽지에 적었을텐데, 그 쪽지묵상 말씀과 함께 몇 번이나 읽으며 묵상했는지, 또한 깨달은 것은 무엇인지를 적고 동시에 내가 대답한 기도(oratio)를 정리하십시오.
              </p>
              <textarea
                value={groupSummary}
                onChange={(e) => setGroupSummary(e.target.value)}
                rows={6}
                placeholder="깨닫게 된 것을 정리하고 나눔 후 느낀 점도 함께 적어두세요"
                className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
              />
            </div>

            <div className="mb-6 border border-sage/20 rounded-xl p-3 bg-sage/5">
              <p className="text-xs text-sage font-semibold mb-1">*코디네이터(소그룹)에서 나누기</p>
              <p className="text-xs text-faint/70">정리된 생각을 코디네이터에게 먼저 얘기하고 나누는 시간을 가지십시오.</p>
            </div>

            <div className="flex gap-3">
              {hasContent && <button onClick={() => setMode('view')} className="flex-1 border border-faint text-faint font-semibold py-4 rounded-2xl">취소</button>}
              <button onClick={handleSave} disabled={saving} className="flex-1 bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60">
                {saving ? '저장 중...' : '저장하기'}
              </button>
            </div>
          </>
        )}
      </div>
    )
  }

  // ── 평일 화면 ────────────────────────────────────────────
  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">{dateKey}</h2>
        <div className="w-10" />
      </div>

      {passage ? (
        <div className="mb-4 border border-lamp/30 rounded-xl px-4 py-3 bg-lamp/5">
          <p className="text-xs text-lampSoft mb-0.5">{passage.unitTitle}</p>
          <p className="font-display text-base text-lamp">{passage.title}</p>
        </div>
      ) : (
        <div className="mb-6 border border-faint/30 rounded-xl p-4 text-center text-faint text-sm">
          이 날짜에는 등록된 본문이 없어요 (주말이거나 단원 범위 밖)
        </div>
      )}

      {mode === 'view' ? (
        <>
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
                  <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                    {viewSectionQA[idx]?.answer || '-'}
                  </p>
                  {/* 코디네이터 답변 — 내용 있을 때만 표시 */}
                  {viewCoordQA[idx]?.answer?.trim() && (
                    <div className="mt-3 pt-3 border-t border-faint/20">
                      <p className="text-xs text-lampSoft mb-1">코디네이터</p>
                      <p className="text-paper text-sm leading-relaxed whitespace-pre-wrap">
                        {viewCoordQA[idx].answer}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {hasFeedback && (
            <div className="mt-2 mb-6 border border-sage/50 rounded-xl p-4 bg-sage/10">
              <p className="text-sage text-sm font-semibold mb-1">
                {entry?.checked ? '코디네이터가 확인했어요 🐇' : '코디네이터 코멘트'}
              </p>
              {entry?.comment && <p className="text-paper text-sm leading-relaxed">{entry.comment}</p>}
            </div>
          )}

          <button onClick={() => setMode('edit')} className="w-full border border-lamp text-lamp font-semibold py-4 rounded-2xl mb-3">수정하기</button>
          {!confirmDelete ? (
            <button onClick={handleDelete} className="w-full text-faint text-sm py-2">이 날짜 기록 삭제</button>
          ) : (
            <div className="border border-red-400/40 rounded-xl p-4 text-center">
              <p className="text-sm text-paper mb-3">정말 삭제할까요? 되돌릴 수 없어요.</p>
              <div className="flex gap-2">
                <button onClick={() => setConfirmDelete(false)} className="flex-1 border border-faint text-faint py-2 rounded-xl text-sm">취소</button>
                <button onClick={handleDelete} disabled={saving} className="flex-1 bg-red-400/80 text-nightDeep py-2 rounded-xl text-sm font-semibold disabled:opacity-60">{saving ? '삭제 중...' : '삭제하기'}</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
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
                  <textarea
                    value={sectionQA[idx]?.answer ?? ''}
                    onChange={(e) => {
                      const updated = [...sectionQA]
                      updated[idx] = { ...updated[idx], answer: e.target.value }
                      setSectionQA(updated)
                    }}
                    rows={3}
                    placeholder="답변을 적어주세요"
                    className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                  />
                </div>
              )}
            </div>
          ))}

          <div className="flex gap-3">
            {hasContent && <button onClick={() => setMode('view')} className="flex-1 border border-faint text-faint font-semibold py-4 rounded-2xl">취소</button>}
            <button onClick={handleSave} disabled={saving} className="flex-1 bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60">
              {saving ? '저장 중...' : '저장하기'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
