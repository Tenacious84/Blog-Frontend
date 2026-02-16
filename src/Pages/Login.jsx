import React, { useState } from 'react'
import '../Pages/Login.css'
import { loginUser } from '../api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const res = await loginUser({ email, password })
      console.log('Login response:', res)

      if (!res.data) {
        alert('Login failed: no user data returned from server')
        return
      }

      //  Saved my token and user in localStorage
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      // if (res.data.user) return alert('User already exists. Please log in...')


      alert('Login Successful!')
      window.location.href = '/createBlog'
    }
    catch (err) {
      alert('Login failed!')
      console.error(err)
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className="mainContent">
      <div className="loginCard">
        <h1>WELCOME BACK!</h1>
        <form onSubmit={handleLogin}>
          <div className="inputs">
            <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          <button className="loginButton" type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
