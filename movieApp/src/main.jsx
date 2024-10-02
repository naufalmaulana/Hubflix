import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import MainContent from './components/MainContent'
import AboutContent from './components/AboutContent'
import FavoriteContent from './components/FavoriteContent'
import GenreContent from './components/GenreContent'
import SearchContent from './components/SearchContent.jsx';
import './assets/css/styles.css'

const router = createBrowserRouter([
  {
    element: <App/>, 
    children: [
      {
        path: "/",
        element: <Navigate to="/popular" replace />,
      },
      {
        path: "/:id",
        element: <MainContent/>,
      },
      {
        path: "/about",
        element: <AboutContent />,
      },
      {
        path: "/favorite",
        element: <FavoriteContent />,
      },
      {
        path: "/genre/:id",
        element: <GenreContent />,
      },
      {
        path: "/search/:id",
        element: <SearchContent />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
