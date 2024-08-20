import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signUp/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
  {
    path :"/",
    element: <><Login /></>

  },
  {
      path: "/signup",
      element: <><SignUp /> </>
  }
 ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
