import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/components/Home/Home.jsx';
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Users from './assets/components/Users/Users.jsx';
import UserDetailes from './assets/components/UserDetailes/UserDetailes.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import PostDetailes from './assets/components/PostsDetailes/PostDetailes.jsx';
import ErrorPage from './assets/components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetailes></UserDetailes>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetailes></PostDetailes>
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
