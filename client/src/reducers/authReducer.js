import {AUTH_REQUEST, AUTH_SUCESS, AUTH_FAILURE} from '../actions/types';
import {SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAILURE} from '../actions/types';
import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../actions/types';
import {SIGNOUT_REQUEST, SIGNOUT_SUCCESS, SIGNOUT_FAILURE} from '../actions/types';


// must set initial state
export default function(state = {
    isFetching: false,
    isAuthenticated:false
}, action){
    switch (action.type){
        case AUTH_REQUEST:    //only responsible for FETCH_USER action
            return Object.assign({},state,{
                isFetching: true,
                isAuthenticated: false
            });
        case AUTH_SUCESS:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: true
            });
        case AUTH_FAILURE:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: false
            });
        case SIGNIN_REQUEST:
            return Object.assign({},state,{
                isFetching: true,
                isAuthenticated: false
            });
        case SIGNIN_SUCCESS:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: true
            });
        case SIGNIN_FAILURE:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: false
            });
        case SIGNUP_REQUEST:
            return Object.assign({},state,{
                isFetching: true,
                isAuthenticated: false
            });
        case SIGNUP_SUCCESS:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: true
            });
        case SIGNUP_FAILURE:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: false
            });
        case SIGNOUT_REQUEST:
            return Object.assign({},state,{
                isFetching: true,
                isAuthenticated: true
            });
        case SIGNOUT_SUCCESS:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: false
            });
        case SIGNOUT_FAILURE:
            return Object.assign({},state,{
                isFetching: false,
                isAuthenticated: true
            });
        default:
            return state;
    }
};