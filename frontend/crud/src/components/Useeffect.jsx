// import React, { useState ,useEffect} from 'react'

// const Useeffect = () => {
//     const[count,setCount]=useState(0)
//     const[intervalId,setIntervalId]=useState(null)
//     useEffect(() => {
//     const interval=setInterval(()=>{
//  setCount(c=>c+1)
//     },1000)
//     setIntervalId(interval)
    
//       return () =>clearInterval(interval)
//     }, [])
//     const stopCount=(()=>{
//       clearInterval(intervalId)
//        setIntervalId(null); 
//     })
//     const start=(()=>{
    
//     })
//   return (
//     <div>
// <h2>{count}</h2>
// <button onClick={stopCount}>stop</button>
// <button onClick={start}>start</button>

//     </div>
//   )
// }

// export default Useeffect


// import React, { useState } from 'react'

// const Useeffect = () => {
// const[count,setCount]=useState(0)

//   const counter=(()=>{
// setCount(prev=>prev+1)
//   })
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={counter}>count</button>
//     </div>
//   )
// }

// export default Useeffect
// import React from 'react';
// function UseEffect() {
//   const [count, setCount] = React.useState(0);
//     // console.log(count);
//   function handleClick() {

//       console.log("Before update:", count);
//     setCount(count + 1);
//       console.log("After first setCount:", count); 
//     setCount(count + 1);
//       console.log("After second setCount:", count); //
//     setCount(count + 1);
//       console.log("After third setCount:", count); //
//     // setCount(prev=>prev+1)
//     // setCount(prev=>prev+1)
//     // setCount(prev=>prev+1)
//   }
//   console.log(count);
  

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// }
// export default UseEffect

import React,{useState,useEffect} from 'react'
const Useeffect = () => {
const[apis,setApis]=useState([])
const[count,setCount]=useState(10)
const [loading, setLoading] = useState(true);



  
  useEffect(() => {
      let api=`https://dogapi.dog/api/v1/facts?number=${count}`
    const fetchapi=async()=>{
    const res= await fetch(api)
    const data=await res.json()
    console.log(data);
    
   setApis(data.facts)
   setLoading(false)
    
  }
  fetchapi()
  }, [count])


  return (
    <div>
  {loading && <p>Loading...</p>}

{/* {apis.map(dog=>(
  <div key={dog}>
    <li>dog</li>
    </div>
))} */}
<input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
{apis.map((dog)=>(
  
  <ul key={dog}>
    <li>{dog}</li>
  </ul>

))}

    </div>
  )
}

export default Useeffect