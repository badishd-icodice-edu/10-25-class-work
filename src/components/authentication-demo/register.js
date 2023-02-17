import { notification } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DB_NAME } from '../../App'

export const Register = () => {
  const navigate = useNavigate()
  const [registerValues, setRegisterValues] = useState({})

  const onFormChange = (event) => {
    setRegisterValues((curr) => ({
      ...curr,
      [event.target.name]: event.target.value,
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(registerValues)
    // api
    createUser(registerValues)
  }

  // BE function
  const createUser = (userData) => {
    const currentUsers = JSON.parse(localStorage.getItem(DB_NAME))
    if (currentUsers.some((u) => u.userEmail === userData.userEmail)) {
      notification.error({ message: 'User email has already been taken!' })
    } else {
      localStorage.setItem(DB_NAME, JSON.stringify([...currentUsers, userData]))
      navigate('/register-success')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleRegister}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>
          First Name
          <input
            name="firstName"
            value={registerValues.firstName ?? ''}
            onChange={onFormChange}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            value={registerValues.lastName ?? ''}
            onChange={onFormChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="userEmail"
            value={registerValues.userEmail ?? ''}
            onChange={onFormChange}
          />
        </label>
        <label>
          Password
          <input
            name="userPassword"
            type="password"
            value={registerValues.userPassword ?? ''}
            onChange={onFormChange}
          />
        </label>
        <button type="submit" style={{ width: 250 }}>
          Register
        </button>
      </form>
    </div>
  )
}
