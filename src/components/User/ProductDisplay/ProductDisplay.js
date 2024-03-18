import React from 'react'
import './ProductDisplay.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const ProductDisplay = () => {
  return (
    <div className='ProductDisplay'>
      <div className="ProductDisplayleft">
       <h2>NEW ARRIAVALS ONLY</h2>
        <div>
        <div className='hero_hand_icon'>
            <p>new</p>
            <img src={hand_icon} alt=""/>
        </div>
        <p className='coll'>Collections</p>
        <p className='coll'>For everyone</p>
      </div>
      <div className='Product-latest-button'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </div>
        </div>
        <div className='ProductDisplayRight'>
i         <img src={hero_image} alt=""/>
       </div>
       </div>
     )
 }

 export default ProductDisplay