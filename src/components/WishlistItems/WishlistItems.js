// import React, { useContext } from 'react';
// import './WishlistItems.css';
// import { WishlistContext } from '../../Context/WishlistContext'; // Adjust the path as per your project structure
// import remove_icon from '../Assets1/cart_cross_icon.png';
// import all_product from '../User/Assets/all_product';

// function WishlistItems() {
//     const {  wishlistItems, removeFromWishlist } = useContext(WishlistContext);

//     console.log('all_product in WishlistItems:', all_product);
//     console.log('wishlistItems in WishlistItems:',wishlistItems)

//     if (!wishlistItems || wishlistItems.length === 0) {
//         return <div>No items in your wishlist.</div>;
//     }

//     // const getTotalWishlistAmount = () => {
//     //     let totalAmount = 0;
//     //     wishlistItems.forEach(item => {
//     //         totalAmount += item.price;
//     //     });
//     //     return totalAmount;
//     // };

//     // const totalAmount = getTotalWishlistAmount();
//     // console.log('Total Amount from Wishlist:', totalAmount);

//     return (
//         <div className='wishlist-container'>
//             <div className='wishlist-item'>
//                 <div className='wishlist-format-main'>
//                     <p>Products</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Remove</p>
//                 </div>
//                 <hr />
//                 {all_product.map((e) => (
//                     <div key={e.id}>
//                         <div className='wishlist-format'>
//                             <img src={e.image} alt={e.name} className='wishlist-product-icon' />
//                             <p>{e.name}</p>
//                             <p>${e.new_price}</p>
//                             <img className='wishlist-remove-icon' src={remove_icon} onClick={() => removeFromWishlist(e.id)} alt='Remove' />
//                         </div>
//                         <hr />
//                     </div>
//                 ))}
//                 <div className='wishlist-down'>
//                     <div className='wishlist-total'>
//                         <h1>Wishlist Totals</h1>
//                         {/* <div className='wishlist-total-item'>
//                             <p>Total Amount</p>
//                             <p>${totalAmount}</p>
//                         </div> */}
//                         <button>PROCEED TO CART</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WishlistItems;


import React, { useContext } from 'react';
import './WishlistItems.css';
import { WishlistContext } from '../../Context/WishlistContext'; // Adjust the path as per your project structure
import remove_icon from '../Assets1/cart_cross_icon.png';


function WishlistItems() {
    const {all_product, wishlistItems, removeFromWishlist } = useContext(WishlistContext);
    console.log('all_product in CartItems:', all_product);

    console.log('wishlistItems in WishlistItems:', wishlistItems);

    // Filter products to display only those in the wishlist
    // const wishlistProducts = Object.keys(wishlistItems).filter((productId) => wishlistItems[productId]);

    // if (!wishlistProducts || wishlistProducts.length === 0) {
    //     return <div>No items in your wishlist.</div>;
    // }
    if (!all_product || !wishlistItems|| all_product.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className='wishlist-container'>
            <div className='wishlist-item'>
                <div className='wishlist-format-main'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if (wishlistItems[e.id] > 0) {
                {/* {wishlistProducts.map((e) => {
                    const product = wishlistItems[e.id]; // Assuming wishlistItems store complete product details */}

                    return (
                        <div key={e.id}>
                            <div className='wishlist-format'>
                                <img src={e.image} alt={e.name} className='wishlist-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <img className='wishlist-remove-icon' src={remove_icon} onClick={() => removeFromWishlist(e.id)} alt='Remove' />
                            </div>
                            <hr />
                        </div>
                    );
                }
                })}
                <div className='wishlist-down'>
                    <div className='wishlist-total'>
                        <h1>Wishlist Totals</h1>
                        {/* Add total amount logic if needed */}
                        {/* <div className='wishlist-total-item'>
                            <p>Total Amount</p>
                            <p>${totalAmount}</p>
                        </div> */}
                        <button>PROCEED TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WishlistItems;
