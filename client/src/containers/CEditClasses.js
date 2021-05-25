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
        classItem: state.myclasses.length>0?state.myclasses.find( c => c._id===ownProps.idClassEdit):state.classes.find( c => c._id===ownProps.idClassEdit),
        idClass: ownProps.idClass,
        idClassEdit:ownProps.idClassEdit
    }
}
const CEditClasses = connect(mapStateToProps, mapDispatchToProps)(EditClasses);
export default CEditClasses;