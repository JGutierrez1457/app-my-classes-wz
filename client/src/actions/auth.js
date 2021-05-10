import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
export const signin = (dataUser)=>async (dispatch)=>{
    try {
        const { data } = await api.signIn(dataUser);
        const message = data.message;
        delete data.message;


        dispatch({
            type:AUTH,
            data
        })
        return message;
    } catch (error) {
        return error.response.data?.message ;
    }
}
export const signup = (dataUser)=> async (dispatch)=>{
    try {
        const { data } = await api.signUp(dataUser);
        const message = data.message;
        delete data.message;
        dispatch({
            type:AUTH,data
        })
        return message;
    } catch (error) {
        return error.response.data?.message;
    }
}