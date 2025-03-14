import { useEffect, useState } from 'react'
import './App.css'
import { useTodo, Todoprovider } from './context/Todocontext'
import TodoForm from './Components/TodoForm'

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (todo, id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? todo : prevtodo)) 
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  return (
    <Todoprovider value={{addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
       <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
           <div className="mb-4">
               {/* Todo form goes here */} 
               <TodoForm/>
           </div>
           <div className="flex flex-wrap gap-y-3">
               {/*Loop and Add TodoItem here */}
               
           </div>
       </div>
   </div>
   </Todoprovider>
  )
}

export default App
