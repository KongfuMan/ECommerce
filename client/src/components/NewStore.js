import React, {Component} from 'react';


class NewStore extends Component{
    render(){
        return(
            <div className="container">
                <blockquote>
                    Create a new store.
                </blockquote>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="Store Name" id="first_name" type="text" className="validate"/>
                                <label htmlFor="first_name">Store Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate"/>
                                    <label htmlFor="icon_prefix">Manager Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="address" type="text" className="validate"/>
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="Introduction" type="text" className="validate"/>
                                <label htmlFor="Introduction">Introduction</label>
                            </div>
                        </div>
                    </form>
                    <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Create</a>
                </div>
            </div>
        );
    }
}

export default NewStore;