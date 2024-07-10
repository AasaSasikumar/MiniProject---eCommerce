import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserContextProvider from './Context/UserContext';
import WishlistContextProvider from './Context/WishlistContext';

  // import WishlistProvider from './Context/WishlistContext';
// import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
      <WishlistContextProvider>
          {/* <WishlistProvider>    */}
        {/* <BrowserRouter> */}
       <App />
       {/* </BrowserRouter> */}
           {/* </WishlistProvider>    */}
           </WishlistContextProvider>
    </UserContextProvider>

   
          

    
  
);

