import React, { useContext } from 'react'
// import { configureStore } from '@reduxjs/toolkit'
import { UserContext } from '../../Context/UserContext'
import { useParams } from 'react-router-dom'
import Breadcrumps from '../../components/Breadcrumps/Breadcrumps'
import ProductDisplay1 from '../../components/ProductDisplay1/ProductDisplay1'
import DescriptionBox from '../../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts'
// import { WishlistContext } from '../../Context/WishlistContext'

function UserProduct() {
  const{all_product} = useContext(UserContext)
  // const{all_product} =useContext(WishlistContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumps product={product}/>
      <ProductDisplay1 product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default UserProduct