import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Customer1',
            password: '123',
            email:'',
            firstname:'',
            lastname:'',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const{name, value} = event.target;  //destructuring
        this.setState({[name]:value});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        // console.log("Signup_handleSubmit:  " , this.state);
        if (username && password){  //send to action creator-->send to server-->get token-->save token to redux
            // console.log("handleSubmit:  " , this.state);
            this.props.signup(this.state);
        }
        // console.log(this.props);
    }

    render() {
        const { username, password, email, firstname,lastname,submitted } = this.state;
        if (this.props.auth.isAuthenticated){
            return(
                <Redirect to='/'/>
            );
        }
        return (
            <div className="col-md-6 col-md-offset-3">
                <img className="responsive-img" src="cool_pic.jpg" alt=''/>
                <h2 align="center">Signup</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name={'username'} value={username} onChange={this.handleChange}/>
                        {submitted && !username &&
                            <div className="help-block red-text">Username is required</div>
                        }
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name={'password'} value={password} onChange={this.handleChange}/>
                        {submitted && !password &&
                            <div className="help-block red-text">Password is required</div>
                        }
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstName">Email</label>
                        <input type="email" className="form-control" name={'email'} value={email} onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name={'fistname'} value={firstname} onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name={'lastname'} value={lastname} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        <Link to="/signin">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
    return {
        auth
    }
}

export default connect(mapStateToProps,actions)(Signup);