import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './result'

const secreteNum= Math.floor(Math.random()* 10)+1;

function App() {
  const [term,setTerm]=useState("")
  const handlechange = (e)=>{
    setTerm(e.target.value)
  }
  return (
    <>
      <div className='container'>
        <div className="head">
             <label htmlFor='term'> GUESS THE NUMBER </label>
        </div>
        <input 
        id="term"
        type='text'
        name='term'
        onChange={handlechange}

         />
         <Result secreteNum={secreteNum} term={term} />
        
      </div>
     
    </>
  )
}

export default App
