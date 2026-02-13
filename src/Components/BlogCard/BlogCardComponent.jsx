import React from 'react';
import { Link } from 'react-router-dom';
import "../BlogCard/BlogCardComponent.css";
import { deleteBlog } from '../../api';

function BlogCard({ blog, currentUser }) {
  // Handle author as string or object
  const blogAuthorId =
    typeof blog.author === 'string' ? blog.author : blog.author?._id;
  
  const isOwner =
    currentUser?._id?.toString() === blogAuthorId?.toString();

  // 🔍 DEBUG
  console.log('=== BLOG CARD DEBUG ===');
  console.log('Blog', blog)
  console.log('Blog title:', blog.title);
  console.log('Blog author:', blog.author);
  console.log('Blog author ID:', blogAuthorId);
  console.log('Current user ID:', currentUser?._id);
  console.log('Is owner?:', isOwner);
  console.log('=======================');

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await deleteBlog(blog._id);
      alert("Blog deleted!");
      window.location.reload();
    } catch (error) {
      alert('Could not delete blog!');
      console.error(error);
    }
  }

  return (
    <div className='cards'>
      <div className='card'>
        <Link to={`/blog/${blog._id}`} className="cardImageLink">
          <img className='image' src={blog.imgUrl} alt={blog.title} />
        </Link>

        <div className="cardContent">
          <h1>{blog.title}</h1>
          <h2>{blog.subtitle}</h2>
          <h3>{typeof blog.author === 'string' ? "Author" : blog.author?.author}</h3>

          <Link to={`/blog/${blog._id}`} className="readMore">
            Read more →
          </Link>

          {isOwner && (
            <div className="cardButtons">
              <button className='delete' onClick={handleDelete}>Delete</button>
              <Link to={`/updateBlog/${blog._id}`}>
                <button className='update'>Update</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;