import React, { useState } from "react";
import './Header.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";


function Header() {

  const[menu,setMenu]=useState("shop");
  return (
    <div className="Header">
      <div className="headerbrand">
        <img className="pic" src={logo} alt="" />
        <p>SHOPSEE</p>
      </div>
      <div className="headerlinks">
        <ul>
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}} to='/'>shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none'}}to='/mens'>mens</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration:'none'}}to='/women'>women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="headerbuttons">
        <Link to ='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt=""/></Link>
      
      </div>
    </div>
  )
}

export default Header;
