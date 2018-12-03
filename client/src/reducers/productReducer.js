import {FETCH_PRODUCTS_SUCCESS,FETCH_ORDERS_FAILURE} from '../actions/types'

export default function (state = {allproducts:null}, action) {
    switch (action.type){
        case FETCH_PRODUCTS_SUCCESS:
            return Object.assign({},state,{
                allproducts:action.payload
            });
        case FETCH_ORDERS_FAILURE:
            return Object.assign({},state,{
                allproducts:null
            });
        default:
            return state;
    }
}