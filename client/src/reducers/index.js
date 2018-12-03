import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import productListReducer from './productListReducer'
import productFormReducer from './productFormReducer'


export default combineReducers({
    auth : authReducer,
    productList: productListReducer,
    productForm: productFormReducer
});
