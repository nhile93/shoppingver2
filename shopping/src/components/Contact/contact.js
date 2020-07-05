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
                    <h2 className="hny-title text-center">Contact Us</h2>
                    <ol className="breadcrumb mb-0">
                      <li><a href="index.html">Home</a>
                        <span className="fa fa-angle-double-right"></span></li>
                      <li className="active">Contact</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w3l-contacts-8">
          <div className="contacts-9 section-gap py-5">
            <div className="container py-lg-5">
              <div className="row top-map">
                <div className="col-lg-6 partners">
                  <div className="cont-details">
                    <h3 className="hny-title mb-0">Get in <span>touch</span></h3>
                    <p className="mb-5">We're ready to lead you into the future with Business Services</p>
                    <p className="margin-top"><span className="texthny">Call Us : </span> <a href="tel:+(21) 255 999 8899">+(21)
                  255 999 8899</a></p>
                    <p> <span className="texthny">Email : </span> <a href="mailto:info@example.com">
                      info@example.com</a></p>
                    <p className="margin-top"> 433 California St, Suite 300
                San Francisco, CA 94104, USA </p>
                  </div>
                  <div className="hours">
                    <h3 className="hny-title">Working <span>Hours</span></h3>
                    <h6>Business Service:</h6>
                    <p> Monday to Friday 8.00 am - 6.00 pm</p>
                    <p> Saturday and Sunday - Closed</p>
                    <h6 className="margin-top">Customer support:</h6>
                    <p> Monday to Friday 8.00 am - 6.00 pm</p>
                    <p> Saturday 10.00 am - 4.00 pm</p>
                    <p> Sunday - Closed</p>
                  </div>
                </div>
                <div className="col-lg-6 map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin"
                    frameborder="0" style={{"border":"0"}} allowfullscreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
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