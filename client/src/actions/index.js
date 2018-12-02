import axios from 'axios'
import {USER_TOKEN} from './types'
import {AUTH_REQUEST,AUTH_SUCESS,AUTH_FAILURE} from "./types";
import {SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE} from "./types";
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from "./types";
import {SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNOUT_FAILURE} from "./types";
import {FETCH_PRODUCTS} from "./types";

function authRequest() {
    return {
        type: AUTH_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function authReceive() {
    return {
        type: AUTH_SUCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

function authError() {
    return {
        type: AUTH_FAILURE,
        isFetching: false,
        isAuthenticated: false,
    }
}

//create a action
function signinRequest() {
    return {
        type: SIGNIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function signinReceive() {
    return {
        type: SIGNIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

function signinError(error) {
    return {
        type: SIGNIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error:error
    }
}

function signupRequest() {
    return {
        type: SIGNUP_REQUEST,
        isFetching: true,
        isAuthenticated: false,
    }
}

function signupReceive() {
    return {
        type: SIGNUP_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
    }
}

function signupError(error) {
    return {
        type: SIGNUP_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error: error
    }
}

function signoutRequest() {
    return {
        type: SIGNOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true,
    }
}

function signoutReceive() {
    return {
        type: SIGNOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
    }
}

function signoutError(error) {
    return {
        type: SIGNOUT_FAILURE,
        isFetching: false,
        isAuthenticated: true,
        error: error
    }
}

async function getJwt(){
    const token = await localStorage.getItem(USER_TOKEN) || '';
    const authStr = 'Bearer '.concat(token);
    return {headers:{'Authorization': authStr}};   //attach this jwt to each request
}

//action creators
export const authenticateUser = ()=>
    async (dispatch) => {
        // console.log("authenticateUser user action creator");
        dispatch(authRequest());
        try{
            const jwtHeader = await getJwt();
            await axios.get('/user/authenticate',jwtHeader);
            //dispatch(action) for each reducer, each reducer
            //will deal with the action based on their action.type
            dispatch(authReceive());
        }catch (error){
            // console.log('Authenticate error',error.response);
            dispatch(authError());
        }
    };

export const signin = (username, password) =>
    async (dispatch) => {
        console.log("Sign in action creator");
        dispatch(signinRequest())
        try{
            const user = await axios.post('/user/signin',{'username':username, 'password':password});
            if (user){
                // console.log('user:', user);
                localStorage.setItem(USER_TOKEN, user.data);
                dispatch(signinReceive());
            }
        }catch (error){
            // console.log("Signin fails, error:" , error.response);
            dispatch(signinError(error));
        }
    }

export const signup = (signupForm) =>
    async (dispatch) => {
        dispatch(signupRequest());
        try{
            // console.log(signupForm);
            const user = await axios.post('/user/signup',signupForm);
            localStorage.setItem(USER_TOKEN, user.data);
            dispatch(signupReceive());
        }catch(error){
            // console.log("Signup fails, error:" , error);
            dispatch(signupError(error))
        }
    }

export const signout = () =>
    async (dispatch) => {
        dispatch(signoutRequest());
        try{
            // await axios.get('/user/signout');
            localStorage.removeItem(USER_TOKEN);
            dispatch(signoutReceive());
        }catch (error){
            // console.log("Signout fails, error:" , error);
            dispatch(signoutError(error));
        }
    }



// function fetchProductsRequest() {
//     return {
//         type: FETCH_PRODUCTS_REQUEST,
//         isFetching: true,
//         isF: false,
//     }
// }
//
// function fetchProductsReceive() {
//     return {
//         type: FETCH_PRODUCTS_SUCCESS,
//         isFetching: false,
//         isAuthenticated: true,
//     }
// }
//
// function fetchProductsError(error) {
//     return {
//         type: FETCH_PRODUCTS_FALURE,
//         isFetching: false,
//         isAuthenticated: false,
//         error:error
//     }
// }

function fetchProductsSucess(products) {
    return {
        type: FETCH_PRODUCTS,
        payload: products.data
    }
}

function fetchProductsFail(){
    return {
        type: FETCH_PRODUCTS,
        payload: null
    }
}

export const fetchProducts = ()=>
    async (dispatch)=>{
        try{
            const products = await axios.get('/products');
            dispatch(fetchProductsSucess(products))
        }catch (error){
            dispatch(fetchProductsFail())
        }
    }


