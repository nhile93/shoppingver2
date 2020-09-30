import React, { Component } from 'react';
import Header from '../Common/Header/header'
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchBlogs, createBlog, deleteBlog, updateBlog} from '../Redux/action'

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageError: ""
    }
  }

   /*======= API =======*/
  componentWillMount = () =>{
		console.log("componentWillMount")
    const {fetchBlogs} = this.props
    const {user, status} = this.props
    console.log("user in blogs", user)
		fetchBlogs()

		console.log("blogs: ",this.props.dataItem)
	}
  /*======= API =======*/

  onHandleChange = (evt) =>{
    let name = evt.target.name
    let value = evt.target.value

    console.log(name +"=> "+ value)
    //check errors
  }

  onHandleEdit = (blog_id) =>{
    console.log("Edit blog has ID: ", blog_id)
    const {fetchBlogs, user, status} = this.props
    if(status){
      let blogs = this.props.dataItem
      let blog_item = blogs.filter((item) =>
        item.id == blog_id
      )[0]
      console.log("Edit blog will be edited: ", blog_item)
      this.refs.title.value = blog_item.title
      this.refs.content.value = blog_item.content
      this.refs.image.value = blog_item.image
      this.refs.id.value = blog_item.id
    }
    else{
      this.setState({messageError : "Can't update blog, You should login first!"})
    }
  }

  onHandleUpdate = (evt) =>{
    evt.preventDefault()
    const {updateBlog, user, status} = this.props
    let _title = this.refs.title.value
    let _image = this.refs.image.value
    let _date = new Date()
    let _content = this.refs.content.value
    let _id = this.refs.id.value
    console.log("user: ", user)

    // let _user = Object.assign({"id":3,"name":"Admin","email":"admin@shops.com","password":"admin1","address":"shop sprystore","phone":"012347896"})

    let item = Object.assign({id: _id, title: _title, content: _content, user: user, date: _date, image: _image})
    console.log("item:", item)

    if(status){
      updateBlog(item)
      this.setState({messageError: "Blog updated successfully!"})
    }
    else{
      this.setState({messageError : "Can't update blog, You should login first!"})
    }
    console.log("create blog success")
  }

  onHandleDelete = (blog_id) => {
    console.log("Delete blog has ID: ", blog_id)

    const {deleteBlog, user, status} = this.props
    if(status){
      deleteBlog(blog_id)
      this.setState({messageError: "Successfully!"})
    }
    else{
      this.setState({messageError : "Can't delete blog, You should login first!"})
    }
  }

  onHandleSubmit = (evt) =>{
    evt.preventDefault()
    let _title = this.refs.title.value
    let _image = this.refs.image.value
    let _date = new Date()
    let _content = this.refs.content.value
    const {createBlog, user, status} = this.props
    console.log("user: ", user)

    // let _user = Object.assign({"id":3,"name":"Admin","email":"admin@shops.com","password":"admin1","address":"shop sprystore","phone":"012347896"})

    let item = Object.assign({title: _title, content: _content, user: user, date: _date, image: _image})
    console.log("item:", item)

    if(status){
      createBlog(item)
      this.setState({messageError: "Successfully!"})
    }
    else{
      this.setState({messageError : "Can't create blog, You should login first!"})
    }
    console.log("create blog success")
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

        <section className="w3l-post-grids-6">

          <div className="post-6-mian py-5">
            <div className="container py-lg-5">
              <h3 className="hny-title text-center mb-0 ">Latest Blog <span>Posts</span></h3>
              <p className="mb-5 text-center">Handpicked Favourites just for you</p>
              <div className="post-hny-grids row mt-5">

                {this.props.dataItem.map((item) =>
                  <div className="col-lg-3 col-md-6 grids5-info column-img" id="zoomIn">
                    <a href="#">
                      <figure>
                        <img className="img-fluid" src={"assets/images/"+item.image} alt="blog-image" />
                      </figure>
                    </a>

                    <div className="blog-thumbhny-caption">
                      <ul className="blog-info-list">
                        <li><a href="#admin">By {item.user.name}</a></li>
                        <li className="date-post">{item.date}</li>
                      </ul>
                      <h4><a href="#">{item.title}</a></h4>
                    </div>

                    <div style={{"padding-bottom": "10px"}}>
                      <button className="btn" type="button" onClick={() => this.onHandleEdit(item.id)}>Edit</button>
                      <button className="btn" type="button" onClick={() => this.onHandleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                )}

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
                  <div style={{"color": "red"}}>{this.state.messageError}</div>
                  <form onSubmit={(evt) => this.onHandleSubmit(evt)} className="mt-md-5 mt-4" method="post">
                    <div className="input-grids">
                      <input type="hidden" name="id" ref="id" />
                      <input type="text" name="title" ref="title" placeholder="Title" onChange={(evt) => this.onHandleChange(evt)}/>
                      <input type="text" name="image" ref="image" placeholder="Image" required="" onChange={(evt) => this.onHandleChange(evt)}/>
                    </div>
                    <div className="input-textarea">
                      <textarea name="content" ref="content" placeholder="Message" required="" onChange={(evt) => this.onHandleChange(evt)}></textarea>
                    </div>
                    <button type="submit" className="btn">Send</button>
                    <button type="button" className="btn" onClick={(evt) => this.onHandleUpdate(evt)}>Save</button>
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
const mapStateToProps = state =>({
  dataItem: state.blogsStore.blogs,
  status: state.initStore.status,
  user: state.initStore.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchBlogs, createBlog, deleteBlog, updateBlog}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (BlogForm);