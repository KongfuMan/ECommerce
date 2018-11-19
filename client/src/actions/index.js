import axios from 'axios'
import {AUTHENTICATED,UNAUTHENTICATED,AUTHENTICATION_ERROR} from "./types";


async function getJwt(){
    const token = await localStorage.getItem('user_token');
    const authStr = 'Bearer '.concat(token);
    return {headers:{'Authorization': authStr}};   //attach this jwt to each request
}

//action creators
export const authenticateUser = ()=>
    async (dispatch) => {
        // console.log("fetch user action creator");
        try{
            const jwtHeader = await getJwt();
            await axios.get('/user/authenticate',jwtHeader);
            //dispatch(action) for each reducer, each reducer
            //will deal with the action based on their action.type
            dispatch({type: AUTHENTICATED});
        }catch (error){
            console.log('Authenticate error',error.response.status);
            dispatch({type: AUTHENTICATION_ERROR, payload: 'Authentication fails'});
        }
    };

export const signin = (username, password) =>
    async (dispatch) => {
        console.log("Sign in action creator");
        try{
            const user = await axios.post('/user/signin',{'username':username, 'password':password});
            if (user){
                console.log('user:', user);
                localStorage.setItem('user_token', user.data);
                dispatch({type: AUTHENTICATED});
            }
        }catch (error){
            console.log("Signin fails, error:" , error.response);
            dispatch({type: AUTHENTICATION_ERROR, payload: 'Authentication fails'});
        }
    }

export const signup = (signupForm) =>
    async (dispatch) => {
        try{
            const user = await axios.post('/user/signup',JSON.stringify(signupForm));
            localStorage.setItem('user_token', user.data);
            dispatch({type: AUTHENTICATED});
        }catch(error){
            console.log("Signup fails, error:" , error);
        }
    }

export const signout = () =>
    async (dispatch) => {
        try{
            await axios.get('user/signout');
            localStorage.removeItem('user_token');
            dispatch({type: UNAUTHENTICATED});
        }catch (error){
            console.log("Signout fails, error:" , error);
        }
    }
