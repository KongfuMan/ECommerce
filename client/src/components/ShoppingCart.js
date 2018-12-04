import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SHOPPING_CART} from "../actions/types";

class ShoppingCart extends Component{

    handleDelete(prod){

    }

    renderContent(){
        const produts = [];
        produts.push(this.props.shoppingCart);
        // const{product,quantity} = this.props.shoppingCart;
        // const products = JSON.parse(localStorage.getItem(SHOPPING_CART));
        return produts.map(prod=>{
            return(
                <div className="row">
                    <div className="input-field col s3">
                        <input disabled value={prod.product.name} id="disabled1" type="text"
                               className="validate"/>
                        <label htmlFor="disabled1"></label>
                    </div>
                    <div className="input-field col s3">
                        <input disabled value={prod.product.price} id="disabled2" type="text"
                               className="validate"/>
                        <label htmlFor="disabled2"></label>
                    </div>
                    <div className="input-field col s3">
                        <input placeholder={prod.quantity} id="Amount1" type="number" className="validate"/>
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
                    <a className="waves-effect waves-light btn right"><i className="material-icons left">cloud</i>Checkout</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({shoppingCart})=>{
    return{shoppingCart}
}

export default connect(mapStateToProps)(ShoppingCart);