import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AUTHENTICATED, UNAUTHENTICATED} from "../actions/types";

class Header extends Component{
    renderContent(){
        console.log('this.props.auth', this.props.auth);
        switch (this.props.auth){
            case true:
                return(
                    <li key="1"><a href="/user/signout">Sign out</a></li>
                );
            case null:
                return(
                    <ul>
                        <li key="1"><a href="/user/signin">Sign In(null)</a></li>
                    </ul>
                );
            default:
                return (
                    <li key="1"><a href="user/signin">Sign In(default)</a></li>
                );
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Logo</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">My Order</a></li>
                        <li><a href="/">Shopping Cart</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//pass a slice of state data to props
function mapStateToProps(state){
    return {auth : state.auth};
};

export default connect(mapStateToProps)(Header);