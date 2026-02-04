import React from 'react'

const counter_2 = ({counter}) => {
     const incre=(()=>{
        counter(prev=>prev+1)
        
    })
  return (

    <div>
                <button onClick={incre}>increment 2</button>
    </div>
  )
}

export default counter_2