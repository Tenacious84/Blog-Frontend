import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Pages/BlogDetails.css'
import { getBlog } from '../api'

function BlogDetails() {
  const [blog, setBlog] = useState('')
  const { id } = useParams()

  useEffect(() => {

    async function load(req) {
      const res = await getBlog({ id })
      setBlog(res.data)
    }

    load()

  }, [])
  return (
    <div className='mainContent'>

      <h1>{blog.title}</h1>
      < img className='image' src={blog.imgUrl} alt={blog.title} />
      <h2>{blog.subtitle}</h2>
      <h2>{blog.author}</h2>
      <h1>{blog.content}</h1>

    </div>
  )
}

export default BlogDetails