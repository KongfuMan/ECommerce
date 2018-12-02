import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../actions/index';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import AdminDashboard from './Admin/AdminDashboard';


class App extends Component {
    componentDidMount(){
        this.props.authenticateUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header></Header>
                        <Route exact={true} path="/" component={Home}></Route>
                        <Route path='/signin' component={Signin}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        <Route path='/admin' component={AdminDashboard}></Route>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

//pass a slice of state data into App.props
// const mapStateToProps = state => {
//     return{
//         auth : state.auth
//     }
// }

//update the state data by App
// const mapDispatchToProps = disptch => {
//      return {
//          propsName : ()=>dispatch(action)
//      }
// }

export default connect(null,actions)(App);
