import React, {Component} from 'react';
import {Link} from "react-router-dom";


class Dashboard extends Component{
    render(){
        return(

            <div>
                <br/>
                <br/>
                <hr/>
                <Link to="/EditProduct"><hr9><b>Edit Products</b></hr9></Link>
                <hr/>
                <hr9><b>Edit Profile</b></hr9>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s3">
                                <input placeholder="ID#" id="ID" type="text" className="validate"/>
                                <label htmlFor="ID"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="name" id="first_name" type="text" class="validate"/>
                                <label for="first_name"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="name" id="last_name" type="text" className="validate"/>
                                <label htmlFor="last_name"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="UserName" id="username" type="text" className="validate"/>
                                <label htmlFor="username"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="PassWord" id="password" type="text" className="validate"/>
                                <label htmlFor="password"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="Phone#" id="phone" type="text" className="validate"/>
                                <label htmlFor="phone"></label>
                            </div>

                            <div className="input-field col s3">
                                <input placeholder="Email" id="email" type="text" className="validate"/>
                                <label htmlFor="email"></label>
                            </div>

                            <div className="input-field col s3">
                                <input disabled value="Role" id="disabled2" type="text"
                                       className="validate"/>
                                <label htmlFor="disabled2"></label>
                            </div>

                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <button className="btn waves-effect waves-light" type="cancel" name="action">Cancel
                                <i className="material-icons right">send</i>
                            </button>


                        </div>
                    </form>
                </div>
                <hr/>
                <hr9><b>Edit Address</b></hr9>

                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="street" id="street" type="text" className="validate"/>
                                <label htmlFor="street">street</label>
                            </div>

                            <div className="input-field col s6">
                                <input placeholder="city" id="city" type="text" className="validate"/>
                                <label htmlFor="city">city</label>
                            </div>

                            <div className="input-field col s6">
                                <input placeholder="state" id="state" type="text" className="validate"/>
                                <label htmlFor="last_name">state</label>
                            </div>

                            <div className="input-field col s6">
                                <input placeholder="zip#" id="zip" type="text" className="validate"/>
                                <label htmlFor="zip">zip#</label>
                            </div>


                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <button className="btn waves-effect waves-light" type="cancel" name="action">Cancel
                                <i className="material-icons right">send</i>
                            </button>


                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Dashboard;
