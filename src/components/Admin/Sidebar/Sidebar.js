import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../Assets2/Product_Cart.svg'
 import list_product_icon from '../Assets2/Product_list_icon.svg'
function Sidebar() {
  return (


    <div className='sidebar'>

        

        <Link to={'/add'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={add_product_icon} alt='' />
                <p>Add Product</p>
            </div>

        </Link>
         <Link to={'/Product'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                <img src={list_product_icon} alt='' />
                <p>Product List</p>
            </div> 

         </Link> 

         <Link to={'/admin/user'} style={{textDecoration:"none"}}>
            <div className='sidebar-item'>
                {/* <img src={list_product_icon} alt='' /> */}
                <p>UserList</p>
            </div>

        </Link> 
    </div>
  )
}

export default Sidebar