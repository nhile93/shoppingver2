import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/homepage'
import Contact from './components/Contact/contact'
import Footer from './components/Common/Footer/footer'
import Blog from './components/Blog/blog'
import Categories from './components/Categories/categories'
import Product from './components/Product/product'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="Shopping-App">
      <Router>
        <Switch>
          <Route path='/' exact="true">
            <Homepage />
          </Route>

          <Route path='/home'>
            <Homepage />
          </Route>

          <Route path='/product'>
            <Product />
          </Route>

          <Route path='/categories'>
            <Categories />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
