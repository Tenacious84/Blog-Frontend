import React from 'react'
import { useState, useEffect } from 'react'
import '../Pages/Register.css'
import { registerUser } from '../api'

function Register() {
    const [author, setAuthor] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegistration() {

        try {
            const res = await registerUser({ author, email, password })
            localStorage.setItem('token', res.data.response)
            window.location.href = '/createBlog'
            alert('Registration Successful!')
        }
        catch (err) {
            alert('Registration failed !')
            console.log(err)
        }
        setAuthor('')
        setEmail('')
        setPassword('')

    }


    return (
        <div className='mainContent'>

            <div className="registerCard">
                <h1>LET'S GET STARTED</h1>
                <div className='inputs'>
                    <input type="string" onChange={(e) => setAuthor(e.target.value)} placeholder='      Username...' value={author} />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='      Email...' value={email} />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='      Password...' value={password} />
                </div>
                <button className='registerButton' onClick={handleRegistration}> Register </button>
            </div>
        </div>
    )
}



export default Register