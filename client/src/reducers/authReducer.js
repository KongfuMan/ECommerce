import {AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR} from '../actions/types';


export default function(state = null, action){
    switch (action.type){
        case AUTHENTICATED:    //only responsible for FETCH_USER action
            return Object.assign({},state,{authenticated: true});
        case UNAUTHENTICATED:
            return Object.assign({},state,{authenticated: false});
        case AUTHENTICATION_ERROR:
            return Object.assign({},state,{error: action.payload});;
        default:
            return state;
    }
};