import React from 'react'
import { Link } from 'react-router-dom'
import "../BlogCard/BlogCardComponent.css"

function BlogCard({ blog }) {

    return (
        <div className='cards'>
            <Link to={`/blog/${blog._id}`}>
                <div className='card'>
                    <img className='image' src={blog.imgUrl} alt={blog.title} />
                    <h1>{blog.title}</h1>
                    <h2>{blog.subtitle}</h2>
                    <h2>{blog.author}</h2>
                    <Link to={`/blog/${blog._id}`}>Read more →</Link>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard
