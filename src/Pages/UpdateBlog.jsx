import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getBlog, updateBlog } from "../api"
import '../Pages/UpdateBlog.css'

const UpdateBlog = () => {
    const { id } = useParams()

    const [blogContent, setBlogContent] = useState({
        title: "",
        subtitle: "",
        content: "",

    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadBlog = async () => {
            try {
                const { data } = await getBlog(id)
                setBlogContent(data)
            } catch (error) {
                console.log(error)
            }
            finally { setLoading(false) }
        }

        loadBlog()
        console.log(blogContent)
    }, [id])
    console.log(blogContent)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await updateBlog(id, blogContent)
            alert("Blog updated successfully")
            window.location = '/myBlogs'
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="mainContent">
            <div className="updateBlog">
                <h1>     LET&apos;S PERFECT THIS BLOG...😌</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={blogContent.title}
                        onChange={(e) =>
                            setBlogContent({
                                ...blogContent, title: e.target.value
                            })
                        }
                    />
                    <input
                        value={blogContent.subtitle}
                        onChange={(e) =>
                            setBlogContent({
                                ...blogContent, subtitle: e.target.value
                            })
                        }
                    />

                    <textarea
                        className="content"
                        value={blogContent.content}
                        onChange={(e) =>
                            setBlogContent({
                                ...blogContent, content: e.target.value
                            })
                        }
                    />

                    <button type="submit" className="updateButton">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog
