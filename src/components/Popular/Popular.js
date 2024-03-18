import React from 'react';
import './Popular.css';
import data_product from '../User/Assets/data';
import ProductItem from '../User/ProductItem/ProductItem';

function Popular() {
  return (
    <div className='Popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='Popular-item'>
        {data_product.map((item, i) => (
          <ProductItem
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
