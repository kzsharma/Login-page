import { useState } from 'react'

import './App.css'
import Login from './components/login/Login'
import SignUp from './components/signUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    <SignUp />
    </>
  )
}

export default App
