import { Col, Row } from 'antd'
import { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/authentication-demo/dashboard'
import { Login } from './components/authentication-demo/login'
import { Register } from './components/authentication-demo/register'
import { RegisterSuccessful } from './components/authentication-demo/register-success'
import './index.css'

export default function AuthRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-success" element={<RegisterSuccessful />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Layout = () => {
  const [registeredUsers, setRegisteredUsers] = useState(
    localStorage.getItem(DB_NAME)
      ? JSON.parse(localStorage.getItem(DB_NAME))
      : localStorage.setItem(DB_NAME, JSON.stringify([])),
  )
  return (
    <Row gutter={[10, 10]}>
      <Col span={12}>
        <Outlet />
      </Col>
      <Col span={12}>
        <button
          onClick={() => {
            setRegisteredUsers(JSON.parse(localStorage.getItem(DB_NAME)))
          }}
        >
          Refresh
        </button>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((u) => (
              <tr key={u.email}>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.userEmail}</td>
                <td>{u.userPassword}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Col>
    </Row>
  )
}

export const DB_NAME = 'registered_users'
