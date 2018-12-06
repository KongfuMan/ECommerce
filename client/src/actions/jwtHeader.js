import {USER_TOKEN} from "./types";

export const getJwt = async ()=>{
    const token = await localStorage.getItem(USER_TOKEN) || '';
    const authStr = 'Bearer '.concat(token);
    return {headers:{'Authorization': authStr}};   //attach this jwt to each request
}