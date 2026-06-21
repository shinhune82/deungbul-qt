import { useState } from 'react'
import { useUnits } from '../hooks/useUnits'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

async function extractPdfText(file) {
  const buf = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise
  let fullText = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items.map((it) => it.str).join(' ')
    fullText += pageText + '\n\n--- (페이지 구분) ---\n\n'
  }
  return fullText.trim()
}

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

function emptyDay() {
  return { title: '', body: '', reflectionQuestions: [''] }
}

function emptyUnit() {
  return {
    title: '',
    startDate: '',
    days: [emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay()],
    groupQuestions: ['']
  }
}

export default function UnitManager({ onClose }) {
  const { units, saveUnit, deleteUnit } = useUnits()
  const [editing, setEditing] = useState(null) // null | unit object (편집중)
  const [confirmDeleteId, setConfirmDeleteId] = useState(null)

  if (editing) {
    return (
      <UnitEditor
        unit={editing}
        onCancel={() => setEditing(null)}
        onSaved={() => setEditing(null)}
        saveUnit={saveUnit}
      />
    )
  }

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onClose} className="text-faint">‹ 닫기</button>
        <h2 className="font-display text-base">본문 관리</h2>
        <div className="w-10" />
      </div>

      <button
        onClick={() => setEditing({ ...emptyUnit(), id: 'unit_' + makeId() })}
        className="w-full bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow mb-6"
      >
        + 새 단원 추가
      </button>

      {units.length === 0 && (
        <p className="text-faint text-sm text-center py-8">등록된 단원이 없어요.</p>
      )}

      <div className="flex flex-col gap-3">
        {units.map((unit) => (
          <div key={unit.id} className="border border-faint/30 rounded-xl p-4">
            <p className="text-paper font-semibold mb-1">{unit.title || '(제목 없음)'}</p>
            <p className="text-faint text-xs mb-3">시작일(월요일): {unit.startDate}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setEditing(unit)}
                className="flex-1 border border-lamp text-lamp text-sm py-2 rounded-xl"
              >
                수정
              </button>
              {confirmDeleteId === unit.id ? (
                <button
                  onClick={async () => {
                    await deleteUnit(unit.id)
                    setConfirmDeleteId(null)
                  }}
                  className="flex-1 bg-red-400/80 text-nightDeep text-sm py-2 rounded-xl font-semibold"
                >
                  정말 삭제
                </button>
              ) : (
                <button
                  onClick={() => setConfirmDeleteId(unit.id)}
                  className="flex-1 border border-faint text-faint text-sm py-2 rounded-xl"
                >
                  삭제
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const WEEKDAY_LABELS = ['월요일', '화요일', '수요일', '목요일', '금요일']

function UnitEditor({ unit, onCancel, onSaved, saveUnit }) {
  const [title, setTitle] = useState(unit.title || '')
  const [startDate, setStartDate] = useState(unit.startDate || '')
  const [days, setDays] = useState(
    unit.days && unit.days.length === 5
      ? unit.days.map((d) => ({
          title: d.title || '',
          body: d.body || '',
          reflectionQuestions: d.reflectionQuestions?.length ? d.reflectionQuestions : ['']
        }))
      : [emptyDay(), emptyDay(), emptyDay(), emptyDay(), emptyDay()]
  )
  const [groupQuestions, setGroupQuestions] = useState(
    unit.groupQuestions?.length ? unit.groupQuestions : ['']
  )
  const [saving, setSaving] = useState(false)
  const [extractedText, setExtractedText] = useState('')
  const [extracting, setExtracting] = useState(false)
  const [extractError, setExtractError] = useState('')

  const handlePdfUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setExtracting(true)
    setExtractError('')
    try {
      const text = await extractPdfText(file)
      setExtractedText(text)
    } catch (err) {
      console.error(err)
      setExtractError('PDF를 읽는 데 실패했어요. 파일이 손상되었거나 스캔 이미지일 수 있어요.')
    } finally {
      setExtracting(false)
      e.target.value = ''
    }
  }

  const updateDay = (idx, field, value) => {
    setDays((prev) => prev.map((d, i) => (i === idx ? { ...d, [field]: value } : d)))
  }

  const updateDayQuestion = (dayIdx, qIdx, value) => {
    setDays((prev) =>
      prev.map((d, i) => {
        if (i !== dayIdx) return d
        const qs = [...d.reflectionQuestions]
        qs[qIdx] = value
        return { ...d, reflectionQuestions: qs }
      })
    )
  }

  const addDayQuestion = (dayIdx) => {
    setDays((prev) =>
      prev.map((d, i) => (i === dayIdx ? { ...d, reflectionQuestions: [...d.reflectionQuestions, ''] } : d))
    )
  }

  const removeDayQuestion = (dayIdx, qIdx) => {
    setDays((prev) =>
      prev.map((d, i) => {
        if (i !== dayIdx) return d
        if (d.reflectionQuestions.length <= 1) return d
        return { ...d, reflectionQuestions: d.reflectionQuestions.filter((_, j) => j !== qIdx) }
      })
    )
  }

  const updateGroupQuestion = (idx, value) => {
    setGroupQuestions((prev) => prev.map((q, i) => (i === idx ? value : q)))
  }
  const addGroupQuestion = () => setGroupQuestions((prev) => [...prev, ''])
  const removeGroupQuestion = (idx) => {
    setGroupQuestions((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev))
  }

  const handleSave = async () => {
    if (!title.trim() || !startDate) {
      alert('단원 제목과 시작일(월요일)을 입력해 주세요.')
      return
    }
    setSaving(true)
    const cleaned = {
      title: title.trim(),
      startDate,
      days: days.map((d) => ({
        title: d.title.trim(),
        body: d.body,
        reflectionQuestions: d.reflectionQuestions.map((q) => q.trim()).filter(Boolean)
      })),
      groupQuestions: groupQuestions.map((q) => q.trim()).filter(Boolean)
    }
    await saveUnit(unit.id, cleaned)
    setSaving(false)
    onSaved()
  }

  return (
    <div className="px-5 pb-10">
      <div className="flex items-center justify-between mb-5 pt-6">
        <button onClick={onCancel} className="text-faint">‹ 취소</button>
        <h2 className="font-display text-base">단원 편집</h2>
        <div className="w-10" />
      </div>

      <Field label="단원 제목">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="예) 2단원 ○○○"
          className="w-full bg-transparent border-b border-faint pb-2 text-paper placeholder:text-faint/60 focus:outline-none focus:border-lamp"
        />
      </Field>

      <Field label="시작일 (이 단원의 월요일)">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-night/40 border border-faint/40 rounded-xl px-4 py-3 text-paper"
        />
      </Field>

      {/* PDF 텍스트 추출 도우미 */}
      <div className="mb-6 border border-lamp/30 rounded-xl p-4 bg-lamp/5">
        <p className="text-sm text-lamp font-semibold mb-2">📄 PDF에서 텍스트 가져오기</p>
        <p className="text-xs text-faint mb-3">
          PDF를 올리면 전체 글자를 추출해요. 자동으로 요일별로 나누진 않으니,
          아래에 추출된 글자를 보면서 필요한 부분을 복사해 각 요일 칸에 붙여넣어 주세요.
        </p>
        <label className="block">
          <span className="inline-block bg-lamp text-nightDeep text-sm font-semibold px-4 py-2 rounded-xl cursor-pointer">
            {extracting ? '읽는 중...' : 'PDF 선택'}
          </span>
          <input type="file" accept="application/pdf" onChange={handlePdfUpload} className="hidden" />
        </label>
        {extractError && <p className="text-xs text-red-300 mt-2">{extractError}</p>}
        {extractedText && (
          <div className="mt-3">
            <p className="text-xs text-faint mb-1">추출된 텍스트 (선택해서 복사하세요)</p>
            <textarea
              readOnly
              value={extractedText}
              rows={10}
              className="w-full bg-night/60 border border-faint/40 rounded-xl p-3 text-paper text-xs leading-relaxed resize-y"
            />
          </div>
        )}
      </div>

      {days.map((day, dayIdx) => (
        <div key={dayIdx} className="mb-6 border border-faint/30 rounded-xl p-4">
          <p className="text-lamp text-sm font-semibold mb-3">
            {WEEKDAY_LABELS[dayIdx]} 본문
          </p>

          <Field label="본문 제목">
            <input
              value={day.title}
              onChange={(e) => updateDay(dayIdx, 'title', e.target.value)}
              placeholder="예) 01. 예수가 모르는 크리스천"
              className="w-full bg-transparent border-b border-faint/50 pb-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp"
            />
          </Field>

          <Field label="본문 내용">
            <textarea
              value={day.body}
              onChange={(e) => updateDay(dayIdx, 'body', e.target.value)}
              rows={8}
              placeholder="본문 전체 텍스트를 붙여넣으세요"
              className="w-full bg-night/40 border border-faint/40 rounded-xl p-3 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
            />
          </Field>

          <div className="mb-2">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-lampSoft">묵상 질문</p>
              <button
                onClick={() => addDayQuestion(dayIdx)}
                type="button"
                className="text-xs text-lamp border border-lamp/50 rounded-lg px-2 py-1"
              >
                + 질문 추가
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {day.reflectionQuestions.map((q, qIdx) => (
                <div key={qIdx} className="flex gap-2 items-start">
                  <textarea
                    value={q}
                    onChange={(e) => updateDayQuestion(dayIdx, qIdx, e.target.value)}
                    rows={2}
                    placeholder={`묵상질문 ${qIdx + 1}`}
                    className="flex-1 bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-lamp resize-none"
                  />
                  {day.reflectionQuestions.length > 1 && (
                    <button
                      onClick={() => removeDayQuestion(dayIdx, qIdx)}
                      type="button"
                      className="text-xs text-faint underline mt-2"
                    >
                      삭제
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div className="mb-6 border border-sage/40 rounded-xl p-4 bg-sage/5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sage text-sm font-semibold">코디네이터(소그룹)와 나눔 질문</p>
          <button
            onClick={addGroupQuestion}
            type="button"
            className="text-xs text-sage border border-sage/50 rounded-lg px-2 py-1"
          >
            + 질문 추가
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {groupQuestions.map((q, idx) => (
            <div key={idx} className="flex gap-2 items-start">
              <textarea
                value={q}
                onChange={(e) => updateGroupQuestion(idx, e.target.value)}
                rows={2}
                placeholder={`나눔 질문 ${idx + 1}`}
                className="flex-1 bg-night/40 border border-faint/40 rounded-xl p-2 text-paper text-sm placeholder:text-faint/60 focus:outline-none focus:border-sage resize-none"
              />
              {groupQuestions.length > 1 && (
                <button
                  onClick={() => removeGroupQuestion(idx)}
                  type="button"
                  className="text-xs text-faint underline mt-2"
                >
                  삭제
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full bg-lamp text-nightDeep font-semibold py-4 rounded-2xl shadow-glow disabled:opacity-60"
      >
        {saving ? '저장 중...' : '단원 저장하기'}
      </button>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <div className="mb-4">
      <p className="text-xs text-lampSoft mb-2">{label}</p>
      {children}
    </div>
  )
}
