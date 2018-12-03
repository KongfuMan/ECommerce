import React, {Component} from 'react';


class ShoppingCart extends Component{
    render(){
        return(
            <div>
                <blockquote>
                    Your shopping cart.
                </blockquote>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s3">
                                <input disabled value="Product Name" id="disabled1" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled1"></label>
                            </div>
                            <div className="input-field col s3">
                                <input disabled value="Price" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>
                            <div className="input-field col s3">
                                <input placeholder="Amount" id="Amount1" type="number" className="validate"/>
                                <label htmlFor="Amount1"></label>
                            </div>
                            <div className="input-field col s3">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s3">
                                <input disabled value="Product Name" id="disabled3" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled3"></label>
                            </div>
                            <div className="input-field col s3">
                                <input disabled value="Price" id="disabled4" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled4"></label>
                            </div>
                            <div className="input-field col s3">
                                <input placeholder="Amount" id="Amount2" type="number" className="validate"/>
                                <label htmlFor="Amount2"></label>
                            </div>
                            <div className="input-field col s3">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s3">
                                <input disabled value="Product Name" id="disabled5" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled5"></label>
                            </div>
                            <div className="input-field col s3">
                                <input disabled value="Price" id="disabled6" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled6"></label>
                            </div>
                            <div className="input-field col s3">
                                <input placeholder="Amount" id="Amount3" type="number" className="validate"/>
                                <label htmlFor="Amount3"></label>
                            </div>
                            <div className="input-field col s3">
                                <a className="waves-effect waves-teal btn-flat">Delete</a>
                            </div>
                        </div>
                    </form>
                    <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Buy</a>
                    <a className="waves-effect waves-light btn" style={{'margin-left': '10px'}}><i className="material-icons left">cloud</i>Save and quit</a>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;