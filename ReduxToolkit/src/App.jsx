import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/Addtodo'
import Todos from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Redux toolkit</h1>
    <AddTodo />
    <Todos />
   </>
  )
}

export default App
