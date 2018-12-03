import {FETCH_PRODUCTS_SUCCESS} from '../actions/types'

export default function (state=[], action) {
    switch (action.type){
        case FETCH_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}