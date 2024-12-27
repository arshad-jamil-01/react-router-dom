import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
