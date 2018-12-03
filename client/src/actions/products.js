import {FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE} from "./types";
import {FETCH_ORDERS_REQUEST, FETCH_ORDERS_FAILURE, FETCH_ORDERS_SUCCESS} from "./types";
import axios from "axios/index";



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
            const products = await axios.get('/products');
            dispatch(fetchProductsSucess(products));
        }catch (error){
            dispatch(fetchProductsFail(error));
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
