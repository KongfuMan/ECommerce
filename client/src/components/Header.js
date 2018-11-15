import React, {Component} from 'react';
import {connect} from 'react-redux'

class Header extends Component{
    renderContent(){
        console.log(this.props.auth);
        switch (this.props.auth){
            case null:
                return(
                    <li key="1"><a href="/signin">Sign In</a></li>
                );
            case false:
                return(
                    <li key="1"><a href="/signin">Sign In</a></li>
                );
            default:
                return (
                    <li key="1"><a href="/signin">Sign In</a></li>
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

function mapStateToProps(state){
    return {auth : state.auth};
};

export default connect(mapStateToProps)(Header);