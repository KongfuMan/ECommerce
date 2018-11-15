import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'


class Signup extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <img class="responsive-img" src="cool_pic.jpg" alt=''/>
                <h2 align="center">Signup</h2>
                <form name="form">
                    <div className={'form-group'}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstName">Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit
                            <i class="material-icons right">send</i>
                        </button>
                        <Link to="/signin">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return {
//
//     }
// }

export default connect(null,actions)(Signup);