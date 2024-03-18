import React from 'react'
import './NewCollections.css'
import new_collection from "../Assets1/new_collections"
import ProductItem from '../User/ProductItem/ProductItem'

function NewCollections() {
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {new_collection.map((item,i)=>{
                return <ProductItem key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}

        </div>

    </div>
  )
}

export default NewCollections