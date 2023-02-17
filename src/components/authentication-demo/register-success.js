import { useNavigate } from 'react-router-dom'

export const RegisterSuccessful = () => {
  const navigate = useNavigate()
  return (
    <div>
      Successfull Registration
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}
