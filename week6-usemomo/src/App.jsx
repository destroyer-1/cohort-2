import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <Calculate />
    </>
  )
}

function Calculate(){
  const [number, setNumber] = useState(0)
  const [inputvalue, setInputvalue] = useState(0)

  let count = useMemo(()=> {
    setNumber(parseInt(inputvalue*(inputvalue+1)/2));
  },[inputvalue])
  return (
    <div>
      <input  type="text" placeholder="Enter a number"  onChange={(e)=>{
        setInputvalue(parseInt(e.target.value))
        console.log(e.target.value)
      }}></input>
      <div>Sum is {number}</div>
      <button onClick={() =>{
        setNumber(count)
      }}>Add</button>

    </div>
  )
}

export default App
