import { notification } from 'antd'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { DB_NAME } from '../../App'

export const Login = () => {
  const navigate = useNavigate()
  const [loginValues, setLoginValues] = useState({})

  const onFormChange = (event) => {
    setLoginValues((curr) => ({
      ...curr,
      [event.target.name]: event.target.value,
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(loginValues)
    // api
    authenticateUser(loginValues)
  }

  const authenticateUser = ({ userEmail, userPassword }) => {
    const registeredUsers = JSON.parse(localStorage.getItem(DB_NAME))
    if (
      registeredUsers.some(
        (u) => u.userEmail === userEmail && u.userPassword === userPassword,
      )
    ) {
      notification.success({ message: 'Authentication Successful!' })
      navigate('/')
    } else {
      notification.error({
        message: 'Username and password couple is invalid!',
      })
    }
  }

  return (
    <div>
      Customer Portal
      <form
        onSubmit={handleLogin}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>
          Email
          <input
            type="email"
            name="userEmail"
            value={loginValues.userEmail ?? ''}
            onChange={onFormChange}
          />
        </label>
        <label>
          Password
          <input
            name="userPassword"
            type="password"
            value={loginValues.userPassword ?? ''}
            onChange={onFormChange}
          />
        </label>
        <button type="submit" style={{ width: 250 }}>
          Login
        </button>
      </form>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}
