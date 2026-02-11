import React from 'react'
import { Link } from 'react-router-dom'
import "../BlogCard/BlogCardComponent.css"
import { deleteBlog } from '../../api'
import { useParams } from 'react-router-dom'

function BlogCard({ blog }) {

    async function handleDelete() {
        try {
            const { id } = useParams()
            await deleteBlog(id)
        }
        catch (error) {
            alert('Could not delete blog!')
        }
    }

    return (

        <div className='cards'>
            <Link to={`/blog/${blog._id}`}>
                <div className='card'>
                    <img className='image' src={blog.imgUrl} alt={blog.title} />
                    <h1>{blog.title}</h1>
                    <h2>{blog.subtitle}</h2>
                    <h2>{blog.author}</h2>

                    <Link to={`/blog/${blog._id}`}>Read more →</Link>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                    <button className='update'>Update</button>
                </div>
            </Link>
        </div>
        // <div className='cards'>
        //     <Link to={`/blog/${blog._id}`}>
        //         <div className='card'>
        //             <img className='image' src={blog.imgUrl} alt={blog.title} />
        //             <h1>{blog.title}</h1>
        //             <h2>{blog.subtitle}</h2>
        //             <h2>{blog.author}</h2>

        //             <Link to={`/blog/${blog._id}`}>Read more →</Link>
        //              <button  className='delete'>Delete</button>
        //             <button className='update'>Update</button>
        //         </div>
        //     </Link>
        // </div>
    )
}

export default BlogCard
