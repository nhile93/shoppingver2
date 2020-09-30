import React, { Component } from 'react';
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="content">
        <div className="container_12">
          <div className="grid_7">
            <h2 className="head2">{this.props.titlepage}</h2>
            <div className="news"> <img src="images/page5_img1.jpg" alt="" className="img_inner fleft"/>
              <div className="extra_wrapper">
                <div className="col1">Aenean nonummy hendrerit mau rellus porta. Fusce suscipit varius m sociis natoque penaibet mapaturent. </div>
                <p>Montes nasetur ridiculumula dui. Fusce feugiatlesuada o krjg fdio. Morbi nusem. GIoadscs lkierhdc v hfrjgDuis ultricies pharetra magna. Donec accusan mal esuada orcec sit amet eros. </p>
                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed oreetliquam tellus dolor elementum vel cursus eleife. agna. Donec accumsan malesuada orcec sit amet </p>
                <a href="#" className="btn">More</a> </div>
            </div>
            <div className="news mb0"> <img src="images/page5_img2.jpg" alt="" className="img_inner fleft"/>
              <div className="extra_wrapper">
                <div className="col1">Nuinean nonummy hendrerit mau rellus porta. Fusce varius m sociis natoque penaibet magni partur.</div>
                <p>Ent montes nasetur ridiculumula dui. KHgsce feugiat malesuada o krjg fdio. Joorbi nusem. GIoadscs lkierdc vhfrujgDuis ultricies pharetra magna. Donec accumsan masuada orcec sit amet eros. </p>
                <p>Hioasrem ipsum dolor sit amet consectetuer adiscing elit. Mauris fermentum dictum magna. Ed oreetliquam tellus dolor dapibus eget elementum vel cursus eleife. agna. Donec accumsan malesuada orcec sit amrbi. </p>
                <a href="#" className="btn">More</a> </div>
            </div>
          </div>
          <div className="grid_3 prefix_2">
            <h2 className="head2">{this.props.subtitle1}</h2>
            <ul className="list l1">
              <li><a href="#">Vivamus vulputate est</a></li>
              <li><a href="#">Aniivamus vulputate</a></li>
              <li><a href="#">Nam blandit metus</a></li>
              <li><a href="#">Mltam blandit metuju</a></li>
              <li><a href="#">Pellentesque vitae sem odio</a></li>
              <li><a href="#">Pellen miofju</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Nam at neque dictum</a></li>
              <li><a href="#">Mloam at neque</a></li>
            </ul>
            <h2 className="head2">{this.props.subtitle2}</h2>
            <ul className="list">
              <li><a href="#">September 2045</a></li>
              <li><a href="#">August 2045</a></li>
              <li><a href="#">July 2045</a></li>
              <li><a href="#">June 2045</a></li>
              <li><a href="#">May 2045</a></li>
              <li><a href="#">April 2045</a></li>
              <li><a href="#">March 2045</a></li>
              <li><a href="#">February 2045</a></li>
              <li><a href="#">January 2045</a></li>
            </ul>
          </div>
        <div className="clear"></div>
      </div>
    </div>
    );
  }
}
 
export default News;