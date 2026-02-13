import React, { useState } from 'react'
import '../Pages/Register.css'
import { registerUser } from '../api'
import { useNavigate } from 'react-router-dom' // <-- import useNavigate

function Register() {
  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate() // <-- initialize navigate

  async function handleRegistration() {
    try {
      const res = await registerUser({ author, email, password })

      // Optionally save token if you want to log them in automatically
      localStorage.setItem('token', res.data.response)

      alert('Registration Successful! Please login.')

      // Redirect to login page
      navigate('/login')
    } catch (err) {
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
        <button className='registerButton' onClick={handleRegistration}>
          Register
        </button>
      </div>
    </div>
  )
}

export default Register
