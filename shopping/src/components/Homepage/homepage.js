import React, { Component } from 'react';

import Slider from './slider'
import Categorories from './categories'
import Photos from './photos'
import Videos from './videos'
import Products from './products'
import Banner from './banner'
import Blog from './blog'
import CustomerReview from './customerreview'
import Subscription from './subscription'
import Footer from '../Common/Footer/footer'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div id="homepage">
        <Slider/>
        <Categorories/>
        <Photos/>
        <Videos/>
        <Products/>
        <Banner/>
        <Blog/>
        <CustomerReview/>
        <Subscription/>
        <Footer/>
      </div>
    );
  }
}
 
export default Homepage;