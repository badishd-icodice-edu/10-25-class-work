import { useEffect, useRef, useState } from 'react'
import { Col, Row, Space } from 'antd'

import { CornTekChat } from './components/corntek/intro-chat'
import { CompanyWelcome } from './components/corntek/company-welcome'
import { Timer } from './components/corntek/timer'
import moment from 'moment/moment'

export default function CorntekUI() {
  const parentMountedMoment = useRef(moment())
  const [compEnum, setCompEnum] = useState(COMP_ENUMS.Default)

  useEffect(() => {
    if (compEnum === COMP_ENUMS.Default) parentMountedMoment.current = moment()
  }, [compEnum])

  return (
    <div
      style={{ backgroundColor: '#e5e5e5', height: '100vh', paddingTop: 100 }}
    >
      <Row justify="center">
        <Col xs={18} sm={16} md={14} xl={12} xxl={10}>
          <Space direction="vertical" size={15}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
                Hello Corntek!
              </span>
              <span style={{ fontSize: '1.5rem' }}>My name is Badi B.</span>
            </div>

            {compEnum === COMP_ENUMS.Welcome ? (
              <CompanyWelcome setCompEnum={setCompEnum} />
            ) : compEnum === COMP_ENUMS.Default ? (
              <CornTekChat setCompEnum={setCompEnum} />
            ) : (
              <Timer
                setCompEnum={setCompEnum}
                parentMountedMoment={parentMountedMoment.current}
              />
            )}
            <span style={{ fontStyle: 'italic', fontSize: 10 }}>
              *Disclaimer: This is not the real professor Ronghui Gu and is just
              a fun imitation for a technical assessment
            </span>
          </Space>
        </Col>
      </Row>
    </div>
  )
}

export const COMP_ENUMS = {
  Timer: 0,
  Default: 1,
  Welcome: 2,
}
export const buttonGenericStyle = {
  borderRadius: 30,
  border: 'none',
  width: '100%',
  color: '#fff',
  padding: 20,
  fontSize: 20,
  cursor: 'pointer',
}
