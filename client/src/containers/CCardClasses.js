import { connect } from 'react-redux';
import { deleteClass, likeClass} from '../actions/classes'
import CardClasses from '../components/CardClasses/CardClasses'
const mapDispatchToProps = (dispatch)=>{
    return {
        onClickDelete : (id)=>dispatch(deleteClass(id)),
        onClickLike : (id)=>dispatch(likeClass(id))
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        classItem: ownProps.classItem,
        setIdClassEdit:ownProps.setIdClassEdit,
        isOwn: ownProps.classItem.creator.id === state.auth.authData?.result?._id,
        showPrivacity: ownProps.showPrivacity
    }
}
const CCardClasses = connect(mapStateToProps,mapDispatchToProps)(CardClasses)
export default CCardClasses;
