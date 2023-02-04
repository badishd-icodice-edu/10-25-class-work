// import { useState, createContext, useContext, memo } from 'react'

import { useEffect, useMemo, useState } from 'react'

// const ExampleContext = createContext()

// export default function UseContextPlayground() {
//   const [firstName, setFirstName] = useState('test')

//   return (
//     <>
//       <ExampleContext.Provider value={{ firstName, setFirstName }}>
//         <div>
//           UseContextPlayground
//           <hr />
//           <CompA />
//           <hr />
//           <CompC />
//           <hr />
//           <CompB />
//           <hr />
//         </div>
//       </ExampleContext.Provider>
//     </>
//   )
// }

// const CompA = () => {
//   console.log('compA')
//   return (
//     <div>
//       CompA
//       <CompAChild />
//     </div>
//   )
// }

// const CompAChild = () => {
//   const { firstName } = useContext(ExampleContext)
//   console.log('compAChild')

//   return (
//     <div>
//       CompAChild{' '}
//       <span style={{ backgroundColor: 'green', color: '#fff' }}>
//         {firstName}
//       </span>
//     </div>
//   )
// }

// const CompB = () => {
//   const { firstName, setFirstName } = useContext(ExampleContext)
//   console.log('compB')
//   return (
//     <div>
//       CompB
//       <input
//         value={firstName}
//         onChange={(e) => {
//           setFirstName(e.target.value)
//         }}
//       />
//     </div>
//   )
// }

// const CompC = memo(() => {
//   console.log('compC')
//   return <div>CompC</div>
// })

export default function UseContextPlayground() {
  const [firstName, setFirstName] = useState('')
  const [limit, setLimit] = useState(5000)

  const sum = useMemo(() => {
    let totalSum = 0
    for (let i = 0; i < limit; i++) {
      totalSum += i
    }
    console.log(totalSum)
    return totalSum
  }, [limit])
  
  const callbackSum = () => {
    let totalSum = 0
    for (let i = 0; i < 10000; i++) {
      totalSum += i
    }
    console.log('callback func',totalSum)
  }
  const callbackSum2 = callbackSum

  useEffect(() => {
    console.log()
  }, [sum])

  useEffect(() => {
    console.log(callbackSum)
  }, [])

  return (
    <>
      <div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button
          onClick={() => {
            setLimit((c) => c + 1)
          }}
        >
          limit {limit}
        </button>
      </div>
    </>
  )
}
