import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux' 
import {bindActionCreators} from 'redux'
import {fetchProduct} from '../Redux/action'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentWillMount = () =>{
    const {fetchProduct} = this.props
    fetchProduct()
  }

  render() {
    return (
      <div className="products">
        <section className="w3l-ecommerce-main">
          <div className="ecom-contenthny py-5">
            <div className="container py-lg-5">
              <h3 className="hny-title mb-0 text-center">Shop With <span>Us</span></h3>
              <p className="text-center">Handpicked Favourites just for you</p>
              <div className="ecom-products-grids row mt-lg-5 mt-3">

                {this.props.products.map((item) =>
                  <div className="col-lg-3 col-6 product-incfhny mt-4">
                    <div className="product-grid2 transmitv">
                      <div className="product-image2">
                        <a href="#">
                          <img className="pic-1 img-fluid" src={"assets/images/" + item.image} />
                          <img className="pic-2 img-fluid" src={"assets/images/" + item.image} />
                        </a>
                        <ul className="social">
                          <li><a href="#" data-tip="Quick View"><span className="fa fa-eye"></span></a></li>

                          <li><a href="#" data-tip="Add to Cart"><span className="fa fa-shopping-bag"></span></a>
                          </li>
                        </ul>
                        <div className="transmitv single-item">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input type="hidden" name="transmitv_item" value="Women Maroon Top" />
                            <input type="hidden" name="amount" value="899.99" />
                            <button type="submit" className="transmitv-cart ptransmitv-cart add-to-cart">Add to Cart</button>
                          </form>
                        </div>
                      </div>
                      <div className="product-content">
                        <h3 className="title"><a href="#">{item.name}</a></h3>
                        <span className="price"><del>${item.price}</del>{item.price - item.price * item.discount / 100}</span>
                      </div>
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
const mapStateToProps = state => ({
  products: state.productStore.product
})

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchProduct}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Products);