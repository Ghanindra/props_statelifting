import React from 'react'
import {useReducer} from 'react'
const Counter = () => {

const initialState={count:0}
const reducer=(state,action)=>{
    switch(action.type){
   case "increment":{
  return {count:state.count+1}
    
   }
 
  
    case "decrement":{
        if(!state.count<=0)
      return {count:state.count-1}
    else{
        return {count:state.count}
    }
    }

     case "input":{
  return {count:action.payload}
    
   }  
     case "reset":{
  return {count:state.count=0}
    
   }  
        default:{
  return state
        }
         
    }

}
   const[state,dispatch]= useReducer(reducer,initialState) //usereducer return array which has state and dispatch method,state has value of initialstate and dispatch is used to update this state, reducer is a function

    // const[count,setCount]=useState(0)

    // const handleIncrement=(()=>{
    //     setCount(prev=>prev+1)
    // })
    // const handleDecrement=(()=>{
    //     if(count<=0) return;
    //     setCount(prev=>prev-1)
    // })
  return (

    <div>
        <h1 style={{alignItems:"center"}}>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'}) }>increment</button>
        <button onClick={()=>dispatch({type:'decrement'})} >decrement</button>
        <button onClick={()=>dispatch({type:'reset'})} >reset</button>
      <br/>
       <input type="number" 
       value={state.count}
       onChange={(e)=>{dispatch({type:'input',payload:Number(e.target.value)})}}/>
       
    
      
    </div>
 
  )
}

export default Counter