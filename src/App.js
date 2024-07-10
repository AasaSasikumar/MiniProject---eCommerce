import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import './App.css'
 import UserRouter from './Router/UserRouter';
  import AdminRouter from './Router/AdminRouter';
 import UserHome from './Pages/User/UserHome';
// import Loginsignup from './Pages/User/Loginsignup/Loginsignup';
import UserCategory from './Pages/User/UserCategory';
import UserProduct from './Pages/User/UserProduct';
import UserCart from './Pages/User/UserCart';
 import Footer from './components/Footer/Footer';
import men_banner from './components/Assets1/banner_mens.png'
import women_banner from './components/Assets1/banner_women.png'
import kids_banner from './components/Assets1/banner_kids.png' 
import AdminHome from './Pages/Admin/AdminHome';
import AdminAddproduct from './Pages/Admin/AdminAddproduct';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import ProductList from './components/Admin/ProductList/ProductList';
import UserWishlist from './Pages/User/UserWishlist';


//  import Userlist from './Pages/Admin/Userlist';
   


 function App() {
  
  return (
    <div>
      
   <BrowserRouter>
    
   <Routes>
      <Route path='/*' element={<UserRouter/>}/>  
      <Route path='/admin/*' element={<AdminRouter/>}/>  
      <Route path="/" element={<UserHome/>}/>
       <Route path='/' element={<AdminHome/>}/>
       <Route path='/add' element={<AdminAddproduct/>}/>
       <Route path='/Product' element={<ProductList/>}/>
       <Route path='/mens' element={<UserCategory banner ={men_banner} category="men"/>}/>
      <Route path='/women' element={<UserCategory banner = {women_banner} category="women"/>}/>
      <Route path='/kids' element={<UserCategory banner = {kids_banner} category="kid"/>}/>
      <Route path='/product' element={<UserProduct/>}>
      <Route path=':productId' element={<UserProduct/>}/> 
      
       {/* <Route path='/user' element={<Userlist/>}/>  */}
       

      </Route>
    
      <Route path='/cart' element={<UserCart/>}/>

      {/* { <Route path='/login' element={<Loginsignup/>}/> } */}
      
     </Routes>
     
     
      <Footer/> 
      <ToastContainer/>
    
     </BrowserRouter>
    </div>
  );
 }

 export default App;