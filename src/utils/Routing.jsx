import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import { Route, Routes } from 'react-router-dom'
import Products from '../components/Products'
import Services from '../components/Services'
import ProductDetail from '../components/ProductDetail'
import Checkout from '../components/Checkout'
import Login from '../components/Login'
import Cart from '../components/Cart'

function Routing() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/products" element={<Products />} /> 
    <Route path="/productdetail/:id" element={<ProductDetail />} />
    <Route path="/signup" element={<Login/>} />
    <Route path="/checkout/:id" element={<Checkout />} />
    <Route path="/cart" element={<Cart />} />

    <Route path="/services" element={<Services />} />
  </Routes>
  )
}

export default Routing