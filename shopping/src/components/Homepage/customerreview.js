import React, { Component } from 'react';

class CustomerReview extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="customer-review">
        <section className="w3l-customers-sec-6">
          <div className="customers-sec-6-cintent py-5">

            <div className="container py-lg-5">
              <h3 className="hny-title text-center mb-0 ">Customers <span>Love</span></h3>
              <p className="mb-5 text-center">What People Say</p>
              <div className="row customerhny my-lg-5 my-4">
                <div className="col-md-12">
                  <div id="customerhnyCarousel" className="carousel slide" data-ride="carousel">

                    <ol className="carousel-indicators">
                      <li data-target="#customerhnyCarousel" data-slide-to="0" className="active"></li>
                      <li data-target="#customerhnyCarousel" data-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner">

                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c1.jpg" className="img-fluid" alt="" />
                                <h5>Smith Roy</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c2.jpg" className="img-fluid" alt="" />
                                <h5>Lora Grill</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c3.jpg" className="img-fluid" alt="" />
                                <h5>Laura Sten</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c4.jpg" className="img-fluid" alt="" />
                                <h5>John Lee</h5>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c4.jpg" className="img-fluid" alt="" />
                                <h5>John Lee</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c3.jpg" className="img-fluid" alt="" />
                                <h5>Laura Sten</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c1.jpg" className="img-fluid" alt="" />
                                <h5>Smith Roy</h5>

                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="customer-info text-center">
                              <div className="feedback-hny">
                                <span className="fa fa-quote-left"></span>
                                <p className="feedback-para">Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Labore rem, dicta assumenda mollitia molestias
														quas nihil quasis.</p>
                              </div>
                              <div className="feedback-review mt-4">
                                <img src="assets/images/c2.jpg" className="img-fluid" alt="" />
                                <h5>Lora Grill</h5>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CustomerReview;