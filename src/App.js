import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Errors from './pages/Errors'
import Footer from './components/Footer'

/*TODO gérer les erreurs en cas de mauvaise demande id de produit*/

const App = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="*" element={<Errors />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
