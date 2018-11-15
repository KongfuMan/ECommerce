import {FETCH_USER} from '../actions/types';

export default function(state = null, action){
    switch (action.type){
        case FETCH_USER:    //only responsible for FETCH_USER action
            return action.payload || null;
        default:
            return state;
    }
};