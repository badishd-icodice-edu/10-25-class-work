import { Space } from 'antd'
import { useState } from 'react'
import Header from './2-1-comp'
import Content from './2-2-comp'
import Footer from './2-3-comp'

export default function AppCopy() {
  const [firstName, setFirstName] = useState('badi')

  return (
    <div style={{ display: 'flex' }}>
      <Header firstName={firstName} />
      <Spacer />
      <Content firstName={firstName} />
      <Spacer />
      <Footer firstName={firstName} />
    </div>
  )
}

const Spacer = () => <div style={{ width: 30 }} />
