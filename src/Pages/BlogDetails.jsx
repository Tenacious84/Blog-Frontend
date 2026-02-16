import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Pages/BlogDetails.css'
import { getBlog, likeBlog } from '../api'
import { FaHeart } from "react-icons/fa";


function BlogDetails() {
  const [blog, setBlog] = useState('')
  const { id } = useParams()
  const [likesCount, setLikesCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"))
  const [liked, setLiked] = useState(false)


  console.log("ID from URL params:", id);

  useEffect(() => {


    async function load() {
      try {
        const res = await getBlog(id)
        console.log(res)
        setBlog(res.data)
        setLikesCount(res.data.likes?.length || 0)



      }
      catch (error) {
        console.error("Error fetching blog:", err)
      }

    }

    load()

  }, [id])
  const isLiked = blog?.likes?.includes(user._id)
  console.log(blog)
  const handleLike = async () => {
    setLiked(prev => !prev)
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        alert("Please login to like")
        return
      }
      const res = await likeBlog(id)
      setLiked(prev => !prev)

      setLikesCount(res.data.likesCount)
      console.log({
        'Number of likes': likesCount,
        'State': isLiked
      })

    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='mainContent'>

      <h1 className='title'>{blog?.title}</h1>
      < img className='blogImage' src={blog?.imgUrl} alt={blog?.title} />
      <h2 className='subtitle'>{blog?.subtitle}</h2>
      <div className="author-like">
        <h2>
          Author: {
            blog.author && typeof blog.author === "object"
              ? blog.author.author
              : blog.author
          }
        </h2>
        <button className="heart" onClick={handleLike}>
          <FaHeart color={isLiked ? "red" : "gray"} />
          <span>{likesCount}</span>
        </button>
      </div>

      <h1 className='blogContent'>{blog?.content}</h1>



    </div>
  )
}

export default BlogDetails