import { AUTH } from '../constants/actionTypes';
import * as api from '../api';
export const signin = (dataUser)=>async (dispatch,reject)=>{
    try {
        const { data } = await api.signIn(dataUser);

        dispatch({
            type:AUTH,
            data
        })
        return 'authenticated';
    } catch (error) {
        return error.response.data?.message ;
    }
}
export const signup = (dataUser)=> async (dispatch)=>{
    try {
        const { data } = await api.signUp(dataUser);
        dispatch({
            type:AUTH,data
        })
    } catch (error) {
        console.log(error);
    }
}