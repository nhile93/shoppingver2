import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
import {fetchBlogs} from '../Redux/action'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /*======= API =======*/
  componentWillMount = () =>{
		console.log("componentWillMount")
		const {fetchBlogs} = this.props
		fetchBlogs()

		console.log("blogs: ",this.props.dataItem)
	}
  /*======= API =======*/

  render() {
    return (
      <div className="blog">
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
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
//mapStateToProps: anh xa nguyen cai store tren redux xuong cho tung view, dat ten j cung duoc nhung thuong se dat la mapStateToProps
const mapStateToProps = state =>({
	dataItem: state.blogsStore.blogs
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchBlogs}, dispatch)

// param 1: chuyen state o store tong ve component
// param 2: chuyen dispatch (event) tu store ve component
export default connect(mapStateToProps, mapDispatchToProps) (Blog);