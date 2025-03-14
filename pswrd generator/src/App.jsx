import { useState, useRef } from 'react'
import { useCallback, useEffect } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numallow, setnum] = useState(false);
  const [charac, setchara] = useState(false);
  const[password, setpswrd] = useState("password")

  const pswrdRef = useRef(null)

  const Passwordgen = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow) str += "0123456789"
    if(charac) str += "!#$%&'()*+,-./:;<=>?@][\^_`{|}~"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpswrd(pass)

  }, [length, numallow, charac, setpswrd])

  const copypswrd = useCallback(() => {
    pswrdRef.current?.select();
    pswrdRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    Passwordgen()
  }, [length, numallow, charac, Passwordgen])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-800' >
            <h1 className='text-lg text-center text-white my-2'> Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={pswrdRef}
         />
         <button onClick={copypswrd} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
         </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value)}}></input>
          <label> Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numallow} id='numinput' onChange={() => {
            setnum((prev) => !prev);
          }} />
          <label htmlFor='numinput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked= {charac} id='charinput' onChange={() => {
            setchara((prev) => !prev)
          }}/>
          <label htmlFor="charinput">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
