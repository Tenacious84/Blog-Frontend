import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import BlogDetails from './Pages/BlogDetails.jsx';
import MyDashBoard from './Pages/myDashBoard.jsx';
import MyBlogs from './Pages/myBlogs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />
      },
      {
        path: 'myBlogs',
        element: <MyBlogs />
      },
      {
        path: 'createBlog',
        element: <MyDashBoard />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


