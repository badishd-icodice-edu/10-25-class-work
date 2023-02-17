import { Space } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { buttonGenericStyle, COMP_ENUMS } from '../../App'

export const Timer = ({ setCompEnum, parentMountedMoment }) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    setTimer(moment().subtract(parentMountedMoment).format('s:SS'))
  }, [parentMountedMoment])

  return (
    <Space
      size={15}
      direction="vertical"
      style={{
        backgroundColor: '#0ea5e9',
        border: '2px solid #ef4444',
        color: '#fff',
        borderRadius: 6,
        padding: 20,
        fontSize: 18,
      }}
    >
      <span>It took you <b>{timer} seconds</b> to say no?</span>
      <span>
        Well, you worked, had a happy family, went on vacations, and died
        surrounded by everyone you love in your fake "reality"...
      </span>
      <span>Wait, that doesn't sound so bad?</span>
      <span>But there's a lingering uneasiness...</span>
      <button
        style={{
          ...buttonGenericStyle,
          backgroundColor: '#fff',
          color: '#000',
        }}
        onClick={() => setCompEnum(COMP_ENUMS.Default)}
      >
        I'm unsatisfied, let's try again
      </button>
    </Space>
  )
}
