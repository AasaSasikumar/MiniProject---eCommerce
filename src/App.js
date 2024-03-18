import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import './App.css'
 import UserRouter from './Router/UserRouter';
  import AdminRouter from './Router/AdminRouter';
 import UserHome from './Pages/User/UserHome';
 import LoginSignUp from './Pages/User/LoginSignUp';
import UserCategory from './Pages/User/UserCategory';
import UserProduct from './Pages/User/UserProduct';
// import Header from './components/User/Header/Header';
import UserCart from './Pages/User/UserCart';
 import Footer from './components/Footer/Footer';
import men_banner from './components/Assets1/banner_mens.png'
import women_banner from './components/Assets1/banner_women.png'
import kids_banner from './components/Assets1/banner_kids.png'





 function App() {
  
  return (
    <div>
   <BrowserRouter>
    
   <Routes>
      <Route path='/*' element={<UserRouter/>}/>  
      <Route path='/admin/*' element={<AdminRouter/>}/>  
      <Route path="/" element={<UserHome/>}/>
      <Route path='/Login'element={<LoginSignUp/>}/>
       <Route path='/mens' element={<UserCategory banner ={men_banner} category="mens"/>}/>
      <Route path='/women' element={<UserCategory banner = {women_banner} category="women"/>}/>
      <Route path='/kids' element={<UserCategory banner = {kids_banner} category="kids"/>}/>
      <Route path='Product' element={<UserProduct/>}/>
      <Route path='/:productId' element={<UserProduct/>}/>
      <Route path='/cart' element={<UserCart/>}/>
      
     </Routes>
      <Footer/> 
     </BrowserRouter>
    </div>
  );
 }

 export default App;