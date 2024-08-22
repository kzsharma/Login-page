import './App.css'
import Hero from './components/hero/Hero'
import Login from './components/login/Login'
import SignUp from './components/signUp/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
  {
    path :"/",
    element: <> <Login /> </>
  },
  {
      path: "/signup",
      element: <> <SignUp /> </>
  },
  {
    path: "/hero",
    element: <> <Hero /> </>
  }
 ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
