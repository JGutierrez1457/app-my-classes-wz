import * as api from '../api';
import { GET_ALL, CREATE } from '../constants/actionTypes';

export const getClasses = ()=>async (dispatch)=>{
    try {
        const { data } = await api.getClasses();
        dispatch({
            type : GET_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}
export const createClasses = (classes)=>async(dispatch)=>{
    try {
        const { data } = await api.createClasses(classes);
        dispatch({
            type:CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}