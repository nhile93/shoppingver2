import React, { Component } from 'react';
import Slider from './slider/slider';
import Welcome from './welcome/welcome';
import BestChoice from './bestchoise/bestchoice';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_data:[
        {name: "Food 1", discription: "Dorem ipsum dolor amet consectetur", price: "45$", img : "page1_img1.jpg"},
        {name: "Food 2", discription: "Dorem ipsum dolor amet consectetur", price: "45$", img : "page1_img2.jpg"},
        {name: "Food 3", discription: "Dorem ipsum dolor amet consectetur", price: "45$", img : "page1_img3.jpg"},
        {name: "Food 4", discription: "Dorem ipsum dolor amet consectetur", price: "45$", img : "page1_img4.jpg"}
      ]
    }
  }
  render() {
    return (

      <div className="homepage">
        <Slider />
        <div class="content page1">
          <div className="container_12">
            <Welcome title1="Welcome" title2="Featured" />
             <div className="grid_12">
              <div className="hor_separator"></div>
            </div>
            <BestChoice title="Best Choice" />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;