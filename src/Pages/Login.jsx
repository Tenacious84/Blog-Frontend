import React, { useState } from 'react';
import '../Pages/Login.css';
import { loginUser } from '../api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      const res = await loginUser({ email, password });
      console.log('Login response:', res);

      if (!res.data) {
        alert('Login failed: no user data returned from server');
        return;
      }

      // ✅ Save token and user in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user)); // store the user object

      // if (res.data.user) return alert('User already exists. Please log in...')

      alert('Login Successful!');
      window.location.href = '/createBlog'; // redirect after login
    } catch (err) {
      alert('Login failed!');
      console.error(err);
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="mainContent">
      <div className="loginCard">
        <h1>WELCOME BACK!</h1>
        <div className="inputs">
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
