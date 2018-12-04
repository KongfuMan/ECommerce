import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import {Link} from 'react-router-dom'

class Header extends Component{
    renderContent(){
        const{isAuthenticated} = this.props.auth;
        console.log(isAuthenticated);
        switch (isAuthenticated){
            case true:
                return(
                    <li key="1"><button className='link-button' onClick={this.props.signout}>Sign out</button></li>
                );
            default:
                return (
                    <li key="1"><Link to="/signin">Sign In</Link></li>
                );
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <Link to={'/'} className="brand-logo">EMart</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/shoppingCart">Shopping Cart</Link></li>
                        <li><Link to="/UserDashboard">My account</Link></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">zoom_in</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label htmlFor="icon_prefix">Click here to search</label>
                    </div>
                    <div className="input-field col s2">
                        <a className="waves-effect waves-light btn">Search</a>
                    </div>
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