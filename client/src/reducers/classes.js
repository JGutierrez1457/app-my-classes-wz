import { GET_ALL, CREATE } from '../constants/actionTypes';
const classes = (state=[], action)=>{
    switch(action.type){
        case GET_ALL:
            return action.payload
        case CREATE:
            return [...state, action.payload]
        default:
            return state
    }
}
export default classes;