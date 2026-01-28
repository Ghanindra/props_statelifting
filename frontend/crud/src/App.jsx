// import React, { useState } from 'react'
// // import Form from './components/Form.jsx'
// // import Data from './components/data.jsx'
// import InputData from './components/InputData.jsx'
// import TodoList from './components/TodoList.jsx'

// const App = () => {
// const[todos,setTodos]=useState([]);


// // add new todo called by child

// const addTodo=(todo)=>{
//   setTodos([ ...todos,{id:Date.now(),text:todo,done:false}])
// }
// const dltTodo=(id)=>{
// setTodos(todos.filter(todo=>todo.id!==id))
// }
// const toggle=((id)=>{ 
// setTodos(todos.map(todo=>
// todo.id===id?{...todo,done:!todo.done}:todo
// ))
// })
//   return (
//     <div>
//       <h1>Todo</h1>
 
//       <InputData addTodo={addTodo}/>
//       <TodoList todos={todos} dlt={dltTodo} toggle={toggle} />
     
//     </div>
//   )
// }

// export default App


// state lifting practice
// import React, { useState } from 'react'
// import Counter_1 from "./components/props_statinglifting/counter_1.jsx"
// import Counter_2 from "./components/props_statinglifting/counter_2.jsx"
// const App = () => {
//   const[count,setCount]=useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <Counter_1 counter={setCount}/>
//       <Counter_2 counter={setCount}/>
//     </div>
//   )
// }

// export default App

// color display state lifting + props practice to make its concept more clear


// import React, { useState } from 'react'
// import Colorpicker from './components/props_statinglifting/Colorpicker.jsx'
// import Colordisplay from './components/props_statinglifting/Colordisplay.jsx'
// const App = () => {
//   const[selectedColor,setSelectedColor]=useState("no color yet")
//   return (
//     <div>
//          <Colorpicker changeColor={setSelectedColor}/>
//          <Colordisplay displayColor={selectedColor}/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// // import Useeffect from './components/Useeffect'
// import Clock from './components/Clock'
// const App = () => {
//   return (
//     // <div><Useeffect/></div>
//     <div><Clock/></div>
//   )
// }

// export default App









import React from 'react'
import Counter from './memo/Counter'
const App = () => {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App

































































// import React, { useState } from 'react'
// import Inputbox from './components/props_statinglifting/Inputbox'
// import Textpreview from './components/Textpreview'
// const App = () => {
//   const[text,setText]=useState("")
//   return (
//     <div>
//     <Inputbox changeText={setText}/>
//     <Textpreview text={text}/>
//     </div>
//   )
// }

// export default App