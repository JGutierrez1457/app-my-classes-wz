import { connect } from 'react-redux'
import UserClasses from '../../components/ListClasses/UserClasses/UserClasses';
import useUserClassFetch from '../../useUserClassesFetch';
const mapStateToProps = (state, ownProps)=>{
    return{
        OnFetchClasses : (page,username)=>useUserClassFetch(page,username)
    }
}

const CUserClasses = connect(mapStateToProps,null)(UserClasses);
export default CUserClasses;