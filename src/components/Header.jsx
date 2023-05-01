import React from 'react'
import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='header--img' src='../images/icon.jpeg'/>
        <h1 className='header--title'>Meme Generator</h1>
    </div>
  )
}

export default Header