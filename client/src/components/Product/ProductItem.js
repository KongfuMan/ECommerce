import React, {Component} from 'react';


class ProductItem extends Component{
    render(){
        return(
            <div className="container">
                <blockquote>
                    ProductItems
                </blockquote>
                <div className="row">
                    <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src="http://materializecss.com/images/office.jpg"/>
                                    <span className="card-title">Product name</span>
                            </div>
                            <div className="card-content">
                                <p>Here is the introduction of the product.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">Link to the store</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="number" type="number" className="validate"/>
                            <label htmlFor="number">Quantities</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input disabled value="This is a product" id="disabled" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled">Item</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input disabled value="The name of the store" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2">Shop Name</label>
                            </div>
                        </div>
                    </form>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input disabled value="The quantities of items in store" id="disabled3" type="text"
                                           className="validate"/>
                                    <label htmlFor="disabled3">Items left</label>
                                </div>
                                <div className="input-field col s6">
                                    <input disabled value="The price of the product" id="disabled4" type="text"
                                           className="validate"/>
                                    <label htmlFor="disabled4">Price</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <a className="waves-effect waves-light btn-large"><i className="material-icons left">cloud</i>Save to cart</a>
                </div>
            </div>
        );
    }
}
export default ProductItem;