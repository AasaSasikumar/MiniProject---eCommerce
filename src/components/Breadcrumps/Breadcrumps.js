import React from 'react'
import './Breadcrumps.css'
import arrow_icon from '../Assets1/breadcrum_arrow.png'
function Breadcrumps(props) {
    const{product} = props;
  return (
    <div className='beadcrumps'>
        HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt=''/> {product.name}
        


    </div>
  )
}

export default Breadcrumps