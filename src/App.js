import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Errors from './pages/Errors'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import GlobalStyle from './utils/style/GlobalStyle'

/*TODO gérer les erreurs en cas de mauvaise demande id de produit*/

function App() {
  return (
  <React.StrictMode>
    <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:productId">
            <Product />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <Errors />
          </Route>
        </Switch>
        <Footer />
    </Router>
  </React.StrictMode>
  );
}

export default App;
