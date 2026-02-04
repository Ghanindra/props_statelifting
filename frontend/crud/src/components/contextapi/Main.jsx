import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Main = () => {
  const {theme,toogle}=useContext(ThemeContext)
  return (
    <div>
        <p>This is {theme} mode</p>
        <button onClick={toogle}>change theme</button>
    </div>
  )
}

export default Main