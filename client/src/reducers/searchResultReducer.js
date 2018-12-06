import {SEARCH_PRODUCTS} from '../actions/types'

export default function(state=[],action){
    switch (action.type){
        case SEARCH_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
}