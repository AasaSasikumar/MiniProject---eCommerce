import React, { useContext } from 'react';
import './CSS/UserCategory.css';
import ProductItem from '../../components/User/ProductItem/ProductItem';
import dropdown_icon from '../../components/Assets1/dropdown_icon.png';
import { UserContext } from '../../Context/UserContext';

const UserCategory = (props) => {
  const { all_product } = useContext(UserContext);

  return (
    <div className='usercategory'>
      <img className='shopcategory-banner'src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <ProductItem
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
}

export default UserCategory;
