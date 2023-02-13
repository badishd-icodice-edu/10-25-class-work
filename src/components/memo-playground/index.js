import { useContext } from 'react'
import { createContext } from 'react'
import { useState, memo } from 'react'

const MainContext = createContext()
export default function MemoPlayground() {
  const [counter, setCounter] = useState(0)
  const [inputV, setInputV] = useState('')
  console.log('parent render')
  return (
    <MainContext.Provider value={{ counter, inputV }}>
      <div>
        Parent
        <input
          onChange={(e) => setInputV(e.target.value)}
          placeholder="testing"
        />
        <button onClick={() => setCounter((pr) => pr + 1)}>
          Counter: {counter}
        </button>
        <ChildB />
        <ChildA />
      </div>
    </MainContext.Provider>
  )
}

const ChildB = () => {
  console.log('childB render')
  const [bState, setBState] = useState(0)
  return (
    <div>
      <button onClick={() => setBState((pr) => pr + 1)}>
        ChildB bState: {bState}
      </button>
      childB <ChildC />
    </div>
  )
}

const ChildC = () => {
  console.log('childC render')
  const { counter } = useContext(MainContext)
  return <div>childC {counter}</div>
}

const ChildA = memo(
  ({ inputV, parentCounter }) => {
    const [c, setC] = useState(0)
    console.log('childA render')
    return (
      <div>
        childA {inputV} <div>Parent Counter STate: {parentCounter}</div>
        <button onClick={() => setC((pr) => pr + 1)}>Child Counter: {c}</button>
        Sum: {parentCounter + c}
      </div>
    )
  },
  (prevProp, currProp) => {
    // console.log(prevProp, currProp)
    return prevProp.parentCounter === currProp.parentCounter
  },
)

memo(Component, cb)
// cb tells when NOT to update/re-render
// in the example above, the component will not render if the parentCounter props is same

// --------------------------------------------------------------------------------------------------------------------

// ---------- Memiozation does not work with useContext() ----------
// ---------- As long as, context is imported and used, it gets rendered every time when one of the context values get changed ----------

// const MainContext = createContext()
// export default function MemoPlayground() {
//   const [counter, setCounter] = useState(0)
//   const [inputV, setInputV] = useState('')
//   console.log('parent render')
//   return (
//     <MainContext.Provider value={{ counter, inputV }}>
//       <div>
//         Parent
//         <input
//           onChange={(e) => setInputV(e.target.value)}
//           placeholder="testing"
//         />
//         <button onClick={() => setCounter((pr) => pr + 1)}>
//           Counter: {counter}
//         </button>
//         {ChildB()}
//         {/* <ChildB /> */}
//       </div>
//     </MainContext.Provider>
//   )
// }

// const ChildB = () => {
//   console.log('childB render')
//   const [bState, setBState] = useState(0)
//   return (
//     <div>
//       <button onClick={() => setBState((pr) => pr + 1)}>
//         ChildB bState: {bState}
//       </button>
//       childB <ChildC />
//     </div>
//   )
// }

// const ChildC = () => {
//   console.log('childC render')
//   const { counter } = useContext(MainContext)
//   return <div>childC {counter}</div>
// }
