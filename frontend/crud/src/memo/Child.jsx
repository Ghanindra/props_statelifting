import React from 'react'
const Child=React.memo(({changeCount})=>{

         console.log("render child");
    return (
    <div>

        
        <h1>{changeCount}</h1>
    </div>
  )

})

export default Child