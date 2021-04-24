import {connect} from 'react-redux'
import SignUp from '../../components/Auth/SignUp/SignUp'
import { signup} from '../../actions/auth'

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSubmit:(userForm)=>dispatch(signup(userForm))
    }
}
const CSignUp = connect(null,mapDispatchToProps)(SignUp);
export default CSignUp;