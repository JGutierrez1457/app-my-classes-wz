import { connect } from 'react-redux';
import { updateClass } from '../actions/classes';
import EditClasses from '../components/EditClasses/EditClasses'

const mapDispatchToProps = (dispatch)=>{
    return {
        onClickUpdate: (id,data)=>dispatch(updateClass(id,data))
    }
}
const mapStateToProps = (state, ownProps)=>{
    return{
        classItem: state.classes.length>0?state.classes.find( c => c._id===ownProps.idClassEdit):state.myclasses.find( c => c._id===ownProps.idClassEdit),
        idClass: ownProps.idClass,
        idClassEdit:ownProps.idClassEdit
    }
}
const CEditClasses = connect(mapStateToProps, mapDispatchToProps)(EditClasses);
export default CEditClasses;