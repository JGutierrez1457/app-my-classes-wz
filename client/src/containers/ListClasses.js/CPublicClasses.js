import { connect } from 'react-redux';
import PublicClasses from '../../components/ListClasses/PublicClasses/PublicClasses';
import useClassFetch from '../../useClassFetch';
import {GET_ALL} from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch)=>{
    return {
        onDispatch: (classes)=>dispatch({type:GET_ALL,payload:classes})
    }
}


const mapStateToProps = (state, ownProps)=>{
    const title = 'Home';
    return {
        title: title,
        setIdClassEdit: ownProps.setIdClassEdit,
        isOwn: ownProps.isOwn,
        stateClasses: state.classes,
        OnFetchClasses : (page)=>useClassFetch(page)
    }
}

const CPublicClasses = connect(mapStateToProps,mapDispatchToProps)(PublicClasses);
export default CPublicClasses;