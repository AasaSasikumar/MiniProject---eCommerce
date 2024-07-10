import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import AdminHome from '../Pages/Admin/AdminHome'
import AdminAddproduct from '../Pages/Admin/AdminAddproduct'
import ProductList from '../components/Admin/ProductList/ProductList'
import AdminLogin from '../Pages/Admin/AdminLogin'
import AdminUserlist from '../Pages/Admin/AdminUserlist'
import AdminEditProduct from '../Pages/Admin/AdminEditProduct'


function AdminRouter() {
  return (
    <div>
        {/* <BrowserRouter> */}
        <Routes>
        <Route path='/' element={<AdminHome/>}/>
         <Route path='/add' element={<AdminAddproduct/>}/>
         <Route path='/Product' element={<ProductList/>}/>
      <Route path='/user' element={<AdminUserlist/>}/>
        <Route path='/login' element={<AdminLogin/>}/>
        <Route path='/edit/:id' element={<AdminEditProduct/>}/>
        </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default AdminRouter