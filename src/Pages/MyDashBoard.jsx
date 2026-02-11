import React, { useState, useEffect } from 'react';
import '../Pages/myDashBoard.css';
import { createBlog } from '../api';

function MyDashBoard() {
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }
    }, []);

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCreateBlog = async (e) => {
        console.log('Form submitted')
        e.preventDefault();
        setLoading(true)

        try {

            const user = JSON.parse(localStorage.getItem('user')); // MUST exist

            if (!user?._id) {
                alert('User not found. Please log in again.');
                return;
            }

            const formData = new FormData();
            formData.append('title', title);
            formData.append('subtitle', subtitle);
            formData.append('content', content);
            formData.append('author', user._id); // FIX #1

            if (image) {
                formData.append('image', image); // FIX #2
            }

            console.log(' SENDING FORM DATA:', {
                title,
                subtitle,
                content,
                author: user._id,
                image,
            });

            await createBlog(formData);

            alert('New Blog added!');
            window.location.href = '/myBlogs';
        } catch (err) {
            console.error(err);
            alert('Could not create blog!');
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="mainContent">
            <div className="createBlog">
                <h1>LET&apos;S CREATE SOME EXCITING BLOGS!</h1>

                {/* FIX #3: form handles submit */}
                <form
                    className="inputs"
                    encType="multipart/form-data"
                    onSubmit={handleCreateBlog}
                >
                    <input
                        type="text"
                        placeholder="Title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        placeholder="Subtitle..."
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        required
                    />

                    <textarea
                        rows="5"
                        placeholder="Write your message here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="content"
                        required
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="img"
                    />

                    <button type="submit" className="publishButton" >
                        {loading ? 'Publishing...' : 'Publish Blog'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default MyDashBoard;

// import React from 'react'
// import { useState, useEffect } from 'react'
// import '../Pages/myDashBoard.css'
// import { createBlog } from '../api'

// function MyDashBoard() {
//     useEffect(() => {

//         if (!localStorage.getItem('token')) return window.location.href = '/'
//     }, [])
//     const [title, setTitle] = useState('')
//     const [subtitle, setSubtitle] = useState('')
//     const [content, setContent] = useState('')
//     const [image, setImage] = useState(null)

//     const handleCreateBlog = async (e) => {

//         e.preventDefault()
//         console.log('📤 BUTTON CLICKED')
//         try {
//             const formData = new FormData()
//             formData.append('title', title)
//             formData.append('subtitle', subtitle)
//             formData.append('content', content)
//             formData.append('image', image)

//             await createBlog(formData)

//             alert('New Blog added!')
//             window.location.href = '/myBlogs'
//         } catch (err) {
//             console.error(err)
//             alert('Could not create blog!')
//         }

//         console.log("SENDING:", {
//             title,
//             subtitle,
//             content,
//             image
//         })



//     }



//     return (
//         <div className='mainContent'>


//             <div className="createBlog">
//                 <h1>
//                     LET'S CREATE SOME EXCITING BLOGS!
//                 </h1>
//                 <form className='inputs' encType="multipart/form-data">
//                     <input type="string" onChange={(e) => setTitle(e.target.value)} placeholder='Title...' value={title} />
//                     <input type="string" onChange={(e) => setSubtitle(e.target.value)} placeholder='Subtitle...' value={subtitle} />
//                     <textarea id="message" name="message" rows="5" cols="50" put type="string" onChange={(e) => setContent(e.target.value)} placeholder='Write your message here...' value={content} className='content' />
//                     <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='img...' className='img' />

//                 </form>

//                 <button className='publishButton' onClick={handleCreateBlog}> Publish Blog </button>
//             </div>
//         </div>


//     )
// }

// export default MyDashBoard