import React, { useState,useMemo, useCallback } from 'react'
import Subtraction from '../memo/Subtraction'
const Counter = () => {
    const[count,setCount]=useState(0)
  const[name,setName]=useState("Ram")

    const add=(()=>{
        setCount(prev=>prev+1)
    })

    // use memo is use to prevent from rerender and only rerender when its dependency change ,it save memory and user interface is smooth
const factorial= useMemo(()=>{
console.log("calculating factorial");
        let result=1;
        for(let i=1;i<=count;i++){
            result*=i;
        }
        return result;
},[count])
   
      const hero=useCallback(()=>{
  console.log("Button clicked");
      },[]) 



  return (
    <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <h2>{hero}</h2>
        <h1>factorial:{factorial}</h1>
        <button onClick={add}>increment</button>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
       
        <Subtraction count={0} hero={hero}/>
        {/* <Subtraction count={0} /> */}
    </div>
  )
}

export default Counter