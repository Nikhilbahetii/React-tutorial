import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15; 

  const addValue = () => {
    
    counter = counter + 1;
    setCounter(counter)
    // console.log("clicked", counter);
    

  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  
  return (
    <>
        <h1>ITs the 5th video of react </h1>
        <h2>Counter VAlue: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
