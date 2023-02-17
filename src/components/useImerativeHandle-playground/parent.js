import { useEffect, useRef, useState } from 'react'
import Child from './child'

export default function Parent() {
  const formRef = useRef()
  const [hobby, setHobby] = useState('')

  useEffect(() => {
    formRef.current.setFieldsValue({
      firstName: 'badi',
      lastName: 'b',
    })
  }, [])

  return (
    <div>
      Parent component
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const childFieldValues = formRef.current.getFormValues()
          console.log(hobby, childFieldValues)
        }}
      >
        <label>
          hobby
          <input value={hobby} onChange={(e) => setHobby(e.target.value)} />
        </label>
        <Child ref={formRef} />
        <button type="submit">SUbmit</button>
      </form>
    </div>
  )
}
