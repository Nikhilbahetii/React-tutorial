import Login from './Components/Login'
import { useState } from 'react'
import './App.css'
// import UserContext from './Context/UserContext'
import Userprovider from './Context/UserProvider'
import Profile from './Components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Userprovider>
      <h1>React's context API</h1>
      <Login />
      <Profile />
    </Userprovider>
  )
}

export default App
