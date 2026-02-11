import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Pages/BlogDetails.css'
import { getBlog } from '../api'

function BlogDetails() {
  const [blog, setBlog] = useState('')
  const { id } = useParams()
  console.log("ID from URL params:", id);

  useEffect(() => {


    async function load() {
      try {
        const res = await getBlog(id)
        setBlog(res.data)
      }
      catch (error) {
        console.error("Error fetching blog:", err)
      }

    }

    load()

  }, [id])
  return (
    <div className='mainContent'>

      <h1>{blog?.title}</h1>
      < img className='image' src={blog?.imgUrl} alt={blog?.title} />
      <h2>{blog?.subtitle}</h2>
      <h2>{blog?.author}</h2>
      <h1>{blog?.content}</h1>

    </div>
  )
}

export default BlogDetails