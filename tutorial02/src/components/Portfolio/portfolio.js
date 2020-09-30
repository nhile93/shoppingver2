import React, { Component } from 'react';
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgarg: ["page4_img1.jpg", "page4_img2.jpg", "page4_img3.jpg", "page4_img4.jpg"]
    }
  }

  render() { 
    return (
      <div className="content">
        <div className="container_12">
          <div className="grid_12">
            <h2>{this.props.titlepage}</h2>
          </div>
          <div className="clear"></div>
          <div className="portfolio">
            {this.state.imgarg.map( (i) =>
              <div className="grid_6"><img src={'images/'+i} alt="" /></div>
            )}
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
 
export default Portfolio;