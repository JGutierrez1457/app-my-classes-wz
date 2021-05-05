import { AUTH, LOGOUT, EDIT_PROFILE } from '../constants/actionTypes';
 const authReducer = (state = { authData : JSON.parse(localStorage.getItem('token'))}, action)=>{
     switch(action.type){
        case AUTH:
             localStorage.setItem('token',JSON.stringify({...action?.data}));
             return {...state,authData: action?.data};
        case EDIT_PROFILE:
             return {...state,authData: {...state.authData,result: {...state.authData.result,username:action?.data.result.username, avatar: action?.data.result.avatar}}}
        case LOGOUT:
            localStorage.removeItem('token');
            return {...state,authData: null}
        default: return state;
     }
 }

 export default authReducer;