import { connect } from 'react-redux';
import MyClasses from '../../components/ListClasses/MyClasses/MyClasses';
import useMyClassFetch from '../../useMyClassFetch';
import { MY_CLASSES} from '../../constants/actionTypes';

const mapDispatchToProps = (dispatch)=>{
    return {
        onDispatch: (classes)=>dispatch({type:MY_CLASSES,payload:classes})
    }
}


const mapStateToProps = (state, ownProps)=>{
    const title = 'Your Classes';
    return {
        title: title,
        setIdClassEdit: ownProps.setIdClassEdit,
        isOwn: ownProps.isOwn,
        stateClasses: state.myclasses,
        OnFetchClasses : (page)=>useMyClassFetch(page)
    }
}

const CMyClasses = connect(mapStateToProps,mapDispatchToProps)(MyClasses);
export default CMyClasses;