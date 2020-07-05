import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
import {fetchCategories} from '../Redux/action'

class Categorories extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentWillMount = () =>{
		console.log("componentWillMount")
		const {fetchCategories} = this.props
		fetchCategories()
	}


	render() {
		console.log("categories: ",this.props.dataItem)
		return (
			<div className="categories">
				<section className="w3l-grids-hny-2">
					<div className="grids-hny-2-mian py-5">
						<div className="container py-lg-5">
							<h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
							<p className="mb-4 text-center">Handpicked Favourites just for you</p>
							<div className="welcome-grids row mt-5">

								{this.props.dataItem.map((item) =>
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

//mapStateToProps: anh xa nguyen cai store tren redux xuong cho tung view, dat ten j cung duoc nhung thuong se dat la mapStateToProps
const mapStateToProps = state =>({
	dataItem: state.categoriesStore.categories
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchCategories}, dispatch)

// param 1: chuyen state o store tong ve component
// param 2: chuyen dispatch (event) tu store ve component
export default connect(mapStateToProps, mapDispatchToProps) (Categorories);