import React, { useEffect, useState } from 'react'

const Timer = () => {

const [leftTime, setLeftTime]=useState(60);
const [displayTime, setDisplayTime]=useState('')


// left time logic
useEffect(()=>{
  let intervalId= setInterval(()=>{
    setLeftTime(prev =>{
      if(prev<=0){
        clearInterval(intervalId);
        return 0;
      }
      return prev -1;
    });
}, 1000);
return () =>{
  clearInterval(intervalId);
 };
},[]);


// time format logic
useEffect(()=>{
  let formattedTime=(`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)} `)
  setDisplayTime(formattedTime)
},[leftTime]);


  return (
    <div>
      Time Left:{displayTime}
    </div>
  );
};

export default Timer
