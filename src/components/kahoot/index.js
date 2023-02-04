import { useEffect, useState } from 'react'
import axios from 'axios'

import kahootBg from './kahoot-bg.webp'

import { Row, Col, Space } from 'antd'

export default function Kahoot() {
  const [apiFormat, setApiFormat] = useState([])
  const [questions, setQuestions] = useState([])
  const [qNum, setQNum] = useState(0)
  const [isCorrect, setIsCorrect] = useState(null)

  const currentQuestion = questions[qNum]
  console.log(questions)

  useEffect(() => {
    setIsCorrect(null)
  }, [qNum])

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
      .then((res) => {
        if (res.status === 200) {
          const questionList = res.data.results
          setApiFormat(questionList)
          setQuestions(
            questionList.map((q) => ({
              question: q.question,
              options: [
                { label: q.correct_answer, isCorrect: true },
                ...q.incorrect_answers.map((a) => ({
                  label: a,
                  isCorrect: false,
                })),
              ].sort(() => (Math.random() < 0.5 ? 1 : -1)),
            })),
          )
        }
      })
  }, [])

  return (
    <Row gutter={[20, 0]}>
      <Col span={12}>
        <div style={{ overflow: 'hidden', borderRight: '1px solid violet' }}>
          <pre>{JSON.stringify(apiFormat, null, 2)}</pre>
        </div>
      </Col>
      <Col span={12}>
        <pre>{JSON.stringify(questions, null, 2)}</pre>
      </Col>
    </Row>
    // <div
    //   style={{
    //     backgroundImage: `url(${kahootBg})`,
    //     width: '100vw',
    //     height: '100vh',
    //   }}
    // >
    //   {!currentQuestion ? (
    //     'Loading'
    //   ) : (
    //     <>
    //       <div
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'column',
    //           justifyContent: 'space-between',
    //           padding: '20px 20px 0',
    //           height: 'calc(100% - 40px)',
    //         }}
    //       >
    //         <div>
    //           <Space style={{ width: '100%' }} align="top">
    //             <div
    //               style={{
    //                 backgroundColor: '#ffffff80',
    //                 fontSize: 30,
    //                 padding: 10,
    //                 borderRadius: 12,
    //                 width: 120,
    //               }}
    //             >
    //               {qNum} of {questions.length}
    //             </div>
    //             <div
    //               style={{
    //                 backgroundColor: '#fff',
    //                 // minHeight: 100,
    //                 width: 'calc(100vw - 40px -120px)',
    //                 padding: 20,
    //                 textAlign: 'center',
    //                 fontSize: 32,
    //                 borderRadius: 30,
    //                 fontWeight: 'bold',
    //               }}
    //             >
    //               {currentQuestion.question}
    //             </div>
    //           </Space>
    //           {typeof isCorrect === 'boolean' && (
    //             <div
    //               style={{
    //                 backgroundColor: isCorrect ? 'green' : 'red',
    //                 display: 'flex',
    //                 justifyContent: 'center',
    //                 padding: 12,
    //               }}
    //             >
    //               {!isCorrect ? (
    //                 <div
    //                   style={{
    //                     backgroundColor: 'darkred',
    //                     color: 'white',
    //                     display: 'flex',
    //                     flexDirection: 'column',
    //                     alignItems: 'center',
    //                     padding: 10,
    //                     minWidth: 300,
    //                     marginTop: 10,
    //                   }}
    //                 >
    //                   <span style={{ fontWeight: 'bold', fontSize: 30 }}>
    //                     Wrong
    //                   </span>
    //                   <span style={{ fontSize: 24 }}>Try again!</span>
    //                 </div>
    //               ) : (
    //                 <div
    //                   style={{
    //                     backgroundColor: 'darkgreen',
    //                     color: 'white',
    //                     display: 'flex',
    //                     flexDirection: 'column',
    //                     alignItems: 'center',
    //                     padding: 10,
    //                     minWidth: 300,
    //                   }}
    //                 >
    //                   <span style={{ fontWeight: 'bold', fontSize: 30 }}>
    //                     Correct
    //                   </span>
    //                   <span style={{ fontSize: 24 }}>
    //                     Good job! Keep going!
    //                   </span>
    //                 </div>
    //               )}
    //             </div>
    //           )}
    //         </div>
    //         <div style={{ padding: 20 }}>
    //           <Row gutter={[20, 20]}>
    //             {currentQuestion.options.map((o, oIdx) => (
    //               <Col span={12} key={oIdx}>
    //                 <div
    //                   onClick={() => {
    //                     setIsCorrect(o.isCorrect)
    //                   }}
    //                   style={{
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     backgroundColor: symbols[oIdx].color,
    //                     cursor: 'pointer',
    //                     padding: 20,
    //                     borderRadius: 10,
    //                   }}
    //                 >
    //                   <span style={{ marginRight: 6 }}>
    //                     {symbols[oIdx].svg}
    //                   </span>
    //                   <span
    //                     style={{
    //                       fontSize: 28,
    //                       color: 'white',
    //                       fontWeight: 'bolder',
    //                     }}
    //                   >
    //                     {o.label}
    //                   </span>
    //                 </div>
    //               </Col>
    //             ))}
    //           </Row>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </div>
  )
}

const symbols = [
  {
    svg: (
      <svg width={100} viewBox="0 0 32 32">
        <path
          d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
          style={{ fill: 'white' }}
        />
      </svg>
    ),
    color: 'red',
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" width={100}>
        <path
          d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
          style={{ fill: 'white' }}
        />
      </svg>
    ),
    color: 'blue',
  },
  {
    svg: (
      <svg width={100} viewBox="0 0 32 32">
        <path
          d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
          style={{ fill: 'white' }}
        />
      </svg>
    ),
    color: 'orange',
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" width={100}>
        <path d="M7,7 L25,7 L25,25 L7,25 L7,7 Z" style={{ fill: 'white' }} />
      </svg>
    ),
    color: 'green',
  },
]
