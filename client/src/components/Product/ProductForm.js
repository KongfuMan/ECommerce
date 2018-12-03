//used for admin to add or edite product information
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'

class ProductForm extends Component{
    componentDidMount(){
        const {productId} = this.props.match.params
        this.props.fetchAProduct(productId);
    }

    render(){
        const {productForm} = this.props.productForm
        return(
            <div className="row">
                <div className="col s4 ">
                    <div className="card large">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://images-na.ssl-images-amazon.com/images/I/81Z7IM5RLeL._SL1500_.jpg" alt=''/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-3">BestSellers<i className="material-icons mdi-navigation-more-vert right"></i></span>
                            <p><a href="/">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-3">Card Title<i className="material-icons right mdi-navigation-close"></i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>

                <div className="col s8 ">
                    <div className="card large darken-1">
                        <div className="card-content black-text">
                            <span className="card-title"><b>{productForm.name}</b></span>
                            <p><b>By {productForm.store}</b></p>

                            <h6><b>Price:</b>{productForm.price}</h6>


                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                                            <label htmlFor="textarea1"><b>Quantity</b></label>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action">Add to Cart
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </div>
                                </form>
                            </div>





                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStatToProps = (productForm)=>{
    return{productForm}
}

export default connect(mapStatToProps,actions)(ProductForm);