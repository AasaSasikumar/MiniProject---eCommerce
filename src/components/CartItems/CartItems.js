// import React, { useContext } from 'react';
// import './CartItems.css';
// import { UserContext } from '../../Context/UserContext';
// import { WishlistContext } from '../../Context/WishlistContext';
// import remove_icon from '../Assets1/cart_cross_icon.png';

// function CartItems() {
//     const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(UserContext);
//     const { addToWishlist } = useContext(WishlistContext);

//     if (!all_product || !cartItems || all_product.length === 0) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className='cart-container'>
//             <div className='cartitem'>
//                 <div className='cartitems-format-main'>
//                     <p>Products</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>
//                 </div>
//                 <hr />
//                 {all_product.map((e) => {
//                     if (cartItems[e.id] > 0) {
//                         return (
//                             <div key={e.id}>
//                                 <div className='cartitems-format'>
//                                     <img src={e.image} alt={e.name} className='carticon-product-icon' />
//                                     <p>{e.name}</p>
//                                     <p>${e.new_price}</p>
//                                     <button className='cartitems-quantity'>{cartItems[e.id]}</button>
//                                     <p>${e.new_price * cartItems[e.id]}</p>
//                                     <button onClick={() => addToWishlist(e)}>Add to Wishlist</button>
//                                     <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt='Remove' />
//                                 </div>
//                                 <hr />
//                             </div>
//                         );
//                     }
//                     return null;
//                 })}
//                 <div className='cartitems-down'>
//                     <div className='cartitems-total'>
//                         <h1>Cart Totals</h1>
//                         <div className='cartitems-total-item'>
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className='cartitems-total-item'>
//                             <p>Shipping Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className='cartitems-total-item'>
//                             <h3>Total</h3>
//                             <h3>${getTotalCartAmount()}</h3>
//                         </div>
//                         <button>PROCEED TO CHECKOUT</button>
//                     </div>
//                     <div className='cartitems-promocode'>
//                         <p>If you have a promo code, Enter it here</p>
//                         <div className='cartitems-promobox'>
//                             <input type='text' placeholder='Promo code' />
//                             <button>Submit</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CartItems;

// CartItems.js
import React, { useContext } from 'react';
import './CartItems.css';
import { UserContext } from '../../Context/UserContext';
import remove_icon from '../Assets1/cart_cross_icon.png';

function CartItems() {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(UserContext);

    console.log('all_product in CartItems:', all_product);
    console.log('cartItems in CartItems:', cartItems);

    if (!all_product || !cartItems || all_product.length === 0) {
        return <div>Loading...</div>;
    }

    const calculateSubtotal = () => {
        const subtotal = all_product.reduce((total, product) => {
            return total + (product.new_price * cartItems[product.id]);
        }, 0);
        console.log('Calculated Subtotal:', subtotal);
        return subtotal;
    };

    const subtotal = calculateSubtotal();

    const totalAmount = getTotalCartAmount();
    console.log('Total Amount from Context:', totalAmount);

    return (
        <div className='cart-container'>
            <div className='cartitem'>
                <div className='cartitems-format-main'>
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className='cartitems-format'>
                                    <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt='Remove' />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className='cartitems-down'>
                    <div className='cartitems-total'>
                        <h1>Cart Totals</h1>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${subtotal}</p> {/* Use the calculated subtotal */}
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${totalAmount}</h3> {/* Use the total amount from context */}
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className='cartitems-promocode'>
                        <p>If you have a promo code, Enter it here</p>
                        <div className='cartitems-promobox'>
                            <input type='text' placeholder='Promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
