// import React, { useContext } from 'react'
// import './ProductDisplay1.css'
// import star_icon from "../Assets1/star_icon.png"
// import star_dull_icon from "../Assets1/star_dull_icon.png"
// import { UserContext } from '../../Context/UserContext';




// function ProductDisplay1(props) {
//   const{product}=props;
//   const{addToCart} = useContext(UserContext);

  
//   return (
//     <div className='productdisplay'>
//       <div className='Productdisplay-left'>
//         <div className='Productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//              <img className='productdisplay-main-img'src={product.image} alt='' />
//         </div>

//       </div>
//       <div className='Productdisplay-right'>
//         <h1>{product.name}</h1>
//         <div className='productdisplay-right-star'>
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_dull_icon} alt='' />
//           <p>(122)</p>
//          </div>
//          <div className='productdisplay-right-prices'>
//           <div className='productdisplay-right-price-old'>${product.old_price}</div>
//           <div className='productdisplay-right-price-new'>${product.new_price}</div>
//          </div>
//          <div className='productdisplay-right-description'>
//           A lightweight ,usually knitted,pullover shirt,close-fitting and with
//           a round neckline and short sleeves,worn as an undershirt or outershirt garment.
//          </div>
//         <div className='productdislay-right-size'>
//           <h1>select size</h1>
//           <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>


//           </div>
//           </div>
//           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          

//           <p className='productdisplay-right-category'><span>Category:</span>Women,Tshirt,Crop Top</p>
//           <p className='productdisplay-right-category'><span>Tags:</span>Mordern,Latest</p>

//       </div>

//     </div>
//   )
// }

// export default ProductDisplay1


// import React, { useContext,useEffect,useState } from 'react';
// import './ProductDisplay1.css';
// import star_icon from "../Assets1/star_icon.png";
// import star_dull_icon from "../Assets1/star_dull_icon.png";
// import { UserContext } from '../../Context/UserContext';
// import { toast } from 'react-toastify';
// import { AddToWishlist, checkProductInWishlist } from '../../Services/Userapi';
// import { useNavigate } from 'react-router-dom';

// // import { WishlistContext } from '../../Context/WishlistContext';

// function ProductDisplay1(props) {
//   const { product } = props;
//   const navigate = useNavigate();
//   const { addToCart } = useContext(UserContext);
//   const [inWishlist, setInWishlist] = useState(false);

//   useEffect(() => {
//     const checkWishlistStatus = async () => {
//       try {
//         const response = await checkProductInWishlist(product._id);
//         if (response.status === 200) {
//           setInWishlist(response.data.inWishlist);
//         }
//       } catch (error) {
//         console.error('Error checking wishlist status', error);
//       }
//     };
//     checkWishlistStatus();
//   }, [product._id]);

//   const handleImageClick = () => {
//     navigate(`/shop/${product._id}`);
//   };

//   const handleAddToCart = async () => {
//     try {
//       const response = await addToCart(product._id);
//       if (response.status === 200) {
//         toast.success('Product added to cart');
//       } else {
//         toast.error('Failed to add product to cart');
//       }
//     } catch (error) {
//       console.error('Error adding product to cart', error);
//       toast.error('An error occurred. Please try again.');
//     }
//   };

//   const handleAddToWishlist = async () => {
//     try {
//       const productId = product._id;
//       const response = await AddToWishlist(productId);

//       if (response.status === 200) {
//         toast.success('Product added to wishlist');
//         setInWishlist(true);
//       } else if (response.status === 201) {
//         toast.success('Product removed from wishlist');
//         setInWishlist(false);
//       }
//     } catch (error) {
//       console.error('Error adding/removing product to wishlist', error);
//       toast.error('An error occurred. Please try again.');
//     }
//   };

  
//   //  const { addToWishlist,removeFromWishlist,isInWishlist} = useContext(WishlistContext);

//   // const handleAddToWishlist = () => {
//   //    addToWishlist(product);
//   //  };

//   //  const handleRemoveFromWishlist = () => {
//   //    removeFromWishlist(product.id);
//   //   };

//   // const inWishlist = isInWishlist(product.id);

