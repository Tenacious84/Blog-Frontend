import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:7000/api' })

API.interceptors.request.use((req) => {
    console.log('TOKEN:', localStorage.getItem('token'))

    const token = localStorage.getItem('token')

    if (token) req.headers.authorization = `Bearer ${token}`


    return req
})

API.interceptors.response.use(
    res => res,
    err => {
        if (err.response?.status === 401) {
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
        return Promise.reject(err)
    }
    
)


export const registerUser = (data) => API.post('/user/register', data)
export const loginUser = (data) => API.post('/user/login', data)
export const getUser = () => API.post('/user')

export const getAllBlogs = () => API.get('/blog')
export const getBlog = (id) => API.get(`/blog/${id}`)
export const likeBlog = (id) => API.post(`blog/likeBlog/${id}`)

const token = localStorage.getItem('token')
export const createBlog = (formData) => API.post('/blog/createBlog', formData)
export const updateBlog = (id, data) => API.put(`/blog/updateBlog/${id}`, data)
export const deleteBlog = (id) => API.delete(`/blog/${id}`)


export const getMyBlogs = () => API.get('/blog/myBlogs')