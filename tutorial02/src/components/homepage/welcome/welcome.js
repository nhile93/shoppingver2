import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // title1: "Xin chao",
      // title2: "Featured"
      featured_data: [
        "feetured1",
        "feetured2",
        "feetured3",
        "feetured4"
      ]
    }
  }
  render() { 
    return ( 
      <div className="welcome">
        <div className="grid_7">
          <h2>{this.props.title1}</h2>
          <div className="page1_block col1"> <img src="images/welcome_img.png" alt="" />
            <div className="extra_wrapper">
              <p><span className="col2"><a href="#">Click here</a></span> for more info about this free website template created by TemplateMonster.com </p>
              Aenean nonummy hendrerit mau rellus porta. Fusce suscipit varius m sociis natoque penaibet magni parturient montes nasetur ridiculumula dui. <br/>
              <a href="#" className="btn">more</a> </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="grid_5">
          <h2>{this.props.title2}</h2>
          <ul className="list">
            {
              this.state.featured_data.map( (f)=>
                <li><a href="#">{f}</a></li>
              )
            }
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}
 
export default Welcome;