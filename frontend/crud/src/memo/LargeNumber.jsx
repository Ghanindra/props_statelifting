// import React,{useState,useMemo} from 'react'

// const LargeNumber = () => {
   

  
//     const[name,setName]=useState("Ram")


       
     

//     const sum=useMemo(()=>{
//          console.log("sum renderd");
//           const num=[100000,20000,400000,450000,6000000,600000,100000000]
//     return num.reduce((acc,curr)=>{
// return acc+curr
// },0)
//     },[])


//     return (
//     <div>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
//         <h1>{sum}</h1>
//     </div>
//   )
// }

// export default LargeNumber


import React, { useMemo, useState } from 'react'

const LargeNumber = () => {
    const[size,setSize]=useState(5)
    const[name,setName]=useState("")

   
 const sum=useMemo(() =>{
     const numbers = Array.from({ length: size }, (_, i) => i + 1);
   return  numbers.reduce((acc,curr)=>{
    console.log("sum rendered:");
    
   return acc+curr
},0)
},[size])

 return( 
    <div>
        <h1>large number</h1>
        <input type="number" value={size} onChange={(e)=>setSize(Number(e.target.value))}/>
        <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)}/>
        <p>{sum}</p>
    </div>
  )
}

export default LargeNumber