import React, { Component } from 'react';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestChefData: [
        {image: "page2_img3.jpg", name: "Ann Franklin", des: "Nulla pellentesque tempus quam nec porta. Donec nec lorem enim. Aenean velit velit, faucibus sed porta quis, gt er semper ac elit. Aliquam hendrerit mo lestie turpis condimentum tristique. Fty aliquam malesuada orci a massa yht. semper sed interdum arcu"},
        {image: "page2_img4.jpg", name: "Milisa Dayemond", des: "Lorem ipsum pellentesque tempus quam nec porta. Donec nec lorem enim. Aenean velit velit, faucibus sed porta quis, gt er semper ac elit. Aliquam hendrerit mo lestie turpis condimentum tristique. Fty aliquam malesuada orci a massa iaculis. Integer a diam a odio."},
        {image: "page2_img5.jpg", name: "Liza Croft", des: "Aenean velittempus quam nec porta. Donec nec lorem enim. Aenean velit velit, faucibus sed porta quis, gt er semper ac elit. Aliquam hendrerit mo lestie turpis condimentum tristique. Fty aliquam malesuada orci a massa yht. semper sed interdum."},
        {image: "page2_img6.jpg", name: "Alan Soares", des: "Donec necllentesque tempus quam nec porta. Donec nec lorem enim. Aenean velit velit, faucibus sed porta quis, gt er semper ac elit. Aliquam hendrerit mo lestie turpis condimentum tristique. Fty aliquam malesuada orci a massa yht. semper sed interdum."}
      ]
    }
  }

  render() {
    return (
      <div className="content">
        <div className="container_12">
          <div className="grid_5">
            <h2>{this.props.title1}</h2>
            <img src="images/page2_img1.jpg" alt="" className="img_inner" />
            <p className="col1">Curabitur in turpisju massa. Donec et nibh non turpis pellentesque suscipit eget. </p>
            <p>Ghfgop Maecnas cursus fringilla sagittis. Donec eu felis purus, iaculis fringilla ipsum. Inte ger non nulla sem, eget volutpat augue. Curabitur in turpisju massa. Donec et nibh non turpis pellentesque suscipit eget. </p>
            Donec eu felis purus, iaculis fringilla ipsum. Integer non. nulla sem, eget volutpat augue. Curabitur in turpisju massa. Donec et nibh non turpis pellentesque suscipit eget vel odio. Sed tempus orci tempus libero suscipit elementum. Aliquam consectetur. Ghfgop Maecnas cursus. <br />
            <a href="#" className="btn m1">More</a>
          </div>
          <div className="grid_5 prefix_2">
            <h2>{this.props.title2}</h2>
            <ul className="carousel2">
              <li>
                <blockquote> <img src="images/page2_img2.png" alt="" />
                  <div className="extra_wrapper">
                    <div className="title">Sara &amp; Kevin <br />Jonson</div>
                  </div>
                  <div className="clear"></div>
                  <p className="col1"><a href="#">Euismod pellentesque in dui. Semper, enim eget eleifend faucibus, sem libero gravida erat, sit amet viverra dui nisl non nulla. Pellentesque in dui euismod. </a></p>
                  <p>Curabitur felis purus, iaculis fringi. ipsum. Integer non nulla sem, eget volutpat augue. Ghfgop Maecnas cursus fringilla sagittis. Donec eu felis purus, iaculis fringilla ipsum. Inte ger non nulla sem, eget volutpat augue. Curabitur in turpisju massa. Donec et nibh non turpis pellentesque suscipit eget vel odio.  Aliquam consectetur. Fringilla ipsum. </p>
                  <p>Ringilla ipsum. Donec et nibh non turpis pellentesque suscipit eget vel odio. Sed tempus orci tempus libero suscipit elementum. Aliquam consectetur. Ghfgop Maecnas cursus fringilla sagittis. Donec eu felis purus, iaculis fringi. ipsum. Integer non nulla sem, eget volutpat augue. Ghfgop pelle ntesque suscipit eget consectetur.</p>
                </blockquote>
              </li>
              <li>
                <blockquote> <img src="images/page2_img2-1.png" alt="" />
                  <div className="extra_wrapper">
                    <div className="title">Moira &amp; Brett<br />Clark</div>
                  </div>
                  <div className="clear"></div>
                  <p className="col1">Pellentesque in dui euismod. Aliquam semper, enim eget eleifend faucibus, sem libero gravida erat, sit amet viverra dui nisl non nulla. Pellentesque in dui euismod nibh suscipi. </p>
                  <p>Donec eu felis purus, iaculis fringi. ipsum. Integer non nulla sem, eget volutpat augue. Ghfgop Maecnas cursus fringilla sagittis. Donec eu felis purus, iaculis fringilla ipsum. Inte ger non nulla sem, eget volutpat augue. Curabitur in turpisju massa. Donec et nibh non turpis pellentesque suscipit eget vel odio.  Aliquam consectetur. Ghfgop Maecnas cursus frin.</p>
                  <p>Curabitur in turpisju massa. Donec et nibh non turpis pellen tesque suscipit eget vel odio. Sed tempus orci tempus libero suscipit elementum. Aliquam consectetur. Ghfgop Maecnas cursus fringilla sagittis. Donec eu felis purus, iaculis fringi. ipsum. Integer non nulla sem, eget volutpat augue. Ghfgop Maecnas cursus fringilla sagittis.</p>
                </blockquote>
              </li>
            </ul>
            <a href="#" className="next1"></a> <a href="#" className="prev1"></a> </div>
          <div className="clear"></div>
          <div className="grid_12">
            <div className="hor_separator hor1"></div>
            <h2 className="head1">Our Best Chefs</h2> 
          </div>
          <div className="clear"></div>
          <div className="chefs">

            {this.state.bestChefData.map( (c) =>
                <div className="grid_3"> <img src={'./images/'+c.image} alt="" className="img_inner" />
                  <p className="col1"><a href="#">{c.name}</a></p>
                  {c.des}
                </div>
            )}
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}
 
export default AboutUs;