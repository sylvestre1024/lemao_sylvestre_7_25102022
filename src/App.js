import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Errors from './pages/Errors'
import Footer from './components/Footer'
import data from './api/logements.json'

/*TODO gérer les erreurs en cas de mauvaise demande id de produit*/

const App = () => {
  // console.log(data);
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/product/:id" element={<Product data={data} />} />
        <Route path="*" element={<Errors />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
