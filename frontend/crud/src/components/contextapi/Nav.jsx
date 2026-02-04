import React, { useContext } from 'react'
import { ThemeContext } from "../../context/ThemeContext";

const Nav = () => {
 const {theme}= useContext(ThemeContext)
  return (
    <div>
<h1 style={{backgroundColor:theme==='light'?'blue':'orange'}}>
Header:{theme}
</h1>

    </div>
  )
}

export default Nav