import React, { Component } from 'react';
import Header from '../Common/Header/header'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchCategoriesVer2} from '../Redux/action'

class CategoriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount = () =>{
    const {fetchCategoriesVer2} = this.props
    fetchCategoriesVer2()
  }

  render() { 
    return ( 
      <div className="categoriesPage">
        <section className="w3l-banner-slider-main inner-pagehny">
          <div className="breadcrumb-infhny">
            <div className="top-header-content">
              <Header />
              <div className="breadcrumb-contentnhy">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <h2 className="hny-title text-center">Categories Dashboard</h2>
                    <ol className="breadcrumb mb-0">
                      <li><a href="index.html">Home</a>
                        <span className="fa fa-angle-double-right"></span></li>
                      <li className="active">Categories</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w3l-grids-hny-2">
					<div className="grids-hny-2-mian py-5">
						<div className="container py-lg-5">
							<h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
							<p className="mb-4 text-center">Handpicked Favourites just for you</p>
							<div className="welcome-grids row mt-5">

								{this.props.cates.map((item) =>
									<div className="col-lg-2 col-md-4 col-6 welcome-image">
										<div className="boxhny13">
											<a href="#URL">
												<img src={"assets/images/"+ item.image} className="img-fluid" alt="" />
												<div className="boxhny-content">
													<h3 className="title">Product</h3>
												</div>
											</a>
										</div>
										<h4><a href="#URL">{item.name}</a></h4>
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
const mapStateToProps = state =>({
  cates: state.categoriesStore.categories
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchCategoriesVer2}, dispatch)
 
export default connect(mapStateToProps, mapDispatchToProps) (CategoriesPage);