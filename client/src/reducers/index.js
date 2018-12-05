import {combineReducers} from 'redux'
import authReducer from "./authReducer";
import productListReducer from './productListReducer';
import productFormReducer from './productFormReducer';
import shoppingCart from './shoppingcart'
import orderReducer from './orderReducer'


export default combineReducers({
    auth : authReducer,
    productList: productListReducer,
    productForm: productFormReducer,
    shoppingCart: shoppingCart,
    order:orderReducer
});
