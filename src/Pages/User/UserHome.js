import React from 'react'
import Header from '../../components/User/Header/Header'
import ProductDisplay from '../../components/User/ProductDisplay/ProductDisplay'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/Offers/Offers'
import NewCollections from '../../components/NewCollections/NewCollections'
 import NewsLetter from '../../components/NewsLetter/NewsLetter'
 


function UserHome() {
  return (
    <div>
        <Header/>
        <ProductDisplay/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/> 
        
    </div>
  )
}

export default UserHome