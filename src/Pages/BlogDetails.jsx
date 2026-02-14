import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Pages/BlogDetails.css'
import { getBlog, likeBlog } from '../api'

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
  const handleLike = async () => {
    try {
      if (!token) return alert.info("Please login to like");
      const res = await likeBlog()

      setLiked(res.blog.likes);
      setLikesCount(res.data.likesCount);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to like post");
    }
  };
  return (
    <div className='mainContent'>

      <h1>{blog?.title}</h1>
      < img className='image' src={blog?.imgUrl} alt={blog?.title} />
      <h2>{blog?.subtitle}</h2>
      <h2>{blog?.author}</h2>
      <h1>{blog?.content}</h1>
      <button className="heart">

      </button>

    </div>
  )
}

export default BlogDetails