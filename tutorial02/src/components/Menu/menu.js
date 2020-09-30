import React, { Component } from 'react';
import LeftContent from './left-content/left-content';
import RightContent from './right-content/right-content';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="content">
        <div className="container_12">
        <div className="grid_6">
          <h2>{this.props.titlepage}</h2>
          <p className="col2 inn1"><a href="#">Integer non metus justo ac posuere turpis. Integer iaculis porta metus, in aliquam orci vehicula sit amet. Suspendisse turpis mauris, laoreet ac aliquet a lobortis in massa. Etiam tortor metus, tincidunt vel congue etu</a></p>
          <p>Aenean sed nunc lorem, nec ornare nibh. Pellentesque vitae sem odio. Vivamus vulputate est eget elit rutrum a consectetur justo aliquet. Aliquam hendrerit consectetur mi, non molestie massa venenatis quis. Integer aliquet euismod nisl, et sagittis sem scelerisque sit amet. Etiam dapibus, tellus et imperdiet pulvinar, urna nunc consectetur enim, in </p>

          <LeftContent/>

          <div className="clear"></div>
        </div>

        <RightContent title_list1="Chef’s Secrets" title_list2="Wine List" />
        <div className="clear"></div>
        
      </div>
      </div>
    );
  }
}

export default Menu;