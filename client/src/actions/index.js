import axios from 'axios'
import {FETCH_USER} from "./types";


//action creators
export const fetchUser = ()=>
    async (dispatch) => {
        console.log("fetch user action creator");
        try{
            const res = await axios.get('/user/authenticate');
            //dispatch(action) for each reducer, each reducer
            //will deal with the action based on their action.type
            dispatch({type: FETCH_USER, payload: res.data});
        }catch (error){
            console.log('Authenticate error',error);
        }
    };

export const signin = (username, password) =>
    async (dispatch) => {
        console.log("Sign in action creator");
        try{
            const user = await axios.post('/user/signin',JSON.stringify({userName:username, password:password}));
            console.log(user);
            if (user){
                localStorage.setItem('user', user);
                dispatch({type:user, payload:user});
            }
        }catch (error){
            console.log("Signin fails, error:" , error);
        }
    }

export const signup = (signupForm) =>
    async (dispatch) => {
        try{
            const user = await axios.post('/user/signup',JSON.stringify(signupForm));
        }catch(error){
            console.log("Signup fails, error:" , error);
        }
    }