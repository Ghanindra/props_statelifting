import React, { useCallback, useState } from 'react'
import Child from '../memo/Child'
const Callbacks = () => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState("")

    const changeCount=useCallback(()=>{
        setCount(prev=>prev+1)
    },[])
  return (
    <div>
        <h1>parent</h1>
        <p>{count}</p>
        <button onClick={changeCount}>change count</button>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
   <Child changeCount={changeCount}/>
    </div>
  )
}

export default Callbacks