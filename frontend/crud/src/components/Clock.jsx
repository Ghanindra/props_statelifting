

// import React ,{useState,useRef} from 'react'

// const Clock = () => {
//     const[time,setTime]=useState(new Date().toLocaleTimeString());
    
// const intervalRef=useRef()
//     // useEffect(() => {
//     // const id=setInterval(() => {
//     //     setTime(new Date().toLocaleTimeString())
//     // }, 1000);
//     // const stop=setTimeout(() => {
//     //     clearInterval(id)
//     // }, 10000);
//     //   return () => {
//     //     clearInterval(id)
//     //     clearTimeout(stop)
//     //   }
//     // },[])
//     console.log(time);
//     const startTime=(()=>{
//         if(intervalRef.current) return;
//      intervalRef.current=setInterval(() => {
//         setTime(new Date().toLocaleTimeString())
//     }, 1000);
    
//     })
//     const stop=(()=>{

//          clearInterval(intervalRef.current)
//          intervalRef.current=null;
//     })
//     return( 
//     <div>
//         {time}
//         <button onClick={startTime}>start</button>
//         <button onClick={stop}>stop</button>
//     </div>
//   )
// }

// export default Clock


import React,{useState,useEffect} from 'react'

const Clock = () => {
    const[time,setTime]=useState(new Date().toLocaleTimeString())
    const[input,setInput]=useState(2000)
    useEffect(() => {
      
        const id=setInterval(() => {
         setTime(new Date().toLocaleTimeString())   
        }, input);
    
      return () => {
     clearInterval(id)
      }
    }, [input])
    
  return (
    <div>
        <h1>{time}</h1>
        <input type="number" value={input} onChange={(e)=>setInput(Number(e.target.value))}></input>
    </div>
  )
}

export default Clock