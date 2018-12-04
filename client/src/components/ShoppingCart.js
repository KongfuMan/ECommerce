import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SHOPPING_CART} from "../actions/types";

class ShoppingCart extends Component{
    constructor(props){
        super(props);
        const products = JSON.parse(localStorage.getItem(SHOPPING_CART));
        this.state = {products: products};
    }

    handleDelete(prod){
        // const{products} = this.state;

    }

    handlCheckout(){

    }

    renderContent(){
        // const produts = [];
        // produts.push(this.props.shoppingCart);
        // const{product,quantity} = this.props.shoppingCart;
        const{products} = this.state;
        return products.map(prod=>{
            return(
                <div className="row" key={prod[0]}>
                    <div className="input-field col s3">
                        <input disabled value={prod[1].product.name} id="disabled1" type="text"
                               className="validate"/>
                        <label htmlFor="disabled1"></label>
                    </div>
                    <div className="input-field col s3">
                        <input disabled value={prod[1].product.price} id="disabled2" type="text"
                               className="validate"/>
                        <label htmlFor="disabled2"></label>
                    </div>
                    <div className="input-field col s3">
                        <input disabled id="Amount1" type="number" className="validate" value={prod[1].quantity}/>
                        <label htmlFor="Amount1"></label>
                    </div>
                    <div className="input-field col s3">
                        <a className="waves-effect waves-teal btn-flat" onClick={this.handleDelete}>Delete</a>
                    </div>
                </div>
            );
        })
    }

    render(){
        // console.log(this.props.shoppingCart);
        return(
            <div>
                <blockquote>
                    Shopping Cart
                </blockquote>
                <div className="row">
                    <form className="col s12">
                        {this.renderContent()}
                    </form>
                    <a className="waves-effect waves-light btn left" onClick={this.handlCheckout}>
                        <i className="material-icons right">attach_money</i>Checkout</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({shoppingCart})=>{
    return{shoppingCart}
}

export default connect(mapStateToProps)(ShoppingCart);