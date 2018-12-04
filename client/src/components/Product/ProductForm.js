//used for admin to add or edite product information
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import {SHOPPING_CART} from "../../actions/types";
import {withRouter} from 'react-router-dom';

class ProductForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {productId} = this.props.match.params
        this.props.fetchAProduct(productId);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    handleSubmit(event){
        const {productForm} = this.props.productForm;
        let cartProduct = {
            product:productForm,
            quantity:this.state.quantity
        };
        const id = productForm.productId;
        // this.props.addToShoppingCart(cartProduct,history);
        const cart = localStorage.getItem(SHOPPING_CART);
        // console.log(cart);
        if (cart===null){
            const cartProducts = new Map();
            cartProducts.set(id,cartProduct);
            localStorage.setItem(SHOPPING_CART, JSON.stringify([...cartProducts]));
        }else{
            const cartProducts = new Map(JSON.parse(cart));
                if (cartProducts.has(id)){
                    const curProduct = cartProducts.get(id);
                    cartProduct.quantity = parseInt(cartProduct.quantity)  + parseInt(curProduct.quantity);
            }
            cartProducts.set(id,cartProduct);
            localStorage.setItem(SHOPPING_CART, JSON.stringify([...cartProducts]));
        }
        console.log(localStorage.getItem(SHOPPING_CART));
        const{history} = this.props;
        history.push('/shoppingcart');
    }

    render(){
        const {productForm} = this.props.productForm;
        const {quantity} = this.state;
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
                    </div>
                </div>
                <div className="col s8 ">
                    <div className="card large darken-1">
                        <div className="card-content black-text">
                            <span className="card-title"><b>{productForm.name}</b></span>
                            <p><b>By {productForm.store}</b></p>
                            <h6><b>Price:</b>{productForm.price}</h6>
                            <h6><b>Inventory amount:</b>{productForm.amount}</h6>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea" name={'quantity'} value={quantity} onChange={this.handleChange}></textarea>
                                            <label htmlFor="textarea1" ><b>Quantity</b></label>
                                        </div>
                                        <a className="waves-effect waves-light btn" onClick ={this.handleSubmit}>Add to Cart
                                            <i className="material-icons right" onClick={this.handleSubmit}>add_shopping_cart</i>
                                        </a>
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

export default connect(mapStatToProps,actions)(withRouter(ProductForm));