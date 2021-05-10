import { EDIT_EMAIL, AUTH,LOGOUT} from '../constants/actionTypes';
import * as api from '../api'

export const editProfile = (dataProfile)=>async(dispatch)=>{
    try {
        const { data } = await api.editProfile(dataProfile);
        const message = data.message;
        delete data.message;
        dispatch({
            type: AUTH,
            data
        })
        return message ; 
    } catch (error) {
        return error.response.data?.message ;
    }
}

export const editEmail = (dataEmail)=>async (dispatch)=>{

    try {
        const {data} = await api.editEmail(dataEmail);
        const message = data.message;
        delete data.message;
        dispatch({
            type:EDIT_EMAIL,
            data
        })
        return message;
    } catch (error) {
        return error.response.data?.message ;
    }
}
export const editSecurity = (dataSecurity)=>async(dispatch)=>{
    try {
        const { data } = await api.editSecurity(dataSecurity);
        const message = data.message;
        delete data.message;
        return message;
    } catch (error) {
        return error.response.data?.message;
    }
}
export const editAccount = (dataAccount)=>async(dispatch)=>{
    try{
        const { data} = await api.editAccount(dataAccount);
        const message = data.message;
        delete data.message;
        dispatch({
            type:LOGOUT
        })
        return message;
    }catch(error){
        return error.response.data?.message;
    }

}