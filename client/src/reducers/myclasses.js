import { MY_CLASSES, MY_CLASS_CREATE, MY_CLASS_DELETE, MY_CLASS_EDIT } from '../constants/actionTypes';
const myclasses = (state=[], action)=>{
    switch(action.type){
        case MY_CLASSES:
            return action.payload
        case MY_CLASS_CREATE:
            return [...state, action.payload]
        case MY_CLASS_DELETE:
            return state.filter( p => p._id !== action.payload)
        case MY_CLASS_EDIT:
            return state.map( c => c._id===action.payload._id?action.payload:c )
        default: return state
    }
}
export default myclasses;