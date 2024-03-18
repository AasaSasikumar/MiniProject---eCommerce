import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useParams } from 'react-router-dom'
import Breadcrumps from '../../components/Breadcrumps/Breadcrumps'
import ProductDisplay1 from '../../components/ProductDisplay1/ProductDisplay1'

function UserProduct() {
  const{all_product} = useContext(UserContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrumps product={product}/>
      <ProductDisplay1 product={product}/>
    </div>
  )
}

export default UserProduct