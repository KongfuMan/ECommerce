import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SHOPPING_CART} from "../actions/types";
import {Link} from 'react-router-dom';

class ShoppingCart extends Component{
    constructor(props){
        super(props);
        const cart = localStorage.getItem(SHOPPING_CART);
        if (cart){
            const products = JSON.parse(cart);
            this.state = {products: products};
        }else{
            this.state = {products: []}
        }
    }

    handleDelete(prodId){
        const{products} = this.state;
        const res = products.filter(prod=>{
            const id = prod[0];
            return id != prodId
        })
        this.setState({products:res});
        localStorage.setItem(SHOPPING_CART, JSON.stringify([...new Map(res)]))
    }

    handlCheckout(){
        // console.log(this.props);
        // const {history} = this.props;
        // history.push('/order');
    }

    renderContent(){
        const {products} = this.state;
        if (!products || products.length === 0){
            return(
                <div>
                    <h3 className='center'>You don't have any items in your cart</h3>
                </div>
            );
        }
        return products.map(prod=>{
            const id = prod[0];
            const {product,quantity} = prod[1];
            return (
                <div className="row" key={id}>
                    <div className="input-field col s3">
                        <input disabled value={product.name} id="disabled1" type="text"
                               className="validate"/>
                        <label htmlFor="disabled1"></label>
                    </div>
                    <div className="input-field col s3">
                        <input disabled value={product.price} id="disabled2" type="text"
                               className="validate"/>
                        <label htmlFor="disabled2"></label>
                    </div>
                    <div className="input-field col s3">
                        <input disabled id="Amount1" type="number" className="validate" value={quantity}/>
                        <label htmlFor="Amount1"></label>
                    </div>
                    <div className="input-field col s3">
                        <a className="waves-effect waves-teal btn-flat" onClick={()=>this.handleDelete(id)}>Delete</a>
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
                    <Link to={'/order'} className="waves-effect waves-light btn left" onClick={this.handlCheckout}>
                        <i className="material-icons right">attach_money</i>Checkout</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({shoppingCart})=>{
    return{shoppingCart}
}

export default connect(mapStateToProps)(ShoppingCart);