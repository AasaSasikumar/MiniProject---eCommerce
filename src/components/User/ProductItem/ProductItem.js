import React from 'react'
import'./ProductItem.css'
import { Link } from 'react-router-dom'
const ProductItem = (props)=> {
  return (
    <div className='ProductItem'>
        { <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)}src={props.image} alt=''/></Link> }
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                 ${props.new_price}
            </div>
            <div className='item-price-old'>
                ${props.old_price}

            </div>
        </div>

    </div>
  )
}

export default ProductItem