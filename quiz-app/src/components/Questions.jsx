import React, { useState } from 'react'
import questions from './questions.json'

const Questions = ({setIsOver,setScore}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore]=useState(0)
     console.log(score)


     const handleOptionClick =(selectedOption) =>{
        if(selectedOption === questions[currentIndex].answer)
        {
            setScore(prev => prev+1);
        }
        if(currentIndex + 1 < questions.length){
           setCurrentIndex(prev=>prev+1); 
        }
        
                   
     }
     
     
  return (
    <div>
      <h2 className='mt-8 mb-4'>{questions[currentIndex].question}</h2>

      <div className='flex flex-col gap-3'>
        {
            questions[currentIndex].options.map(
                (option) => {
                    return <button key={option} onClick={()=>{handleOptionClick(option)}}>
                        {option}
                    </button>
                })
        }
      </div>
     
    </div>
  )
}

export default Questions
