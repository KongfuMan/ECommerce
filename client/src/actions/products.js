import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE} from "./types";
import {FETCH_ORDERS_REQUEST, FETCH_ORDERS_FAILURE, FETCH_ORDERS_SUCCESS,FETCH_A_PRODUCT} from "./types";
import {SEARCH_PRODUCTS} from './types';
import axios from "axios/index";
import {getJwt} from './jwtHeader';

function fetchProductsRequest() {
    return {
        type: FETCH_PRODUCTS_REQUEST,
        payload: null
    }
}

function fetchProductsSucess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products.data
    }
}

function fetchProductsFail(error){
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: null,
        error: error
    }
}

export const fetchProducts = ()=>
    async (dispatch)=>{
        dispatch(fetchProductsRequest());
        try{
            const products = await axios.get('/api/product/list');
            dispatch(fetchProductsSucess(products));
        }catch (error){
            dispatch(fetchProductsFail(error));
        }
    }

export const fetchAProduct = (productId)=>
    async (dispatch)=>{
        try{
            const product = await axios.get('/api/product/one/'+productId);
            dispatch({type:FETCH_A_PRODUCT,payload:product.data});
        }catch (error){
            console.log(error);
        }
    }

function fetchOrdersRequest(){
    return {
        type: FETCH_ORDERS_REQUEST,
        payload:null
    }
}

function fetchOrdersSuccess(orders){
    return {
        type: FETCH_ORDERS_SUCCESS,
        payload:orders.data
    }
}

function fetchOrdersFailure(error){
    return {
        type: FETCH_ORDERS_FAILURE,
        payload:null,
        error:error
    }
}

export const fetchOrder = ()=>
    async (dispatch)=>{
        dispatch(fetchOrdersRequest());
        try{
            const orders = await axios.get('/user/order');
            dispatch(fetchOrdersSuccess(orders))
        }catch(error){
            dispatch(fetchOrdersFailure(error));
        }
    }

export const searchProducts =(input)=>
    async (dispatch)=>{
        try{
            const searchResult = await axios.get('/api/product/search/'+input);
            dispatch({type:SEARCH_PRODUCTS, payload:searchResult.data});
            // console.log(searchResult.data);
        }catch (error){
            // alert('Search product failed, try again');
            console.log(error);
        }
    }