 import React from 'react';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import UserHome from '../Pages/User/UserHome';
 import UserProduct from '../Pages/User/UserProduct';
 import LoginSignUp from '../Pages/User/LoginSignUp';
 import UserCart from '../Pages/User/UserCart';






 function UserRouter() {
   return (
     <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
         <Route path="/Login" element={<LoginSignUp />} />
         <Route path='Product' element={<UserProduct/>}/>
         <Route path="/LoginSignUp" element={<LoginSignUp/>} />
        <Route path='/Cart' element={<UserCart/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

 export default UserRouter;
