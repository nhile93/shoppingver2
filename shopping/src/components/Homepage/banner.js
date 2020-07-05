import React, { Component } from 'react';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="banner">
        <section className="w3l-content-5">

          <div className="content-5-main">
            <div className="container">
              <div className="content-info-in row">
                <div className="content-gd col-md-6 offset-lg-3 text-center">
                  <h3 className="hny-title two">
                    Tons of Products & Options to <span>change</span></h3>
                  <p>Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elitFuga, suscipit totam<br/>animi consequatur saepe blanditiis.Lorem ipsum dolor sit amet,Ea consequuntur illum facere<br/>aperiam sequi optio consectetur adipisicing elit..</p>
                  <a href="#" className="read-more-btn2 btn">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;