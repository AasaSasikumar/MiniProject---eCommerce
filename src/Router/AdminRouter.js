import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Adminlist from '../Pages/Admin/Adminlist'
import Adminlogin1 from '../Pages/Admin/Adminlogin1'

function AdminRouter() {
  return (
    <div>
        {/* <BrowserRouter> */}
        <Routes>
        <Route path='/user' element={<Adminlist/>}/>
        <Route path='/login' element={<Adminlogin1/>}/>
        </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default AdminRouter