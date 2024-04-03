import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import router from "./router/router"
import { RouterProvider } from "react-router-dom";

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}


