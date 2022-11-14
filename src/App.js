import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Errors from './pages/Errors'
import Header from './components/Header'
import Footer from './components/Footer'
import useFetch from ".//utils/hooks/useFetch";

const App = () => {
  const {datas, isLoading} = useFetch("http://localhost:3000/logements.json")
  const loadedData = datas
  //console.log(loadedData)
 return (
   <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home data={loadedData} />} />
        <Route path="About" element={<About />} />
        <Route path="/product/:id" element={<Product data={loadedData} />} />
        <Route path="*" element={<Errors />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
