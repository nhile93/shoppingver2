import React, { Component } from 'react';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <footer>
        <div class="container_12">
          <div class="grid_12"> Gourmet Traditional Restaurant &copy; 2045 | <a href="#">Privacy Policy</a> | Design by: <a href="http://www.templatemonster.com/">TemplateMonster.com</a> </div>
          <div class="clear"></div>
        </div>
      </footer>
    );
  }
}
 
export default Footer;