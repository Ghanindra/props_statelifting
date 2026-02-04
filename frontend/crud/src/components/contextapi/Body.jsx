import React, { useContext } from 'react'
import Main from '../contextapi/Main'

import { ThemeContext } from '../../context/ThemeContext'
const Body = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div>
      <p>{theme}</p>
        <p>This is body</p>
        <Main/>
    </div>
  )
}

export default Body