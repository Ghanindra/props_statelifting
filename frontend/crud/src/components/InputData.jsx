import React,{useState} from 'react'

const InputData = ({addTodo}) => {
    const[input,setInput]=useState(" ")

    const handleAdd=(e)=>{
      e.preventDefault()
       addTodo(input)
       setInput(" ")
    }
  return (
    <div>
        <div className="form">
            <input className="input"type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="type todo"/>
            <button onClick={handleAdd}className="add">Add</button>
         
        </div>
    </div>
  )
}

export default InputData