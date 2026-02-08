import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:7000/api' })

API.interceptors.request.use((req) => {
    console.log('TOKEN:', localStorage.getItem('token'))

    const token = localStorage.getItem('token')

    if (token) req.headers.authorization = `Bearer ${token}`
    return req
})

export const registerUser = (data) => API.post('/user/register', data)
export const loginUser = (data) => API.post('/user/login', data)

export const getAllBlogs = () => API.get('/blog')
export const getBlog = (id) => API.get(`/blog/${id}`)

const token = localStorage.getItem('token')
export const createBlog = (formData) => API.post('/blog/createBlog', formData, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } })
export const updateBlog = (id) => API.put(`/blog/updateBlog/${id}`)
export const deleteBlog = (id) => API.delete(`/blog/deleteBlog/${id}`)
export const getMyBlogs = () => API.get('/blog/myBlogs')