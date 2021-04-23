import {connect } from 'react-redux';
import { signin } from '../../actions/auth';
import SignIn from '../../components/Auth/SignIn/SignIn';

const mapDispatchToProps = (dispatch)=>{
    return{
        handleSubmit : (userForm)=> dispatch(signin(userForm)),
    }
}
const CSignIn = connect(null,mapDispatchToProps)(SignIn);
export default CSignIn;