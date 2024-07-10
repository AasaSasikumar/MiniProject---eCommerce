import React, { useContext, useState } from "react";
import './Header.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";






function Header() {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(UserContext);
  const [link,setLink] = useState("shop");
  // const menuRef=useRef();

  // const dropdown_toggle =(e)=>{
  //   menuRef.current.classList.toggle('nav-menu-visible');
  //   e.target.classList.toggle('open');
  // }
  
  return (
    <div className="Header">
      <div className="headerbrand">
        <img className="pic" src={logo} alt="" />
        <p>SHOPSEE</p>
      </div>
      <div className="headerlinks">
        {/* <img className='nav-dropdown'onClick={dropdown_toggle} src={nav_dropdown} alt=""/> */}
        <ul >
          <li onClick={() => {setMenu("shop")}}>
            <Link style={{ textDecoration: 'none'}} to='/'>shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => {setMenu("mens")}}>
            <Link style={{ textDecoration: 'none'}} to='/mens'>mens</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => {setMenu("women")}}>
            <Link style={{ textDecoration: 'none'}} to='/women'>women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => {setMenu("kids")}}>
            <Link style={{ textDecoration: 'none'}} to='/kids'>kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="headerbuttons">
        <Link to='/Signup'>
          <button>Signup</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt=""/>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div> {/* Closing tag added */}
      </div>
      <Link to='/wishlist' >
      <button>Wishlist</button>
      </Link>

    </div>
  );
}

export default Header;
