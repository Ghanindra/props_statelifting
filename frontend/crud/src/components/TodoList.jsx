import React from 'react'
import TodoItem from "../components/TodoItem"
const TodoList = ({todos,dlt,toggle}) => {
  return (
    <div>
             <ul>
      {todos.map(todo=>( 

        
   <TodoItem key={todo.id} todo={todo} dlt={dlt} toggle={toggle} />//just for practice state lifting

      
      
   ))}
     </ul>
     </div>
  );
}

export default TodoList