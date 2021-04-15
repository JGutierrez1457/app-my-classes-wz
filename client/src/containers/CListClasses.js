import { connect } from 'react-redux';
import Home from '../components/Home/Home';

const mapStateToProps = (state, ownProps)=>{
    const title = ownProps.isOwn?'Your Classes':'Home';
    return {
        title: title,
        setIdClassEdit: ownProps.isOwn?ownProps.setIdClassEdit:false
    }
}

const CListClasses = connect(mapStateToProps,null)(Home);
export default CListClasses;