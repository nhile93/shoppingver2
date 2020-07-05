import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Swtich } from 'react-router-dom'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        { to: "/home", title: "Home", isActive: true },
        { to: "/product", title: "Product", isActive: false },
        { to: "/categories", title: "Categories", isActive: false },
        { to: "/blog", title: "Blogs", isActive: false },
        { to: "/contact", title: "Contacts", isActive: false }
      ]
    }
  }

  clickItem = (name) => {
    console.log(name)
    let store = this.state.listData
    for (let i = 0; i < store.length; i++) {
      let item = store[i]
      if (item["title"] == name) {
        console.log(item["title"])
        item["isActive"] = true
      }
      else {
        item["isActive"] = false
      }
    }
    this.setState({ listData: store })
  }

  render() {
    return (
      <ul className="navbar-nav ml-auto">

        {this.state.listData.map((item) =>
          (item.isActive ?
            <li className="nav-item active">
              <Link className="nav-link" key={item.title} onClick={() => this.clickItem(item.title)} to={item.to}>{item.title}</Link>
            </li>
            :
            <li className="nav-item">
              <Link className="nav-link" key={item.title} onClick={() => this.clickItem(item.title)} to={item.to}>{item.title}</Link>
            </li>)
        )}
      </ul>
    );
  }
}

export default Navigation;