import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as actions from '../actions/index';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {input: ''};

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        const{name,value} = event.target;
        this.setState({[name]:value});
    }

    renderContent(){
        const{isAuthenticated} = this.props.auth;
        console.log('isAuthenticated',isAuthenticated);
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
                        <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                        <li><Link to="/dashboard">My account</Link></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="input-field col s10">
                        <i className="material-icons prefix">zoom_in</i>
                        <input id="icon_prefix" type="text" placeholder={'Click here to search'} className="validate" name='input' value={this.state.input} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field col s2">
                        <Link to={'/searchresult/'+ this.state.input} className="waves-effect waves-light btn" >Search</Link>
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

export default connect(mapStateToProps,actions)(Header);
