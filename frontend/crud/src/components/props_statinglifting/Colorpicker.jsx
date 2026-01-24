import React from 'react'

const Colorpicker = ({changeColor}) => {
   const red=(()=>{
    changeColor("red")
   })
   const green=(()=>{
    changeColor("green")
   })
   const blue=(()=>{
    changeColor("blue")
   })
  return (
    <div>
        <button onClick={red}>Red</button>
        <button onClick={green}>Green</button>
        <button onClick={blue}>Blue</button>
    </div>
  )
}

export default Colorpicker