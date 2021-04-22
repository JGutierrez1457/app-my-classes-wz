import { AUTH, LOGOUT } from '../constants/actionTypes';
import * as api from '../api';
export const signin = (dataUser,history)=>async (dispatch)=>{
    try {
        const { data } = await api.signIn(dataUser);
        dispatch({
            type:AUTH,
            data
        })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (dataUser,history)=>(dispatch)=>{
    try {
        const { data } = await api.signUp(dataUser);
        dispatch({
            type:AUTH,data
        })
        history('/');
    } catch (error) {
        console.log(error);
    }
}