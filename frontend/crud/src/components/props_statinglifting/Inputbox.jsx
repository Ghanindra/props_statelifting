import React, { useState } from 'react'

const Inputbox = ({changeText}) => {
    const[input,setInput]=useState("")
//   const handlechange=((e)=>{
//     const value=e.target.value
//     setInput(value)
//     changeText(value)
//   })
const handleSubmit=((e)=>{
    e.preventDefault()
    changeText(input)
    setInput("")
})
  return (
    <div>
        <input type="text" value={input} placeholder="change text" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSubmit}> Submit</button>
    </div>
  )
}

export default Inputbox