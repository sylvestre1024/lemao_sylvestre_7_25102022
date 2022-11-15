import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Errors from './pages/Errors'
import Header from './components/Header'
import Footer from './components/Footer'
import useFetch from ".//utils/hooks/useFetch";
/*
Définition : Les Hooks sont une nouveauté de React 16.8. 
Ils permettent de bénéficier d'un état local et d'autres fonctionnalités de React sans avoir à écrire de classes. 
Un hook custom nous permet de composer des fonctionnalités complexes en React, en les encapsulant dans des fonctions
Source : https://oclock.io
*/

const App = () => {
  const { datas } = useFetch("http://localhost:3000/logements.json")
  const loadedData = datas
  //console.log(loadedData)
  return (
    <Router>
      <Header />
      {/*Using Routes instead of Switch in react-router v6. You are using react-router-dom version 6, 
      which replaced Switch with the Routes component*/}
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
