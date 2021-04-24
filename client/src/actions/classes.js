import * as api from '../api';
import { GET_ALL, CREATE, DELETE, EDIT } from '../constants/actionTypes';

export const getClasses = ()=>async (dispatch)=>{
    try {
        const { data } = await api.getClasses();
        console.log(data);
        dispatch({
            type : GET_ALL,
            payload: data
        })
    } catch (error) {
        if(error.response.status===401){
            dispatch({
                type:GET_ALL,
                payload:[]
            })
        }
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
export const deleteClass = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.deleteClasses(id);
        dispatch({
            type:DELETE,
            payload:data
        })
    } catch (error) {
        console.log(error)        
    }
}
export const updateClass = (id,dataEdit)=>async(dispatch)=>{
    try {
        const { data } = await api.updateClasses(id,dataEdit);
        dispatch({
            type:EDIT,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}