import React,{useState} from 'react'
//React.memo is used to prevent unneccessary rerender of child componentts if props is unchange
const Subtraction =React.memo(({count,hero})=>{
const[sub,setSub]=useState(0)
    const subtract=(()=>{
        setSub(prev=>prev-1)
    })
    console.log("rerender");
    

    return (
    <div>
        <h1>Subtraction</h1>
        <p>{count}</p>
        <p>{sub}</p>
        <button onClick={subtract}>subtract</button>
        <button onClick={hero}>hero</button>
    </div>
  )
}) 
    
  


export default Subtraction