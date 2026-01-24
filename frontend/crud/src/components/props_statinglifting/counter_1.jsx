import React from 'react'

const counter_1 = ({counter}) => {
    const incre=(()=>{
        counter(prev=>prev+1)
    })
  return (
    <div>
        <button onClick={incre}>increment 1</button>
    </div>
  )
}

export default counter_1