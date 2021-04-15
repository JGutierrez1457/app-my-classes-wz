import { connect } from 'react-redux';
import { deleteClass} from '../actions/classes'
import CardClasses from '../components/CardClasses/CardClasses'
const mapDispatchToProps = (dispatch)=>{
    return {
        onClickDelete : (id)=>dispatch(deleteClass(id))
    }
}
const mapStateToProps = (state, ownProps)=>{
    return {
        classItem: ownProps.classItem,
        setIdClassEdit:ownProps.setIdClassEdit
    }
}
const CCardClasses = connect(mapStateToProps,mapDispatchToProps)(CardClasses)
export default CCardClasses;
