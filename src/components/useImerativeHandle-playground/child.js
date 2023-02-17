import { forwardRef, memo, useImperativeHandle, useState } from 'react'

const Child = memo(forwardRef((props, ref) => {
  const [childFormValues, setChildFormValues] = useState({
    firstName: '',
    lastName: '',
  })

  console.log('child render')

  useImperativeHandle(ref, () => {
    return {
      getFormValues: () => {
        return childFormValues
      },
      setFieldsValue: (initialValues) => {
        setChildFormValues(initialValues)
      },
    }
  })

  return (
    <>
      <label>
        First Name
        <input
          value={childFormValues.firstName}
          onChange={(e) =>
            setChildFormValues((c) => ({ ...c, firstName: e.target.value }))
          }
        />
      </label>
      <label>
        Last Name
        <input
          value={childFormValues.lastName}
          onChange={(e) =>
            setChildFormValues((c) => ({ ...c, lastName: e.target.value }))
          }
        />
      </label>
    </>
  )
}))

export default Child
