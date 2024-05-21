import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BookDetail from './pages/BookDetail.jsx'
import VnBook from './pages/VnBook.jsx'
import AfterSearch from './pages/AfterSearch.jsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    // Dynamic segment
    path: "/book/:id",
    element: <BookDetail />
  },
  {
    path:"/VnBook",
    element:<VnBook />
  },
  {
    path: "/Search/:name",
    element: <AfterSearch />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
