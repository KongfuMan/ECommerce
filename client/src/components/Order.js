import React, {Component} from 'react';
import {connect} from 'react-redux'
import {SHOPPING_CART} from "../actions/types";
import {withRouter} from 'react-router-dom';
import * as actions from '../actions/index';

class Order extends Component{
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
    componentWillUnmount() {
        if (!this.props.auth.isAuthenticated){
            const {history} = this.props;
            history.push('/signin');
        }
    }

    componentDidMount() {
        this.props.fetchOrder();
    }

    renderContent(){

    }
    render(){
        return(
            <div>
                <div >
                    <a className="btn-large waves-effect waves-light">Order</a>
                </div>

                <div>
                    <blockquote>
                        Your Order History as Follows.
                    </blockquote>
                </div>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s2">
                                <input disabled value="ORDER#" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Product#" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s2">
                                <input disabled value="Amount" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <input disabled value="Date" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <div className="input-field col s2">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({auth})=>{
    return {auth : auth};
}

export default connect(mapStateToProps,actions)(withRouter(Order));