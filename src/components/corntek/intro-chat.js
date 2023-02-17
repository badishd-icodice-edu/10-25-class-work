import { Col, Row, Space } from 'antd'
import { useState } from 'react'

import filledCorn from './corn_filled.png'
import regCorn from './corn_reg.png'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { buttonGenericStyle, COMP_ENUMS } from '../../App'

export const CornTekChat = ({ setCompEnum }) => {
  const [liked, setLiked] = useState(false)
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #999',
        borderRadius: 5,
        padding: 15,
      }}
    >
      <Space direction="vertical" size={30}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {liked ? (
              <img src={filledCorn} alt="corn-fill" width={40} />
            ) : (
              <img src={regCorn} alt="corn-fill" width={40} />
            )}
            <Space size={0} direction="vertical" style={{ marginLeft: 10 }}>
              <span style={{ fontSize: 20, fontWeight: 500 }}>Ronny Who</span>
              <span style={{ fontSize: 14 }}>CEO of Corn Kernel Tech</span>
            </Space>
          </div>
          <div
            style={{ fontSize: 28, cursor: 'pointer' }}
            onClick={() => setLiked((c) => !c)}
          >
            {liked ? <AiFillHeart color="#ef4444" /> : <AiOutlineHeart />}
          </div>
        </div>
        <Space direction="vertical">
          {[
            'Welcome to the future of Corn3 Security',
            'Do you wish to go down the rabbit hole of Corn3 with Corn Kernel Tech or stay within your own metaverse that is reality?',
          ].map((text, textIdx) => (
            <div
              key={textIdx}
              style={{
                backgroundColor: '#e5e5e580',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                padding: 10,
                display: 'inline-block',
              }}
            >
              {text}
            </div>
          ))}
        </Space>
        <Row justify="space-between" gutter={20} style={{ marginTop: 20 }}>
          <Col flex={1}>
            <button
              style={{
                ...buttonGenericStyle,
                backgroundColor: '#03a5e9',
              }}
              onClick={() => setCompEnum(COMP_ENUMS.Timer)}
            >
              Uhh.. no.
            </button>
          </Col>
          <Col flex={1}>
            <button
              style={{
                ...buttonGenericStyle,
                backgroundColor: '#ef4444',
                fontWeight: 'bold',
              }}
              onClick={() => setCompEnum(COMP_ENUMS.Welcome)}
            >
              Let's Go
            </button>
          </Col>
        </Row>
      </Space>
    </div>
  )
}
