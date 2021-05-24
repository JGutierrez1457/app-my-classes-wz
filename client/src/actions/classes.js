import * as api from '../api';
import { GET_ALL, CREATE, DELETE, EDIT, MY_CLASSES, MY_CLASS_CREATE, MY_CLASS_DELETE, MY_CLASS_EDIT } from '../constants/actionTypes';

export const getClasses = ()=>async (dispatch)=>{
    try {
        const { data } = await api.getClasses();
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
export const myClasses = ()=>async (dispatch)=>{
    try {
        const { data } = await api.myClasses();
        dispatch({
            type : MY_CLASSES,
            payload: data
        })
    } catch (error) {
        if(error.response.status===401){
            dispatch({
                type:MY_CLASSES,
                payload:[]
            })
        }
    }
}
export const createClasses = (classes)=>async(dispatch)=>{
    const formData = new FormData();
    formData.append('title',classes.title);
    formData.append('nameWeapon',classes.nameWeapon);
    formData.append('owner',classes.owner);
    formData.append('image',classes.image);
    formData.append('public',classes.public);
    try {
        const { data } = await api.createClasses(formData);
        if(data.public){
            dispatch({
                type:CREATE,
                payload: data
            })
        }
        dispatch({
            type:MY_CLASS_CREATE,
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
        dispatch({
            type:MY_CLASS_DELETE,
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
        dispatch({
            type:MY_CLASS_EDIT,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}
export const likeClass = (id)=>async(dispatch)=>{
    try {
        const {data} = await api.likeClasses(id);
        dispatch({
            type:EDIT,
            payload:data
        })
        dispatch({
            type:MY_CLASS_EDIT,
            payload:data
        })
    } catch (error) {
        console.log(error)
    }
}