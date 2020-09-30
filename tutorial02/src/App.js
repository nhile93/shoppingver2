import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import PreFooter from './components/footer/pre-footer';
import Homepage from './components/homepage/homepage';
import Menu from './components/Menu/menu';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import AboutUs from './components/AboutUs/aboutus';
import News from './components/News/news';
import Dashboard from './components/Dashboard/dasboard';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

function App() {
  return (
     <div className="wrap_container">
        <Router>
          <div class="main">
            <Header />
            
            <Switch>

              <Route path='/' exact="true">
                <Homepage/>
              </Route>

              <Route path='/home'>
                <Homepage/>
              </Route>
              
              <Route path='/about-us'>
                <AboutUs title1="About Us" title2="Testimonials"/>
              </Route>

              <Route path='/menu'>
                <Menu titlepage="Our Menu"/>
              </Route>

              <Route path='/portfolio'>
                <Portfolio titlepage="Portfolio"/>
              </Route>

              <Route path='/news'>
                <News titlepage="Latest News" subtitle1="Categories" subtitle2="Archive"/>
              </Route>

              <Route path='/contact'>
                <Contact/>
              </Route>

              <Route path='/dasboard'>
                <Dashboard/>
              </Route>
            </Switch>
            
            <PreFooter />
          </div>
          <Footer />
        </Router>
    </div>
    
  );
}

export default App;
