import {connect} from 'react-redux'
import { editAccount } from '../../actions/settings'
import SettingsAccount from '../../components/UserSettings/SettingsAccount/SettingsAccount'

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSubmit : (dataAccount)=>dispatch(editAccount(dataAccount))
    }
}
const CSettingsAccount = connect(null, mapDispatchToProps)(SettingsAccount);
export default CSettingsAccount;