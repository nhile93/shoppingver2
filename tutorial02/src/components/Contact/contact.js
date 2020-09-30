import React, { Component } from 'react';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChange(evt){
    let valuearg = '';
    let namearg = '';
    valuearg = evt.target.value;
    namearg = evt.target.name;
    this.setState({[namearg]: valuearg});
  }

  onSubmitForm(evnt){
    evnt.preventDefault();
    console.log('form data '+ this.state.name + ' - '+this.state.email + ' - ' + this.state.phone + ' - ' + this.state.message);
  }

  render() { 
    return (
      <div className="content">
        <div className="container_12">
        <div className="grid_6">
        <h2>Find Us</h2>
        <div className="map">
          <figure className="img_inner">
            <iframe src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Brooklyn,+New+York,+NY,+United+States&amp;aq=0&amp;sll=37.0625,-95.677068&amp;sspn=61.282355,146.513672&amp;ie=UTF8&amp;hq=&amp;hnear=Brooklyn,+Kings,+New+York&amp;ll=40.649974,-73.950005&amp;spn=0.01628,0.025663&amp;z=14&amp;iwloc=A&amp;output=embed"></iframe>
          </figure>
          <address>
          <dl>
            <dt>
              <p>The Company Name Inc.<br/>
                8901 Marmora Road,<br/>
                Glasgow, D04 89GR.</p>
            </dt>
            <dd><span>Freephone:</span>+1 800 559 6580</dd>
            <dd><span>Telephone:</span>+1 800 603 6035</dd>
            <dd><span>FAX:</span>+1 800 889 9898</dd>
          </dl>
          </address>
        </div>
      </div>
      <div className="grid_5 prefix_1">
        <h2>Contact Us</h2>
        <form id="form" onSubmit={this.onSubmitForm} method='post'>
          <div className="success_wrapper">
            <div className="success">Contact form submitted!<br/>
              <strong>We will be in touch soon.</strong> </div>
          </div>
          <fieldset>
            <label className="name">
              <input type="text" name="name" onChange = {this.onChange}/>
              <br className="clear"/>
              <span className="error error-empty" style={{"display": "none"}}>*This is not a valid name.</span><span className="empty error-empty" style={{"display": "none"}}>*This field is required.</span> </label>
            <label className="email">
              <input type="text" name="email" onChange = {this.onChange}/>
              <br className="clear"/>
              <span className="error error-empty" style={{"display": "none"}}>*This is not a valid email address.</span><span className="empty error-empty" style={{"display": "none"}}>*This field is required.</span> </label>
            <label className="phone">
              <input type="tel" name="phone" onChange = {this.onChange}/>
              <br className="clear"/>
              <span className="error error-empty" style={{"display": "none"}}>*This is not a valid phone number.</span><span className="empty error-empty" style={{"display": "none"}}>*This field is required.</span> </label>
            <label className="message">
              <textarea name="message" onChange = {this.onChange}>Message:</textarea>
              <br className="clear"/>
              <span className="error" style={{"display": "none"}}>*The message is too short.</span> <span className="empty">*This field is required.</span> </label>
            <div className="clear"></div>
            <div className="btns"><a data-type="reset" className="btn">clear</a><a data-type="submit" className="btn">send</a> <button type='submit'>Send</button>
              <div className="clear"></div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="clear"></div>
        </div>
      </div>
    );
  }
}
 
export default Contact;