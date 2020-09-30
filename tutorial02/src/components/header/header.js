import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Swtich} from 'react-router-dom';

class NavigationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData:[
        {to: "/home", title: "Home", isActive: true},
        {to: "/about-us", title: "About Us", isActive: false},
        {to: "/menu", title: "Menu", isActive: false},
        {to: "/portfolio", title: "Portfolio", isActive: false},
        {to: "/news", title: "News", isActive: false},
        {to: "/contact", title: "Contacts", isActive: false},
        {to: "/dasboard", title: "Admin", isActive: false}
      ]
    }
  }

  clickItem = (name) =>{
    console.log(name)
    let store= this.state.listData
    for(let i =0; i< store.length; i++){
      let item=store[i]
      if(item["title"]==name){
        console.log(item["title"])
        item["isActive"]=true
      }
      else{
        item["isActive"]=false
      }
    }
    this.setState({listData: store})
  }

  render() { 
    return ( 
      <nav>
        <ul className="sf-menu">
          {this.state.listData.map( (item) =>
            (item.isActive?
            <li className="current" key={item.title} onClick={() => this.clickItem(item.title)}><Link to={item.to}>{item.title}</Link></li> 
            :
             <li key={item.title} onClick={() => this.clickItem(item.title)}><Link to={item.to}>{item.title}</Link> </li>)
          )}
        </ul>
      </nav>
    );
  }
}
 
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() { 
    return (
      <header>
        <div className="container_12">
          <div className="grid_12">
            <h1><a href="index.html"><img src="images/logo.png" alt="" /></a></h1>
            <div className="menu_block">
              <NavigationHeader/>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
    );
  }
}
 
export default Header;