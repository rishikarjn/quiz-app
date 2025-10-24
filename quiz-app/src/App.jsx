import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result'
import { useState } from 'react'
function App() {
  
  const [isOver, setIsOver]=useState(false);
  const [score, setScore]=useState(0);

  return (
    <>
     

     {isOver ?(
      <Result score={score}/>
     ) : (
      <>
      <Timer setIsOver={setIsOver}/>
      <Questions setIsOver={setIsOver} setScore={setScore}/>
      </>
     )
     }
    
     

    </>
  )
}

export default App
