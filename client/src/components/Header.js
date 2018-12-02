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
                    <a href="/" className="brand-logo">EMart</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/shopping">Shopping Cart</Link></li>
                    </ul>
                </div>
                <div class="nav-wrapper">
                    <form>
                        <div className="input-field center col s1">
                            <input id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                        </div>
                    </form>
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