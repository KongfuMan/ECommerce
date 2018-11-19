import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'qwer',
            password: '123',
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
        if (username && password){  //send to action creator-->send to server-->get token-->save token to redux
            console.log("handleSubmit:  " , this.state);
            this.props.signin(username,password);
        }
        // console.log(this.props);
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="container">
                <h2 align="center">Signin</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name={'username'} value={username} onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name={'password'} value={password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="waves-effect waves-light btn-small" >Login
                            <i className="material-icons right">arrow_forward</i>
                        </button>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

//pass a state to props of Signin Component
// function mapStateToProps(state) {
//     return {
//         loggingIn : state.authentication
//     };
// }

export default connect(null,actions)(Signin);