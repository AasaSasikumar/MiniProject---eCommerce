// import {userInstance} from "../axios/axiosinstance"

// export const signup = (value) =>{
//     return userInstance.post('/signup',{...value})
// }

// export const login = (value) =>{
//     return userInstance.post('/login',{...value})

// }

// // export const userStatus = () => {
// //   return userInstance.get("/auth/status").then((response) => response.data).catch((error) => {
// //     console.log("Error fetching user status : ", error);
// //     return { user : null};
// //   });
// // };

// //  export const addToCart = (productId, quantity) => {
// //     return userInstance.post("/cart/add", { productId, quantity });
// //   };
  
// //   export const getProductDetails = (productId) => {
// //     return userInstance.get(`/shop/${productId}`);
// //   };
  

// //   //Wishlist


// // export const AddToWishlist = (productId) => {
// //   return userInstance.post("/wishlist", { productId });
// // };


// // export const checkProductInWishlist = (productId) => {
// //   return userInstance.get(`/wishlist/check/${productId}`);
// // }


// // export const getWishlist = () => {
// //   return userInstance.get("/wishlist");
// // };



// //  export const removeFromWishlist = (productId) => {
// //   return userInstance.delete(`/wishlist/remove/${productId}`);
// // };



// export const userStatus = () => {
//   return userInstance.get("/auth/status").then((response) => response.data).catch((error) => {
//     console.log("Error fetching user status : ", error);
//     return { user : null};
//   });
// };
 

// export const shopProduct = async () => {
//     try {
//       const response = await userInstance.get('http://localhost:5000/shop'); 
//       return response.data.shopProduct; 
//     } catch (error) {
//       console.error('Error fetching shop products:', error.response || error.message || error);
//       throw error;
//     }
//   };
//   export const childProduct = async () => {
//     try {
//       const response = await userInstance.get('http://localhost:8000/child'); 
//       console.log('Full API response data:', response.data);
//       return response.data.shopProduct; 
//     } catch (error) {
//       console.error('Error fetching shop products:', error.response || error.message || error);
//       throw error;
//     }
//   };
  

 
// export const adultProduct = async () => {
//   try {
//     const response = await userInstance.get('http://localhost:8000/adult'); 
//     console.log('Full API response data:', response.data);
//     return response.data.shopProduct; 
//   } catch (error) {
//     console.error('Error fetching shop products:', error.response || error.message || error);
//     throw error;
//   }
// };


// export const getProductDetails = (productId) => {
//   return userInstance.get(`/shop/${productId}`);
// };


// //ADD Cart


// export const addToCart = (productId, quantity) => {
//   return userInstance.post("/cart/add", { productId, quantity });
// };


// export const getCart = () => {
//   return userInstance.get("/cart");
// }


// // Remove from cart
// export const removeFromCart = (productId) => {
//   return userInstance.delete("/cart/remove", {
//     data: { productId }
//   });
// };

// // Edit cart
// export const editCart = (productId, quantity) => {
//   return userInstance.put("/cart/edit", { productId, quantity });
// };


// //Wishlist


// export const AddToWishlist = (productId) => {
//   return userInstance.post("/wishlist", { productId });
// };


// export const checkProductInWishlist = (productId) => {
//   return userInstance.get(`/wishlist/check/${productId}`);
// }


// export const getWishlist = () => {
//   return userInstance.get("/wishlist");
// };



// export const removeFromWishlist = (productId) => {
//   return userInstance.delete(`/wishlist/remove/${productId}`);
// };






import { userInstance } from "../axios/axiosinstance";

//POST METHOD

export const signup = (value) =>{
    return userInstance.post('/signup',{...value});
};

export const login = (value) =>{
    return userInstance.post('/login',{...value});
};

// export const postReview = (reviewData) => {
//   return userInstance.post("/reviews/create", { ...reviewData });
// };


//GET METHOD

