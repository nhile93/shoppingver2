import React, { Component } from 'react';
import Login from './Login/login'
import Navigation from './Navigation/navigation'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

      <header className="tophny-header">
        <div className="container-fluid">
          <div className="top-right-strip row">
            <div className="top-hny-left-content col-lg-6 pl-lg-0">
              <h6>Upto 30% off on All styles , <a href="#" target="_blank"> Click here for <span
                className="fa fa-hand-o-right hand-icon" aria-hidden="true"></span> <span className="hignlaite">More
										details</span></a></h6>
            </div>

            <ul className="top-hnt-right-content col-lg-6">

              <li className="button-log usernhy">
                <a className="btn-open" href="#">
                  <span className="fa fa-user" aria-hidden="true"></span>
                </a>
              </li>
              <li className="transmitvcart galssescart2 cart cart box_1">
                <form action="#" method="post" className="last">
                  <input type="hidden" name="cmd" value="_cart" />
                  <input type="hidden" name="display" value="1" />
                  <button className="top_transmitv_cart" type="submit" name="submit" value="">
                    My Cart
										<span className="fa fa-shopping-cart"></span>
                  </button>
                </form>
              </li>
            </ul>

            <Login/>

          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid serarc-fluid">
            <a className="navbar-brand" href="index.html">
              Spry<span className="lohny">S</span>tore</a>

            {/* <a className="navbar-brand" href="#index.html">
                    <img src="image-path" alt="Your logo" title="Your logo" style={{"height":"35px"}} />
                  </a> */}

            <div className="search-right">

              <a href="#search" title="search"><span className="fa fa-search mr-2" aria-hidden="true"></span>
                <span className="search-text">Search here</span></a>

              <div id="search" className="pop-overlay">
                <div className="popup">

                  <form action="#" method="post" className="search-box">
                    <input type="search" placeholder="Keyword" name="search" required="required" autofocus="" />
                    <button type="submit" className="btn">Search</button>
                  </form>

                </div>
                <a className="close" href="#">×</a>
              </div>

            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon fa fa-bars"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Navigation/>
            </div>
          </div>
        </nav>

      </header>
    );
  }
}

export default Header;