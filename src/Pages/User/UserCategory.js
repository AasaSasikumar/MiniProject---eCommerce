import React, { useContext } from 'react';
import './CSS/UserCategory.css';
import ProductItem from '../../components/User/ProductItem/ProductItem';
import dropdown_icon from '../../components/User/Assets/dropdown_icon.png';
import { UserContext } from '../../Context/UserContext';
import{WishlistContext} from '../../Context/WishlistContext';
//  import ProductCard from '../../components/User/ProductCard/ProductCard';
// import { Products } from '../../Services/AdminApi';


const UserCategory = (props) => {
  const { all_product} = useContext(UserContext,WishlistContext);
  // const {all_product}= useContext(WishlistContext);

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
         {/* <div className="shop">
    error ? (
        <div className="error-message">{error}</div> 
       ) :   ( 
      <div className="product-list">
        {Produ.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  </div> */}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
}

export default UserCategory;
