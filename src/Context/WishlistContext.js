import React, { useState, createContext } from "react";
import all_product from '../components/User/Assets/all_product';
import { toast } from 'react-toastify';

export const WishlistContext = createContext(null);

const getDefaultWishlist = () => {
    let wishlist = {};
    for (let index = 0; index < all_product.length; index++) {
        wishlist[all_product[index].id] = false; // Initialize wishlist with product IDs as keys and false as value
    }
    return wishlist;
}

const WishlistContextProvider = (props) => {
    const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => ({ ...prev, [itemId]: true }));
        toast.success('The product has been added to your Wishlist');
    }

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => ({ ...prev, [itemId]: false }));
        toast.success('The product has been removed from your Wishlist');
    }

    const contextValue = {
        all_product,
        wishlistItems,
        addToWishlist,
        removeFromWishlist
    };

    return (
        <WishlistContext.Provider value={contextValue}>
            {props.children}
        </WishlistContext.Provider>
    );
}

export default WishlistContextProvider;
