import React, { Component } from 'react';
class RightContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list1Data: [
        {title:"Maecenas malesuada sapien", isLastItem: false},
        {title:"Maecenas malesuada sapien", isLastItem: false},
        {title:"Pellentesque vitae sem odio", isLastItem: false},
        {title:"Lorem ipsum dolor sit amet, con", isLastItem: false},
        {title:"Provide preferred vendor's list", isLastItem: false},
        {title:"Vivamus vulputate est eget elit s tellus et", isLastItem: false},
        {title:"Nam blandit metus eget pretium", isLastItem: false},
        {title:"Aaecenas koalesuada sapien", isLastItem: false},
        {title:"Ttiam tortor metus tiklioidunt vel", isLastItem: false},
        {title:"Eellentesque vitae sem odiokhoy", isLastItem: false},
        {title:"Okoem ipsum dolor sit amet df", isLastItem: false},
        {title:"Rovide preferred vendor's listko frefrwq hu", isLastItem: false},
        {title:"Vvamus vulputate est eet elit", isLastItem: false},
        {title:"Am blandit metus eet pretium", isLastItem: true}
      ],
      list2Data: [
        {title: "Koalesuada  libero", isLastItem: false},
        {title: "Ortor metus vel", isLastItem: false},
        {title: "Eellentesque vitae sem", isLastItem: false},
        {title: "Ipsum", isLastItem: false},
        {title: "Rovide preferred", isLastItem: false},
        {title: "Vulputate est", isLastItem: false},
        {title: "Bandit metus", isLastItem: true}
      ]
    }
  }
  render() {

    return (
      <div className="grid_5 prefix_1">
        <h2 className="head2">{this.props.title_list1}</h2>
        <ul className="list l1">

        {this.state.list1Data.map( (l) =>
          (l.isLastItem ? <li className="mb0"><a href="#">{l.title}</a></li> : <li><a href="#">{l.title}</a></li>)
        )}  
        
        </ul>
        <h2 className="head1">{this.props.title_list2}</h2>
        <ul className="list">
          {this.state.list2Data.map( (l) =>
            (l.isLastItem ? <li className="mb0"><a href="#">{l.title}</a></li> : <li><a href="#">{l.title}</a></li>)
          )}
        </ul>
      </div>

    );
  }
}

export default RightContent;