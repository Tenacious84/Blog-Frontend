import './Home.css'
import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../api'
import BlogCard from '../Components/BlogCard/BlogCardComponent'

function Home() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        async function load() {
            const res = await getAllBlogs()

            setBlogs(res.data)
            console.log(res.data)
        }
        load()
    }, [])

    return (
        <div className='mainContent'>WELCOME TO THE HOMEPAGE
          <div className="allcards">
            <div className=''>
            {
                blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog._id} />
                ))
            }
            </div>  
          </div>

        </div>
    )
}

export default Home