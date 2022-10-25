import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import GlobalStyle from './utils/style/GlobalStyle'

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
          <Route path="/about">
              <About />
          </Route>
        </Switch>
        <Footer />
    </Router>
  </React.StrictMode>
  );
}

export default App;
