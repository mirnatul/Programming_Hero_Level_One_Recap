import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import { router } from './Routes/routes';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1440px] mx-auto px-6'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