//   return (
//     <div className='productdisplay'>
//       <div className='Productdisplay-left'>
//         <div className='Productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>
//       <div className='Productdisplay-right'>
//         <h1>{product.name}</h1>
//         <div className='productdisplay-right-star'>
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_dull_icon} alt='' />
//           <p>(122)</p>
//         </div>
//         <div className='productdisplay-right-prices'>
//           <div className='productdisplay-right-price-old'>${product.old_price}</div>
//           <div className='productdisplay-right-price-new'>${product.new_price}</div>
//         </div>
//         <div className='productdisplay-right-description'>
//           A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outershirt garment.
//         </div>
//         <div className='productdislay-right-size'>
//           <h1>Select size</h1>
//           <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <div className='productdisplay-right-buttons'>
//           <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
//           {/* <button onClick={() => AddToWishlist(product.id)}>ADD TO Wishlist</button> */}
//           {inWishlist ? (
//     <button onClick={handleAddToWishlist}>REMOVE FROM WISHLIST</button>
//   ) : (
//     <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
//   )}
         
  
//            {/* {inWishlist ?  
//            (
//             <button onClick={handleRemoveFromWishlist}>REMOVE FROM WISHLIST</button>
//          ) : 
//           ( 
//             <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
//           ) }  */}
//         </div>
//         <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt, Crop Top</p>
//         <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDisplay1;



// import React, { useContext } from 'react';
// import './ProductDisplay1.css';
// import star_icon from "../Assets1/star_icon.png";
// import star_dull_icon from "../Assets1/star_dull_icon.png";
// import { UserContext } from '../../Context/UserContext';
// import { useWishlist } from '../../Context/WishlistContext'; // Correct import

// function ProductDisplay1(props) {
//   const { product } = props;
//   const { addToCart } = useContext(UserContext);
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   const handleAddToWishlist = () => {
//     addToWishlist(product);
//   };

//   const handleRemoveFromWishlist = () => {
//     removeFromWishlist(product._id);
//   };

//   const inWishlist = isInWishlist(product._id);

//   return (
//     <div className='productdisplay'>
//       <div className='Productdisplay-left'>
//         <div className='Productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>
//       <div className='Productdisplay-right'>
//         <h1>{product.name}</h1>
//         <div className='productdisplay-right-star'>
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_dull_icon} alt='' />
//           <p>(122)</p>
//         </div>
//         <div className='productdisplay-right-prices'>
//           <div className='productdisplay-right-price-old'>${product.old_price}</div>
//           <div className='productdisplay-right-price-new'>${product.new_price}</div>
//         </div>
//         <div className='productdisplay-right-description'>
//           A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outershirt garment.
//         </div>
//         <div className='productdislay-right-size'>
//           <h1>Select size</h1>
//           <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <div className='productdisplay-right-buttons'>
//           <button onClick={() => addToCart(product._id)}>ADD TO CART</button>
//           {inWishlist ? (
//             <button onClick={handleRemoveFromWishlist}>REMOVE FROM WISHLIST</button>
//           ) : (
//             <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
//           )}
//         </div>
//         <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt, Crop Top</p>
//         <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDisplay1;



// import React, { useContext, useEffect, useState } from 'react';
// import './ProductDisplay1.css';
// import star_icon from "../Assets1/star_icon.png";
// import star_dull_icon from "../Assets1/star_dull_icon.png";
// import { UserContext } from '../../Context/UserContext';
// import Wishlist from '../User/Wishlist/Wshlist';
// import { fetchDataFromApi } from '../../Services/Userapi'; 
// import { toast } from 'react-toastify';
// // import { AddToWishlist, checkProductInWishlist } from '../../Services/Userapi';
// // import { useNavigate } from 'react-router-dom';

// function ProductDisplay1(props) {
//   const { product } = props;
//   // const navigate = useNavigate();
//   const { addToCart } = useContext(UserContext);
  


//   const addToMyList = (id)=>{
//     const user = JSON.parse(localStorage.getItem("user"));
//     const data={
//       productId:id,
//       userId:user?.userId
//     }
//     fetchDataFromApi('/api/my-list/add/',data).then((res)=>{
//       toast.success({
//         open:true,
//         error:false,
//         msg:"the product added in my list"
//       })

