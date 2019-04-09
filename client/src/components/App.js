import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import * as actions from '../actions/index';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import Order from './Order';
import ProductForm from "./Product/ProductForm";
import ShoppingCart from "./ShoppingCart";
import NewStore from "./NewStore";
import Dashboard from "./Dashboard";
import EditStore from "./EditStore";
import EditProduct from "./Manager/EditProduct";
import Payment from "./Payment";
import ProductItem from "./Product/ProductItem";
import SearchRes from './SearchRes';
import {NotFound} from "./Error/404";
import {NotAuthorized} from "./Error/405";


class App extends Component {
    componentDidMount(){
        this.props.authenticateUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact={true} path="/" component={Home}></Route>
                        <Route path='/signin' component={Signin}></Route>
                        <Route path='/signup' component={Signup}></Route>
                        <Route path='/order' component={Order}></Route>
                        <Route path='/productform/:productId' exact component={ProductForm}></Route>
                        <Route path='/ShoppingCart' component={ShoppingCart}></Route>
                        <Route path='/NewStore' component={NewStore}></Route>
                        <Route path='/Dashboard' component={Dashboard}></Route>
                        <Route path='/EditStore' component={EditStore}></Route>
                        <Route path='/EditProduct' component={EditProduct}></Route>
                        <Route path='/Payment' component={Payment}></Route>
                        <Route path='/ProductItem' component={ProductItem}></Route>
                        <Route path='/Searchresult/:productName' exact component={SearchRes} />
                        <Route path='/page-not-found' exact component={NotFound}/>
                        <Route path='/not-authorized' exact component={NotAuthorized}/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null,actions)(App);
