import React, { useState } from 'react'
import '../Pages/Register.css'
import { registerUser } from '../api'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleRegistration() {
    try {
      const res = await registerUser({ author, email, password })

      localStorage.setItem('token', res.data.response)
      localStorage.setItem('user', JSON.stringify(res.data.user))



      alert('Registration Successful! Please login.')

      // Redirect to login page
      navigate('/login')
    } catch (error) {
      if (error.response?.data?.error === "EMAIL_EXISTS") {
        return alert('"This email is already registered. Please login."')
      }
      alert('Registration failed!')
      console.error(err)
    }

    // Clear form fields
    setAuthor('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='mainContent'>
      <div className="registerCard">
        <h1>LET'S GET STARTED</h1>
        <form onSubmit={handleRegistration}>
          <div className='inputs'>
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder='Username...'
              value={author}
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email...'
              value={email}
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password...'
              value={password}
            />
          </div>
          <button className='registerButton' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
