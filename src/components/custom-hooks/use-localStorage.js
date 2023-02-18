import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initValue = '') => {
  const [data, setData] = useState(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initValue,
  )

  useEffect(() => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(initValue))
    }
  }, [key, initValue])

  //   const localStorageValueChange = localStorage.getItem(key)

  //   useEffect(() => {
  //     setData(JSON.parse(localStorage.getItem(key)))
  //   }, [key, localStorageValueChange])

  const updateData = (newValue) => {
    setData(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [data, updateData]
}
