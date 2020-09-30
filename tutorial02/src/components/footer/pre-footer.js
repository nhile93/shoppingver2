import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Swtich} from 'react-router-dom';

class PreFooterNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPreFooterNav:[
        {to: "/home", title: "Home", isCurrent: true},
        {to: "/about-us", title: "About Us", isCurrent: false},
        {to: "/menu", title: "Menu", isCurrent: false},
        {to: "/portfolio", title: "Portfolio", isCurrent: false},
        {to: "/news", title: "News", isCurrent: false},
        {to: "/contact", title: "Contacts", isCurrent: false}
      ]
    }
  }

  clickItem = (itemTitle) =>{
    let store = this.state.listPreFooterNav;
    for(let i=0; i<store.length; i++){
      let item = store[i]
      
      if(item["title"]==itemTitle){
        console.log(item["title"])
        item["isCurrent"]=true
      }
      else{
        item["isCurrent"]=false
      }

      // let itemClickTitle = item["title"] == itemTitle
      // (itemClickTitle ? item["isCurrent"]=true : item["isCurrent"]=false)
    }
    this.setState({listPreFooterNav: store})
  }

  render() { 
    return ( 
      <nav>
        <ul>
        {this.state.listPreFooterNav.map( (item) =>
            (item.isCurrent ? <li className="current" onClick={() => this.clickItem(item.title)}><Link to={item.to}>{item.title}</Link></li>:
            <li onClick={() => this.clickItem(item.title)}><Link to={item.to}>{item.title}</Link></li>)
          )}
        </ul>
      </nav> 
    );
  }
}


class PreFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  onChange = (evt) =>{
    this.setState({[evt.target.name]: evt.target.value})
  }

  //arrow function
  onSubmitForm = (evt) => {
    evt.preventDefault();
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="pre-footer container_12">
        <div className="bottom_block">
          <div className="grid_6">
            <h3>Follow Us</h3>
            <div className="socials"> <a href="#"></a> <a href="#"></a> <a href="#"></a> </div>
            
            <PreFooterNav/>
             
          </div>
          <div className="grid_6">
            <h3>Email Updates</h3>
            <p className="col1">Join our digital mailing list and get news<br />
          deals and be first to know about events</p>
            <form id="newsletter" method="post" onSubmit={this.onSubmitForm}>
              <div className="success">Your subscribe request has been sent!</div>
              <label className="email">
                <input type="email" name='email' onChange={this.onChange}/>
                <button type='submit'>subscribe</button> <span className="error">*This is not a valid email address.</span> </label>
            </form>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default PreFooter;