export const fetchDataFromApi = async () => {
  try {
    const response = await userInstance.get('http://localhost:5000/shop'); 
    return response.data.fetchDataFromApi; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};

// export const fetchDataFromApi = async (endpoint) => {
  //   try {
  //     const response = await userInstance.get(`${API_BASE_URL}${endpoint}`);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     throw error;
  //   }
  // };


export const mens = async () => {
  try {
    const response = await userInstance.get('http://localhost:5000/mens'); 
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};


export const womens = async () => {
  try {
    const response = await userInstance.get('http://localhost:5000/womens'); 
    console.log('Full API response data:', response.data);
    return response.data.shopProduct; 
  } catch (error) {
    console.error('Error fetching shop products:', error.response || error.message || error);
    throw error;
  }
};



export const kids = async () => {
try {
  const response = await userInstance.get('http://localhost:5000/kids'); 
  console.log('Full API response data:', response.data);
  return response.data.shopProduct; 
} catch (error) {
  console.error('Error fetching shop products:', error.response || error.message || error);
  throw error;
}
};





// export const Createuserreview = async (productId, productData) => {
//   try {
//     console.log('FormData:', productData);
//     const response = await userInstance.post(`http://localhost:8000/createreview/${productId}`, { ...productData, productId });
//     console.log('Response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating post:', error);
//     console.error('Error Details:', error.response ? error.response.data : error);
//     throw error;
//   }
// };


// export const getUserReviewList = async (productId) => {
//   try {
//     const response = await userInstance.get(`http://localhost:8000/reviewlist/${productId}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching user reviews:', error);
//     throw error;
//   }

// };




export const getProductDetails = (productId) => {
return userInstance.get(`/shop/${productId}`);
};


// export const getReviews = (productId) => {
//   return userInstance.get(`/reviews/${productId}`);
// };

//ADD Cart


export const addToCart = (productId, quantity) => {
  return userInstance.post("/cart/add", { productId, quantity });
};


export const getCart = () => {
  return userInstance.get("/cart");
}


// Remove from cart
export const removeFromCart = (productId) => {
  return userInstance.delete("/cart/remove", {
    data: { productId }
  });
};

// Edit cart
export const editCart = (productId, quantity) => {
  return userInstance.put("/cart/edit", { productId, quantity });
};





//Wishlist


// export const addToMyList = (productId) => {
//   return userInstance.post("/my-list/add", { productId });
// };


// export const getMyListItemById = (productId) => {
//   return userInstance.get(`/my-list/:id/',${productId}`);
// }


// export const getMyList = () => {
//   return userInstance.get("/my-list");
// };



// export const deleteFromMyList = (productId) => {
//   return userInstance.delete(`/my-list/:id/${productId}`);
// };


export const getWishlist = async () => {
  const response = await userInstance.get('/api/my-list');
  return response.data;
};

// Add to My List
export const addToMyList = async (data) => {
  const response = await userInstance.post('/api/my-list/add', data);
  return response.data;
};

// Remove from My List
export const removeFromWishlist = async (id) => {
  const response = await userInstance.delete(`/api/my-list/${id}`);
  return response.data;
};

// Delete Data Utility
export const deleteData = async (endpoint) => {
  try {
    const response = await userInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

// Set up the base URL for your API
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// // Function to fetch the wishlist
// export const getWishlist = async (userId) => {
//   try {
//     const response = await userInstance.get(`${API_BASE_URL}/my-list`, {
//       params: { userId },
//     });
//     return response;
//   } catch (error) {
//     console.error('Error fetching wishlist:', error);
//     throw error;
//   }
// };

// // Function to add a product to the cart
// // export const addToCart = async (productId, userId) => {
// //   try {
// //     const response = await axios.post(`${API_BASE_URL}/cart/add`, { productId, userId });
// //     return response;
// //   } catch (error) {
// //     console.error('Error adding product to cart:', error);
// //     throw error;
// //   }
// // };

// // Function to remove an item from the wishlist
// export const removeFromWishlist = async (itemId) => {
//   try {
//     const response = await userInstance.delete(`${API_BASE_URL}/mylist/${itemId}`);
//     return response;
//   } catch (error) {
//     console.error('Error removing item from wishlist:', error);
//     throw error;
//   }
// };

// // Function to fetch data from an API endpoint
// export const fetchDataFromApi = async (endpoint) => {
//   try {
//     const response = await userInstance.get(`${API_BASE_URL}${endpoint}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// // Function to delete data from an API endpoint
// export const deleteData = async (endpoint) => {
//   try {
//     const response = await userInstance.delete(`${API_BASE_URL}${endpoint}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error deleting data:', error);
//     throw error;
//   }
// };

