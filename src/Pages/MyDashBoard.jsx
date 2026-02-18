import { useState, useEffect } from 'react'
import '../Pages/myDashBoard.css'
import { createBlog } from '../api'

function MyDashBoard() {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Please log in first.')
      window.location.href = '/login'
    }
  }, [])

  const handleCreateBlog = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      const formData = new FormData()
      formData.append('title', title)
      formData.append('subtitle', subtitle)
      formData.append('content', content)


      if (image) {
        formData.append('image', image)
      }


      await createBlog(formData)

      alert('Blog created successfully!')
      window.location.href = '/myBlogs'
    } catch (err) {
      console.error(err)
      alert('Failed to create blog!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mainContent">
      <div className="createBlog">
        <h1>     LET&apos;S CREATE SOME EXCITING BLOGS !</h1>

        <form className="inputs" encType="multipart/form-data" onSubmit={handleCreateBlog} >
          <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} required />

          <input type="text" placeholder="Subtitle..." value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />

          <textarea rows="5" placeholder="Write your message here..." value={content} onChange={(e) => setContent(e.target.value)} className="content" required />

          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="img" />

          <button type="submit" className="publishButton">
            {loading ? 'Publishing...' : 'Publish Blog'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default MyDashBoard