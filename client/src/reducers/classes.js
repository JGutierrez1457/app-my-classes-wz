import { GET_ALL, CREATE, DELETE } from '../constants/actionTypes';
const classes = (state=[], action)=>{
    switch(action.type){
        case GET_ALL:
            return action.payload
        case CREATE:
            return [...state, action.payload]
        case DELETE:
            return state.filter( p => p._id !== action.payload)
        default:
            return state
    }
}
export default classes;