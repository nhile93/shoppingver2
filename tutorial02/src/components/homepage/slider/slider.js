import React, { Component } from 'react';
class HomepageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="slider-relative">
        <div className="slider-block">
          <div className="slider">
            <ul className="items">
              <li><img src="images/slide.jpg" alt="" /></li>
              <li><img src="images/slide1.jpg" alt="" /></li>
              <li className="mb0"><img src="images/slide2.jpg" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default HomepageSlider;