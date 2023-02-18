import { useState } from 'react'

export const useNumberValidator = (initValue = '') => {
  const [value, setValue] = useState(initValue)

  const updateValue = (newValue = '') => {
    const regex = /[a-z]/i
    console.log(regex.test(newValue))
    if (regex.test(newValue)) {
      setValue(newValue.replace(regex, ''))
    } else {
      setValue(newValue)
    }
  }

  return [value, updateValue]
}
