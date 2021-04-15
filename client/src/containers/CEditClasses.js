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
        idClass: ownProps.idClass,
        idClassEdit:ownProps.idClassEdit
    }
}
const CEditClasses = connect(mapStateToProps, mapDispatchToProps)(EditClasses);
export default CEditClasses;