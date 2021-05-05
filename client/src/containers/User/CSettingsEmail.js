import SettingsEmail from '../../components/UserSettings/SettingsEmail/SettingsEmail';
import { connect } from 'react-redux';
import { editEmail } from '../../actions/settings';

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSubmit : (dataEmail)=>dispatch(editEmail(dataEmail))
    }
}
const CSettingsEmail = connect(null,mapDispatchToProps)(SettingsEmail)
export default CSettingsEmail
