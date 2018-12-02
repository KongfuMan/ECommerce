import React, {Component} from 'react';


class NewProduct extends Component{
    render(){
        return(
            <div className="container">
                <blockquote>
                    Add new product to store.
                </blockquote>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Product Name" id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">Product Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="icon_prefix" type="number" className="validate"/>
                                <label htmlFor="icon_prefix">Quantity</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="Price" type="text" className="validate"/>
                                <label htmlFor="Price">Price</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="Introduction" type="text" className="validate"/>
                                <label htmlFor="Introduction">Introduction</label>
                            </div>
                        </div>
                    </form>
                    <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Add</a>
                </div>
            </div>
        );
    }
}
export default NewProduct;