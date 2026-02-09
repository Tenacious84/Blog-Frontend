import { React, useEffect, useState } from 'react'
import { getMyBlogs } from "../api";
import BlogCard from '../Components/BlogCard/BlogCardComponent';

function MyBlogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        async function load() {
            res = await getMyBlogs()
            setBlogs(res.data)
            console.log(res.data)
        }

        load()
        console.log(blogs.author)
    }, [])

    return (
        <div> {`Welcome ${blogs.author.author}`}

            {
                blogs.map((b) => (
                    <BlogCard blog={b} key={b._id} />
                ))
            }
        </div>
    )
}

export default MyBlogs

