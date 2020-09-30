import React, { Component } from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signin} from '../../../Redux/action'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onLoginForm = (evt) =>{
    evt.preventDefault()

    let _email = this.refs.email.value
    let _password = this.refs.password.value

    let item = Object.assign({"id":"","name":"","email":_email,"password":_password,"address":"","phone":"","blogs":[]})
    const {signin} = this.props
    signin(item)
    const {status, user} = this.props

    console.log("login status: ", status)
    console.log("login user: ", user)
  }

  onHandleChange = (evt) =>{
    console.log(evt.target.name + "=>" + evt.target.value)
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

            <form method="post" onSubmit={(evt)=>this.onLoginForm(evt)}>
              <div className="form-group">
                <p className="login-texthny mb-2">Email address</p>
                <input type="email" className="form-control" ref="email" name="email" aria-describedby="emailHelp"
                  placeholder="" required="" onChange={(evt)=>this.onHandleChange(evt)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email
												with anyone else.</small>
              </div>
              <div className="form-group">
                <p className="login-texthny mb-2">Password</p>
                <input type="password" className="form-control" ref="password" name="password" placeholder="" required="" onChange={(evt)=>this.onHandleChange(evt)} />
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

const mapStateToProps = state =>({
  user: state.initStore.user,
  status: state.initStore.status
})

const mapDispatchToProps = (dispatch) => bindActionCreators({signin}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Login);