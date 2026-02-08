import React from "react";
import "../NavBar/NavComponent.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    const token = localStorage.getItem('token')

    async function handleLogout() {
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    return (
        <div className="navContainer">
            <div className="logo"><h1>BL🎞️GIT</h1></div>
            {
                !token ? (
                    <div className="WithoutToken">
                        <Link to='/' className="link"> Home</Link>
                        <Link to='/register' className="link"> Register</Link>
                        <Link to='/login' className="link">Login </Link>
                    </div>
                ) : (
                    <div className="right-align">
                        <Link to='/' className="link"> Home</Link>
                        <Link to='/myBlogs' className="link"> My Blogs</Link>
                        <Link to='/createBlog' className="link"> Create New Blog</Link>
                        <Link onClick={handleLogout} className="link">Logout</Link>

                    </div>
                )
            }

        </div>
    )
}

export default NavBar