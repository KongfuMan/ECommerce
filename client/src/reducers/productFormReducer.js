import {FETCH_A_PRODUCT} from '../actions/types'

export default function (state=[], action) {
    switch (action.type){
        case FETCH_A_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}