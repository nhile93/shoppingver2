import React, { Component } from 'react';
import Header from '../Common/Header/header'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div id="contact-page">
        <section className="w3l-banner-slider-main inner-pagehny">
          <div className="breadcrumb-infhny">
            <div className="top-header-content">
              <Header />
              <div className="breadcrumb-contentnhy">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <h2 className="hny-title text-center">Blog Dashboard</h2>
                    <ol className="breadcrumb mb-0">
                      <li><a href="index.html">Home</a>
                        <span className="fa fa-angle-double-right"></span></li>
                      <li className="active">Blog</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w3l-contacts-8">
         
          <div className="map-content-9 form-bg-img">
            <div className="layer section-gap py-5">
              <div className="container py-lg-5">
                <div className="form">
                  <h3 className="hny-title two text-center">Fill out the form.</h3>
                  <form action="https://sendmail.w3layouts.com/submitForm" className="mt-md-5 mt-4" method="post">
                    <div className="input-grids">
                      <input type="text" name="w3lName" id="w3lName" placeholder="Name" />
                      <input type="email" name="w3lSender" id="w3lSender" placeholder="Email" required="" />
                      <input type="subject" name="w3lSubject" id="w3lSubject" placeholder="Subject" required="" />
                    </div>
                    <div className="input-textarea">
                      <textarea name="w3lMessage" id="w3lMessage" placeholder="Message" required=""></textarea>
                    </div>
                    <button type="submit" className="btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Contact;