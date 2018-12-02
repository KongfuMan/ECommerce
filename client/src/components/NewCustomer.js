import React, {Component} from 'react';


class NewCustomer extends Component{
    render(){
        return(
            <div className="container">
                <blockquote>
                    Sign up to be a new customer.
                </blockquote>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="First Name" id="first_name" type="text" className="validate"/>
                                    <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate"/>
                                    <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="userName" type="text" className="validate"/>
                                <label htmlFor="userName">UserName</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                    <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                    <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="address" type="text" className="validate"/>
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                    </form>
                    <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Sign Up</a>
                </div>
            </div>
        );
    }
}
export default NewCustomer;