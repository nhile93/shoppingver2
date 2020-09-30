import React, { Component } from 'react';
class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_data: [
        {name: "Donec", img : "page3_img1.jpg"},
        {name: "Murtyio", img : "page3_img2.jpg"},
        {name: "Holity as Polfh", img : "page3_img3.jpg"},
        {name: "Kiperty", img : "page3_img4.jpg"},
        {name: "Gyloit", img : "page3_img5.jpg"},
        {name: "Liotymer", img : "page3_img6.jpg"},
      ]
    }
  }
  render() {
    return (
      <div className="menu">
        {this.state.item_data.map((m)=>
          <div className="grid_3 alpha"> <img src={'images/'+m.img} alt="" className="img_inner" />
            <h3><a href="#">{m.name}</a></h3>
          </div>
        )}
        
      </div>

    );
  }
}

export default LeftContent;