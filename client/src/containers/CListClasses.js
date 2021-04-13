import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { getClasses } from '../actions/classes'

const mapStateToProps = (state, ownProps)=>{
    const title = ownProps.isOwn?'Your Classes':'Home';
    return {
        title: title
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getClasses: getClasses
        
    }
}
const CListClasses = connect(mapStateToProps,mapDispatchToProps)(Home);
export default CListClasses;