import React from 'react'

const TodoItem = ({todo,dlt,toggle}) => {
    console.log("todo",todo);
    
  return (
    <div>
        <li>
            <span onClick={()=>toggle(todo.id)}
                style={{
                    textDecoration:todo.done?"line-through":"none",cursor:"pointer"
                }}>
  {todo.text} 
            </span>
          
            <button onClick={()=>dlt(todo.id)}>delete</button>
  
          
        </li>
    </div>
  )
}

export default TodoItem