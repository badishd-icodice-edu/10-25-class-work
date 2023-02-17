import { Space } from 'antd'
import { COMP_ENUMS } from '../../App'

export const CompanyWelcome = ({ setCompEnum }) => {
  return (
    <div style={{ border: '2px solid #ef4444', borderRadius: 6 }}>
      <div
        style={{
          padding: 15,
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          fontSize: 20,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
      >
        CERTIC IMG
      </div>
      <Space
        direction="vertical"
        size={15}
        style={{
          padding: 20,
          fontSize: 18,
          backgroundColor: '#fff',
          width: '100%',
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        <Space size={6} direction="vertical" style={{ fontSize: 18 }}>
          <span style={{ fontWeight: 'bold' }}>
            Welcome to Corn Kernel Tech!
          </span>
          <div style={{ width: '80%' }}>
            Well not yet, but you're one step closer to becoming a Corntek-er
            and learning more about Corn3.
          </div>
        </Space>
        <i>"Provable trust for all"</i>
        <div style={{ textAlign: 'center' }}>
          <span
            style={{ color: '#0ea5e9', cursor: 'pointer' }}
            onClick={() => setCompEnum(COMP_ENUMS.Default)}
          >
            Actually, nevermind take me back.
          </span>
        </div>
      </Space>
    </div>
  )
}
