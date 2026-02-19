import './Home.css'
import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../api'
import BlogCard from '../Components/BlogCard/BlogCardComponent'

function Home() {
  const [blogs, setBlogs] = useState([])
  const [currentUser] = useState(() => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  })

  useEffect(() => {
    async function load() {
      try {
        const res = await getAllBlogs()
        setBlogs(res.data)
        console.log("Fetched blogs:", res.data)
        console.log("First blog full object:", res.data[0])
        console.log("First blog author:", res.data[0]?.author)
        console.log("Current user:", currentUser)
      } catch (err) {
        console.error("Error fetching blogs:", err)
      }
    }
    load()
  }, [])

  return (
    <div className='mainContent'>
      <h1 className="homeTitle">WELCOME TO BL🎞️GIT</h1>
      {blogs.length === 0 ? (
        <p className="noBlogs">No blogs found.</p>
      ) : (
        <div className="allcards">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} currentUser={currentUser} showActions={false} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home