//     })
//   }
//   // const [inWishlist, setInWishlist] = useState(false);

//   // useEffect(() => {
//   //   const checkWishlistStatus = async () => {
//   //     try {
//   //       const response = await checkProductInWishlist(product._id);
//   //       if (response.status === 200) {
//   //         setInWishlist(response.data.inWishlist);
//   //       }
//   //     } catch (error) {
//   //       console.error('Error checking wishlist status', error);
//   //     }
//   //   };
//   //   checkWishlistStatus();
//   // }, [product._id]);

//   // const handleImageClick = () => {
//   //   navigate(`/shop/${product._id}`);
//   // };

//   // const handleAddToCart = async () => {
//   //   try {
//   //     const response = await addToCart(product.id);
//   //     if (response.status === 200) {
//   //       toast.success('Product added to cart');
//   //     } else {
//   //       toast.error('Failed to add product to cart');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding product to cart', error);
//   //     toast.error('An error occurred. Please try again.');
//   //   }
//   // };

//   // const handleAddToWishlist = async () => {
//   //   try {
//   //     const productId = product._id;
//   //     const response = await AddToWishlist(productId);

//   //     if (response.status === 200) {
//   //       toast.success('Product added to wishlist');
//   //       setInWishlist(true);
//   //     } else if (response.status === 201) {
//   //       toast.success('Product removed from wishlist');
//   //       setInWishlist(false);
//   //     } else {
//   //       toast.error('Unexpected response from server');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding/removing product to wishlist', error);
//   //     toast.error('An error occurred. Please try again.');
//   //   }
//   // };

//   return (
//     <div className='productdisplay'>
//       <div className='Productdisplay-left'>
//         <div className='Productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>
//       <div className='Productdisplay-right'>
//         <h1>{product.prod_name}</h1>
//         <div className='productdisplay-right-star'>
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_dull_icon} alt='' />
//           <p>(122)</p>
//         </div>
//         <div className='productdisplay-right-prices'>
//           <div className='productdisplay-right-price-old'>${product.old_price}</div>
//           <div className='productdisplay-right-price-new'>${product.new_price}</div>
//         </div>
//         <div className='productdisplay-right-description'>
//           A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outershirt garment.
//         </div>
//         <div className='productdislay-right-size'>
//           <h1>Select size</h1>
//           <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <div className='productdisplay-right-buttons'>
//          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>          <button onClick={() => addToCart(product.id)}>ADD TO CART</button> 
//          <button onClick={() => addToMyList(product.id)}>ADD TO List</button> 


//          {/* <button onClick={handleAddToCart}>ADD TO CART</button> */}

//           {/* {inWishlist ? (
//             <button onClick={handleAddToWishlist}>REMOVE FROM WISHLIST</button>
//           ) : (
//             <button onClick={handleAddToWishlist}>ADD TO WISHLIST</button>
//           )} */}
//         </div>
//         <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt, Crop Top</p>
//         <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDisplay1;





// import React, { useContext } from 'react';
// import './ProductDisplay1.css';
// import star_icon from "../Assets1/star_icon.png";
// import star_dull_icon from "../Assets1/star_dull_icon.png";
// import { UserContext } from '../../Context/UserContext';
// import {WishlistContext} from '../../Context/WishlistContext'
// // import { useState } from 'react';
// // import { postData } from '../../Services/Userapi'; // Import postData function
// import { toast } from 'react-toastify';

// function ProductDisplay1(props) {
//   const { product } = props;
//   const { addToCart } = useContext(UserContext);
//   const {addToWishlist}= useContext(WishlistContext)
//   // const [myListData, setMyListData] = useState([]);


//   // const addToMyList = async (id) => {
//   //   try {
//   //     const user = JSON.parse(localStorage.getItem("user"));
//   //     const data = {
//   //       productId: id,
//   //       userId: user?.userId,
//   //     };
//   //     const response = await postData('/api/my-list/add', data);

//   //     if (response.status === 201) {
//   //       toast.success('The product has been added to your list');
//   //     } else {
//   //       toast.error('Failed to add the product to your list');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding product to list:', error);
//   //     toast.error('An error occurred. Please try again.');
//   //   }
//   // };

