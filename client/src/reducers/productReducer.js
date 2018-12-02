import {FETCH_PRODUCTS} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_PRODUCTS:
            return Object.assign({},state,{
                allproducts:action.payload
            });
        default:
            return state;
    }
}