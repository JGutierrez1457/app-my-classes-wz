import { connect } from 'react-redux'
import AddClasses from '../components/AddClasses/AddClasses';
import { createClasses } from '../actions/classes'
const mapDispatchToProps= (dispatch)=>{
    return{
        onSubmit: (data)=>dispatch(createClasses(data))
    }
}
const CAddClasses = connect(null,mapDispatchToProps)(AddClasses)
export default CAddClasses;