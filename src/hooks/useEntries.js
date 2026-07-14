import { useEffect, useState, useCallback } from 'react'
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

const COLLECTION = 'qt_entries'

export function todayKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function useEntries() {
  const [entries, setEntries] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('date', 'desc'))
    const unsub = onSnapshot(
      q,
      (snap) => {
        const map = {}
        snap.forEach((d) => { map[d.id] = d.data() })
        setEntries(map)
        setLoading(false)
      },
      (err) => {
        console.error('entries 구독 실패', err)
        setLoading(false)
      }
    )
    return unsub
  }, [])

  const saveEntry = useCallback(async (dateKey, fields) => {
    const ref = doc(db, COLLECTION, dateKey)
    await setDoc(ref, { date: dateKey, ...fields, writtenAt: serverTimestamp() }, { merge: true })
  }, [])

  const setCheck = useCallback(async (dateKey, checked, comment, coordQA, coordGroupQA) => {
    const ref = doc(db, COLLECTION, dateKey)
    await setDoc(
      ref,
      {
        date: dateKey,
        checked,
        comment: comment ?? '',
        coordQA: coordQA ?? [],
        coordGroupQA: coordGroupQA ?? [],
        checkedAt: serverTimestamp()
      },
      { merge: true }
    )
  }, [])

  const deleteEntry = useCallback(async (dateKey) => {
    await deleteDoc(doc(db, COLLECTION, dateKey))
  }, [])

  return { entries, loading, saveEntry, setCheck, deleteEntry }
}
