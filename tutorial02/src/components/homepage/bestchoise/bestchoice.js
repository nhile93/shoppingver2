import React, { Component } from 'react';

class Bestchoice extends Component {
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
      <div className="grid_12">
          <div className="car_wrap">
          <h2>{this.props.title}</h2>
          <a href="#" className="prev"></a><a href="#" className="next"></a>
          <ul className="carousel1">
            {this.state.item_data.map((f) =>
              <li>
                <div><img src={'images/'+f.img} alt="" />
                  <div className="col1 upp"> <a href="#">{f.name}</a></div>
                  <div>{f.discription}</div>
                  <div className="price">{f.price}</div>
                </div>
              </li>
            )}
            
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Bestchoice;