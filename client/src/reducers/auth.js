import { AUTH, LOGOUT } from '../constants/actionTypes';
 const authReducer = (state = { authData : JSON.parse(localStorage.getItem('token'))}, action)=>{
     switch(action.type){
         case AUTH:
             localStorage.setItem('token',JSON.stringify({...action?.data}));
             return {...state,authData: action?.data};
        case LOGOUT:
            localStorage.removeItem('token');
            return {...state,authData: null}
        default: return state;
     }
 }

 export default authReducer;