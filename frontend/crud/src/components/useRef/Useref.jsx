import React, { useRef, useState } from 'react'

const Useref = () => {
    const[time,setTime]=useState(0)
const intervalRef=useRef(null)
    const handleStart=(()=>{
        if(intervalRef.current!=null){
            return;
        }
     intervalRef.current=  setInterval(() => {
         setTime(prev=>prev+1)
       }, 1000);
       
    })
    const handleStop=(()=>{
        clearInterval(intervalRef.current)
        intervalRef.current(null)
    })
    const handleReset=(()=>{
          clearInterval(intervalRef.current)
            intervalRef.current(null)
        setTime(0)
    })
  return (
    <div>
        <h1>stop watch:{time}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Useref