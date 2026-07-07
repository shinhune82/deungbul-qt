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
// 평일(월~금): 해당 요일 본문 반환
// 토요일: 해당 주 단원의 코디네이터 나눔 전용 passage 반환
// 일요일: null
export function getDailyPassage(units, dateKey) {
  const date = new Date(dateKey + 'T00:00:00')
  const dow = date.getDay() // 0=일 1=월 ... 6=토

  // 일요일은 본문 없음
  if (dow === 0) return null

  for (const unit of units) {
    if (!unit.startDate || !Array.isArray(unit.days)) continue
    const start = new Date(unit.startDate + 'T00:00:00')
    const diffDays = Math.floor((date - start) / 86400000)
    if (diffDays < 0) continue

    const weekIndex = Math.floor(diffDays / 7)

    // 토요일: 해당 주 단원의 코디네이터 나눔 passage 반환
    if (dow === 6) {
      if (weekIndex === 0) {
        return {
          unitId: unit.id,
          unitTitle: unit.title,
          dayIndex: -1,
          isSaturdaySharing: true,
          title: '코디네이터(소그룹)와의 나눔',
          sections: [],
          groupQuestions: unit.groupQuestions ?? []
        }
      }
      continue
    }

    // 평일(월~금)
    const dayInWeek = dow - 1 // 월=0 ... 금=4
    if (weekIndex === 0 && dayInWeek >= 0 && dayInWeek < unit.days.length) {
      return {
        unitId: unit.id,
        unitTitle: unit.title,
        dayIndex: dayInWeek,
        isSaturdaySharing: false,
        ...unit.days[dayInWeek],
        groupQuestions: unit.groupQuestions ?? []
      }
    }
  }
  return null
}
