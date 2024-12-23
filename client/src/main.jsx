import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App";
import Layout from './Pages/Layout';
import Hero from './Components/Hero';
import SignIn from './Pages/SignIn';
import Login from './Pages/Login';
const myRouter=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Hero/>
      },
      {
        path: 'SignIn',
        element: <SignIn/>
      },
      {
        path: 'MyLinks',
        element: <h1>This is My Links Page</h1>
      },
      {
        path: 'Login',
        element: <Login/>
      }
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}/>
  </StrictMode>,
)
