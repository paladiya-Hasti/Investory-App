import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../pagrs/Product'
import CartPage from '../pagrs/Cart'
import Contact from '../pagrs/Contract'
import { ProductProvider } from '../context/ProductContext'
import AdminPanel from '../pagrs/Admin'
import SignUpPage from '../pagrs/Signup'

const Router = () => {
  return (
    <div>
      <ProductProvider>
      <Routes>
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contract' element={<Contact/>}/>
        <Route path='/sign' element={<SignUpPage/>}/>
      </Routes>
      </ProductProvider>
    </div>
  )
}

export default Router