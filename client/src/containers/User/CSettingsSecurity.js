import SettingsSecurity from '../../components/UserSettings/SettingsSecurity/SettingsSecurity';
import { connect } from 'react-redux';
import { editSecurity } from '../../actions/settings'

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSubmit: (dataSecurity)=>dispatch(editSecurity(dataSecurity))
    }
}
const CSettingsSecurity = connect(null,mapDispatchToProps)(SettingsSecurity)
export default CSettingsSecurity
