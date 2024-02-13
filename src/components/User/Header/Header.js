import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
    <div className='headerbrand'>
    <h1></h1>

    <img className='pic'
    src=''/>

    </div>
    <div className='headerlinks'>
        <ul><li><a>Latest</a></li>
        <li><a>Brands</a></li>
        <li><a>Categories</a></li>
        <li><a>Support</a></li>
        </ul>
    </div>
    <div className='headerrbuttons'>
        <button className='wishlist'>wishlist</button>
        <button className='favorite'>fav</button>
    </div></div>
  )
}

export default Header