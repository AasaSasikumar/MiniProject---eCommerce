import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from '../Pages/User/UserHome';

//  import UserProduct from './Pages/User/UserProduct';

import UserCart from '../Pages/User/UserCart';
import Usersignup from '../Pages/User/Usersignup';
import UserLogin from '../Pages/User/UserLogin';
import UserWishlist from '../Pages/User/UserWishlist';
import UserKids from '../Pages/User/UserKids';
  // import UserWishlist from '../Pages/User/UserWishlist';



function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserHome />} />
         {/* <Route path="/Product" element={<UserProduct />} />  */}
        <Route path="/Cart" element={<UserCart />} />
        <Route path='/signup' element={<Usersignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>
          <Route path='/wishlist' element={<UserWishlist/>}/> 
         {/* <Route path="/:productId" element={<UserProduct />} /> */}
         {/* <Route path='/:productId' element={<UserProduct/>}/> */}
        <Route path='/kids' element={<UserKids/>}/>
      </Routes>
      {/* Consider adding a Footer component here */}
      
    </div>
  );
}

export default UserRouter;
