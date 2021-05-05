import { EDIT_EMAIL, EDIT_PROFILE, EDIT_SECURITY, AUTH} from '../constants/actionTypes';
import * as api from '../api'

export const editProfile = (dataProfile)=>async(dispatch)=>{
    try {
        const { data } = await api.editProfile(dataProfile);
        dispatch({
            type: AUTH,
            data
        })
        
        return data.message ; 
    } catch (error) {
        console.log(error)
        return error.response.data?.message ;
    }
    


}
