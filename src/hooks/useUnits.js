import { useEffect, useState, useCallback } from 'react'
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase'

const COLLECTION = 'units'

export function useUnits() {
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('startDate', 'asc'))
    const unsub = onSnapshot(
      q,
      (snap) => {
        const list = []
        snap.forEach((d) => list.push({ id: d.id, ...d.data() }))
        setUnits(list)
        setLoading(false)
      },
      (err) => {
        console.error('units 구독 실패', err)
        setLoading(false)
      }
    )
    return unsub
  }, [])

  const saveUnit = useCallback(async (unitId, data) => {
    const ref = doc(db, COLLECTION, unitId)
    await setDoc(ref, data, { merge: false })
  }, [])

  const deleteUnit = useCallback(async (unitId) => {
    await deleteDoc(doc(db, COLLECTION, unitId))
  }, [])

  return { units, loading, saveUnit, deleteUnit }
}

// dateKey(YYYY-MM-DD)와 units 배열을 받아 그 날짜의 본문을 찾아 반환.
// 평일(월~금)만 본문이 있고, 토/일은 null.
export function getDailyPassage(units, dateKey) {
  const date = new Date(dateKey + 'T00:00:00')
  const dow = date.getDay() // 0=일 ... 6=토
  if (dow === 0 || dow === 6) return null

  for (const unit of units) {
    if (!unit.startDate || !Array.isArray(unit.days)) continue
    const start = new Date(unit.startDate + 'T00:00:00')
    const diffDays = Math.floor((date - start) / 86400000)
    if (diffDays < 0) continue

    const weekIndex = Math.floor(diffDays / 7)
    const dayInWeek = dow - 1 // 월=0 ... 금=4
    if (weekIndex === 0 && dayInWeek >= 0 && dayInWeek < unit.days.length) {
      const day = unit.days[dayInWeek]
      // sections 구조 우선, 없으면 body+reflectionQuestions 방식도 호환
      const sections = Array.isArray(day.sections)
        ? day.sections
        : (day.body
            ? [{ body: day.body, question: day.reflectionQuestions?.[0] ?? null },
               ...(day.reflectionQuestions?.slice(1).map(q => ({ body: '', question: q })) ?? [])]
            : [])
      return {
        unitId: unit.id,
        unitTitle: unit.title,
        dayIndex: dayInWeek,
        title: day.title ?? '',
        sections,
        groupQuestions: unit.groupQuestions ?? []
      }
    }
  }
  return null
}
