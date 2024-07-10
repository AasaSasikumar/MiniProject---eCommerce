import React from 'react'
import './Header.css'
import navlogo from '../Assets2/nav-logo.svg'

function Header() {
  return (
    <div className='navbar'>
     <img src={navlogo} alt='' className='nav-logo'/>
     
    </div>
  )
}

export default Header