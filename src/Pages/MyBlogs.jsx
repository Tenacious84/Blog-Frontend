import { React, useEffect, useState } from 'react'
import { getMyBlogs } from "../api";
import BlogCard from '../Components/BlogCard/BlogCardComponent';


function MyBlogs() {
    const [blogs, setBlogs] = useState([])
    const [currentUser] = useState(() => {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    })


    useEffect(() => {

        async function load() {
            const res = await getMyBlogs()
            setBlogs(res.data)
            console.log(res.data)
        }

        load()
    }, [])

    return (
        <div className='mainContent'>
            <h1>Welcome {currentUser?.author}</h1>

            <div className="allcards">
                {blogs.map((b) => (
                    <BlogCard blog={b} key={b._id} currentUser={currentUser} showActions={true} />
                ))}
            </div>
        </div>
    )
}

export default MyBlogs