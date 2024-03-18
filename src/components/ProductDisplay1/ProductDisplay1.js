import React from 'react'
import './ProductDisplay1.css'
import star_icon from "../Assets1/star_icon.png"
import star_dull_icon from "../Assets1/star_dull_icon.png"
import UserProduct from '../../Pages/User/UserProduct'

function ProductDisplay() {
  return (
    <div className='productdisplay'>
      <div className='Productdisplay-left'>
        <div className='Productdisplay-image-list'>
          <img src={UserProduct.image} alt='' />
          <img src={UserProduct.image} alt='' />
          <img src={UserProduct.image} alt='' />
          <img src={UserProduct.image} alt='' />
        </div>
        <div className='productdisplay-img'>
             <img className='productdisplay-main-img'src={UserProduct.image} alt='' />
        </div>

      </div>
      <div className='Productdisplay-right'>
        <h1>{UserProduct.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>




        </div>

      </div>

    </div>
  )
}

export default ProductDisplay