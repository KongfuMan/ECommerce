import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component{
    renderContent(){
        const{isAuthenticated} = this.props.auth;
        // const{auth} = this.props;
        // const{isAuthenticated} = auth;
        console.log('this.props.isAuthenticated: ', isAuthenticated);
        switch (isAuthenticated){
            case true:
                return(
                    <li key="1"><a onClick={this.props.signout}>Sign out</a></li>
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
                        <li><a href="/">Order</a></li>
                        <li><a href="/">Shopping Cart</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//pass a slice of state data to props
const  mapStateToProps = ({auth})=>{
    return {auth : auth};
};

// const mapDispatchToProps = (disptch) => {
//      return {
//          propsName : ()=>dispatch(action)
//      }
// }

export default connect(mapStateToProps,actions)(Header);