import { combineReducers } from 'redux';
import classes from './classes';
import auth from './auth';
import myclasses from './myclasses'

export default combineReducers({
    classes,auth,myclasses
});
