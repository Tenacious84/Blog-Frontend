import React from 'react'
import '../Pages/Login.css'
import { useState, useEffect } from 'react'
import { loginUser } from '../api'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        try {
            const res = await loginUser({ email, password });
            console.log("Login response:", res);

            if (!res.data) {
                alert('Login failed: no user data returned from server');
                return;
            }
            // ✅ SAVE BOTH
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data));

            alert('Login Successful!');
            window.location.href = '/createBlog';
        } catch (err) {
            alert('Login failed!');
            console.log(err);
        }

        setEmail('');
        setPassword('');
    }

    return (
        <div className='mainContent'>

            <div className="loginCard">
                <h1> WELCOME BACK !</h1>
                <div className='inputs'>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder=' Email...' value={email} />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder=' Password...' value={password} />
                </div>
                <button className='loginButton' onClick={handleLogin}> Login </button>
            </div>
        </div>
    )
}

export default Login
















// import React from 'react'
// import '../Pages/Login.css'
// import { useState, useEffect } from 'react'
// import { loginUser } from '../api'

// function Login() {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     async function handleLogin() {

//         try {
//             const res = await loginUser({ email, password })
//             localStorage.setItem('token', res.data.token)
//             window.location.href = '/createBlog'
//             alert('Login Successful!')
//         }
//         catch (err) {
//             alert('Login failed !')
//             console.log(err)
//         }
//         setEmail('')
//         setPassword('')

//     }
//     return (
//         <div className='mainContent'>

//             <div className="loginCard">
//                 <h1>    WELCOME BACK !</h1>
//                 <div className='inputs'>
//                     <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='     Email...' value={email} />
//                     <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='        Password...' value={password} />
//                 </div>
//                 <button className='loginButton' onClick={handleLogin}> Login </button>
//             </div>
//         </div>
//     )
// }

// export default Login