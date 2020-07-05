import React, { Component } from 'react';

class Subscription extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="subscription">
        <section className="w3l-subscription-6">

          <div className="subscription-infhny">
            <div className="container-fluid">

              <div className="subscription-grids row">

                <div className="subscription-right form-right-inf col-lg-6 p-md-5 p-4">
                  <div className="p-lg-5 py-md-0 py-3">
                    <h3 className="hny-title">Join us for FREE to get instant <span>email updates!</span></h3>
                    <p>Subscribe and get notified at first on the latest update and offers!</p>

                    <form action="#" method="post" className="signin-form mt-lg-5 mt-4">
                      <div className="forms-gds">
                        <div className="form-input">
                          <input type="email" name="" placeholder="Your email here" required="" />
                        </div>
                        <div className="form-input"><button className="btn">Join</button></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="subscription-left forms-25-info col-lg-6 ">

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Subscription;