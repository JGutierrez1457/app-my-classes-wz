import SettingsProfile from '../../components/UserSettings/SettingsProfile/SettingsProfile';
import { connect } from 'react-redux';
import { editProfile} from '../../actions/settings'

const mapDispatchToProps = (dispatch)=>{
    return {
        handleSubmit :(data)=>dispatch(editProfile(data))
    }
}
const CSettingsProfile = connect(null,mapDispatchToProps)(SettingsProfile)
export default CSettingsProfile
