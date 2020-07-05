import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  
  render() {
    return (
      <div className="overlay-login text-left">
        <button type="button" className="overlay-close1">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="wrap">
          <h5 className="text-center mb-4">Login Now</h5>
          <div className="login-bghny p-md-5 p-4 mx-auto mw-100">

            <form action="#" method="post">
              <div className="form-group">
                <p className="login-texthny mb-2">Email address</p>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="" required="" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email
												with anyone else.</small>
              </div>
              <div className="form-group">
                <p className="login-texthny mb-2">Password</p>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" required="" />
              </div>
              <div className="form-check mb-2">
                <div className="userhny-check">
                  <label className="check-remember container">
                    <input type="checkbox" className="form-check" /> <span className="checkmark"></span>
                    <p className="privacy-policy">Remember me</p>
                  </label>
                  <div className="clearfix"></div>
                </div>
              </div>
              <button type="submit" className="submit-login btn mb-4">Sign In</button>

            </form>

          </div>

        </div>
      </div>
    );
  }
}

export default Login;