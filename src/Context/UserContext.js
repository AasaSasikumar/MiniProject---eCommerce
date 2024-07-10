import React, { useState, createContext } from "react";
import all_product from '../components/User/Assets/all_product';
import { toast } from 'react-toastify';


export const UserContext = createContext(null);
// const [loading, setLoading] = useState(true);



const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0; // Make sure the keys are product IDs, not indices
    }
    return cart;
}

const UserContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    


    const addToCart = (ItemId) => {
        setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
        toast.success('The product has been added to your Cart');

    }
    // if (addToCart === ItemId) {
    //     toast.success('The product has been added to your wishlist');
    //     setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));

    //   } else {
    //     toast.error('Failed to add the product to your wishlist');
    //   }
    // } catch (error) {
    //   console.error('Error adding product to wishlist:', error);
    //   toast.error('An error occurred. Please try again.');
    // }
  


    const removeFromCart = (ItemId) => {
        setCartItems((prev) => {
            const updatedItems = { ...prev };
            if (updatedItems[ItemId] > 0) {
                updatedItems[ItemId] -= 1;
            }
            return updatedItems;
        });
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    console.log('all_product:', all_product);
    console.log('cartItems:', cartItems);

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
