import React from 'react'
import { useState, useEffect } from 'react'
import '../Pages/myDashBoard.css'
import { createBlog } from '../api'

function MyDashBoard() {
    useEffect(() => {

        if (!localStorage.getItem('token')) return window.location.href = '/'
    }, [])
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const handleCreateBlog = async (e) => {

        e.preventDefault()
        console.log('📤 BUTTON CLICKED')
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('subtitle', subtitle)
            formData.append('content', content)
            formData.append('image', image)

            await createBlog(formData)

            alert('New Blog added!')
            window.location.href = '/myBlogs'
        } catch (err) {
            console.error(err)
            alert('Could not create blog!')
        }

        console.log("SENDING:", {
            title,
            subtitle,
            content,
            image
        })



    }



    return (
        <div className='mainContent'>


            <div className="createBlog">
                <h1>
                    LET'S CREATE SOME EXCITING BLOGS!
                </h1>
                <form className='inputs' encType="multipart/form-data">
                    <input type="string" onChange={(e) => setTitle(e.target.value)} placeholder='Title...' value={title} />
                    <input type="string" onChange={(e) => setSubtitle(e.target.value)} placeholder='Subtitle...' value={subtitle} />
                    <textarea id="message" name="message" rows="5" cols="50" put type="string" onChange={(e) => setContent(e.target.value)} placeholder='Write your message here...' value={content} className='content' />
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='img...' className='img' />

                </form>

                <button className='publishButton' onClick={handleCreateBlog}> Publish Blog </button>
            </div>
        </div>


    )
}

export default MyDashBoard