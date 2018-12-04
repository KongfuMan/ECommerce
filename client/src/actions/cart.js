import {ADD_TO_CART} from './types'

export const addToShoppingCart = (cartProduct, history)=>
    async (dispatch)=>{
        try{
            dispatch({type:ADD_TO_CART, payload:cartProduct})
            history.push('/ShoppingCart');
        }catch(error){
            console.log('Adding product to cart failed!');
        }
    }