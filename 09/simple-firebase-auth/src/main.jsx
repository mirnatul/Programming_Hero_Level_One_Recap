import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'login', Component: Login }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-10'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
