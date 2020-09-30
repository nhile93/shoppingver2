import React, { Component } from 'react';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      description: '',
      image: '',

      data:[
        {id: "1", name: "Food 1", price: "32", description: "fhow", image: "page1_img1.jpg"},
        {id: "2", name: "Food 2", price: "15", description: "fhow 2", image: "page1_img2.jpg"}
      ]
    }
  }

  onSubmitForm = (evnt) => {
    evnt.preventDefault();
    let new_item = Object.assign({}, {id: this.state.id, 
                      name: this.state.name, 
                      price: this.state.price, 
                      description: this.state.description,
                      image: this.state.image
                    })
    console.log(new_item)
    let new_data = [...this.state.data, new_item]
    this.setState({data: new_data})
    // reset form width ID
    //document.getElementById("form-dashboard").reset();

    // reset form without ID
    this.form.reset();
  }

  onHandleChange = (evt) =>{
    let field_name = evt.target.name; 
    let field_value = evt.target.value;
    console.log(field_name + "-> "+ field_value)
    this.setState({[field_name] : field_value})
  }

  onHandleDelete = (id) =>{
    console.log(id)
    let pre_data = this.state.data;
    let new_data = pre_data.filter(item => item.id != id)
    this.setState({data: new_data})
  }

  onHandleEdit = (id)=>{
    console.log("update Iem: "+id)
    let item = this.state.data.filter(item => item.id == id)
    item["id"]=this.state.id
    item["name"]=this.state.name
    item["price"]=this.state.price
    item["description"]=this.state.description
    item["image"]=this.state.image

    let pre_data = this.state.data.filter(item => item.id != id)
    let new_data = [...pre_data, item]

    this.setState({data: new_data})
  }

  render() {
    return (
      <div className="content">
        <div className="container_12">
          <h2>Form dashboard</h2>
          <form method="post" id="form-dashboard" ref={form => this.form = form} onSubmit={(evnt)=>this.onSubmitForm(evnt)}>
            <fieldset>

              <div className="pb-1">
                <span style={{ "min-width": "50px", "display":"inline-block" }}>ID: </span>
                <label className="id">
                  <input type="text" name="id" placeholder="ID:" onChange={(evt) => this.onHandleChange(evt)}/>
                  <br className="clear" />
                  <span className="error error-empty" style={{ "display": "none" }}>*This is not a valid name.</span><span className="empty error-empty" style={{ "display": "none" }}>*This field is required.</span> </label>
              </div>

              <div className="pb-1">
                <span style={{ "min-width": "50px", "display":"inline-block" }}>Name: </span>
                <label className="name">
                  <input type="text" name="name" placeholder="Name:" onChange={(evt) => this.onHandleChange(evt)}/>
                  <br className="clear" />
                  <span className="error error-empty" style={{ "display": "none" }}>*This is not a valid email address.</span><span className="empty error-empty" style={{ "display": "none" }}>*This field is required.</span> </label>
              </div>

              <div className="pb-1">
                <span style={{ "min-width": "50px", "display":"inline-block" }}>Price: </span>
                <label className="price">
                  <input type="text" name="price" placeholder="Price:" onChange={(evt) => this.onHandleChange(evt)} />
                  <br className="clear" />
                  <span className="error error-empty" style={{ "display": "none" }}>*This is not a valid email address.</span><span className="empty error-empty" style={{ "display": "none" }}>*This field is required.</span> </label>
              </div>

              <div className="pb-1">
                <span className="pr-1" style={{ "min-width": "50px", "display":"inline-block" }}>Description: </span>
                <label className="message">
                  <textarea name="description" rows="6" style={{ "width": "400px"}} placeholder="Description:" onChange={(evt) => this.onHandleChange(evt)}></textarea>
                  <br className="clear" />
                  <span className="error" style={{ "display": "none" }}>*The message is too short.</span> <span className="empty">*This field is required.</span> </label>
              </div>

              <div className="pb-1">
                <span style={{ "min-width": "50px", "display":"inline-block" }}>Image: </span>
                <label className="image">
                  <input type="text" name="image" placeholder="Image:" onChange={(evt) => this.onHandleChange(evt)} />
                  <br className="clear" />
                  <span className="error error-empty" style={{ "display": "none" }}>*This is not a valid email address.</span><span className="empty error-empty" style={{ "display": "none" }}>*This field is required.</span> </label>
              </div>

              <div className="clear"></div>
              <div className="btns"><button type="reset">Reset</button> <button type='submit' className="btn">Save</button>
                <div className="clear"></div>
              </div>

            </fieldset>
          </form>
        </div>
        
        <div className="container_12">
          <h2>Food list</h2>
          <table width="600">
            <tr align="left">
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
            {this.state.data.map( (item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td><img src={"./images/"+item.image} width="50" height="50"/></td>
                <td>
                  <button onClick={() => this.onHandleEdit(item.id)}>Edit</button>
                  <button onClick={() => this.onHandleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;