//   // const addToMyList = async (id) => {
//   //   try {
//   //     const user = JSON.parse(localStorage.getItem("user"));
//   //     const data = {
//   //       productId: props.id,
//   //       userId: props.id,
//   //       image:props.image
//   //     };
//   //     const response = await fetch('/api/my-list/add', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         // Add any additional headers if needed
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (response.status === 201) {
//   //       toast.success('The product has been added to your list');
//   //     } else {
//   //       toast.error('Failed to add the product to your list');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding product to list:', error);
//   //     toast.error('An error occurred. Please try again.');
//   //   }
//   // };
//   // const addToMyList = async (itemId, image) => {
//   //   try {
//   //     const user = JSON.parse(localStorage.getItem("user"));
//   //     const data = {
//   //       productId: itemId,
//   //       userId: user?.userId,
//   //       image: image // Assuming you pass image URL to addToWishlist function
//   //     };
//   //     const response = await fetch('/api/my-list/add', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         // Add any additional headers if needed
//   //       },
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (response.status === 201) {
//   //       toast.success('The product has been added to your wishlist');
//   //       setMyListData((prev) => ({ ...prev, [itemId]: true }));
//   //     } else {
//   //       toast.error('Failed to add the product to your wishlist');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding product to wishlist:', error);
//   //     toast.error('An error occurred. Please try again.');
//   //   }
//   // };

//    return (
//     <div className='productdisplay'>
//       <div className='Productdisplay-left'>
//         <div className='Productdisplay-img-list'>
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//           <img src={product.image} alt='' />
//         </div>
//         <div className='productdisplay-img'>
//           <img className='productdisplay-main-img' src={product.image} alt='' />
//         </div>
//       </div>
//       <div className='Productdisplay-right'>
//         <h1>{product.prod_name}</h1>
//         <div className='productdisplay-right-star'>
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_icon} alt='' />
//           <img src={star_dull_icon} alt='' />
//           <p>(122)</p>
//         </div>
//         <div className='productdisplay-right-prices'>
//           <div className='productdisplay-right-price-old'>${product.old_price}</div>
//           <div className='productdisplay-right-price-new'>${product.new_price}</div>
//         </div>
//         <div className='productdisplay-right-description'>
//           A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outershirt garment.
//         </div>
//         <div className='productdislay-right-size'>
//           <h1>Select size</h1>
//           <div className='productdisplay-right-size'>
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <div className='productdisplay-right-buttons'>
//           <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
//           <button onClick={() => addToWishlist(product.id)}>ADD TO LIST</button>
//         </div>
//         <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt, Crop Top</p>
//         <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// }

// export default ProductDisplay1;



import React, { useContext } from 'react';
import './ProductDisplay1.css';
import star_icon from "../Assets1/star_icon.png";
import star_dull_icon from "../Assets1/star_dull_icon.png";
import { UserContext } from '../../Context/UserContext';
import { WishlistContext } from '../../Context/WishlistContext';
import { toast } from 'react-toastify';

function ProductDisplay1(props) {
  const { product } = props;
  const { addToCart } = useContext(UserContext);
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist from WishlistContext

  const handleAddToWishlist = (itemId) => {
    addToWishlist(itemId); // Call addToWishlist when button is clicked
    toast.success('Added to wishlist'); // Optional: Toast notification for feedback
  };

  return (
    <div className='productdisplay'>
      <div className='Productdisplay-left'>
        <div className='Productdisplay-img-list'>
          {/* Render multiple images if needed */}
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='Productdisplay-right'>
        <h1>{product.prod_name}</h1>
        <div className='productdisplay-right-star'>
          {/* Star rating icons */}
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          {/* Product description */}
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outershirt garment.
        </div>
        <div className='productdislay-right-size'>
          <h1>Select size</h1>
          <div className='productdisplay-right-size'>
            {/* Size options */}
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className='productdisplay-right-buttons'>
          {/* Buttons to add to cart and wishlist */}
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          <button onClick={() => handleAddToWishlist(product.id)}>ADD TO WISHLIST</button>
        </div>
        <p className='productdisplay-right-category'><span>Category:</span> Women, Tshirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay1;
