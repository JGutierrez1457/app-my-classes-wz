import { Typography,Grid,Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CCardClasses from '../../containers/CCardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';

import { getClasses} from '../../actions/classes'

function Home({title,setIdClassEdit}) {
    const token = useSelector(state => state.auth?.authData?.token)
    const dispatch = useDispatch();
    
    const classes = useStyle();
    useEffect(()=>{
        dispatch(getClasses());
    },[dispatch,token])
    const classesItems = useSelector( state => state.classes);
    return (
        <div>
            <Typography variant='h4'>{title}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
            {classesItems.map( c => (
                <Grid key={c._id} item xs={12} sm={4} >
                    <CCardClasses  classItem={c} setIdClassEdit={setIdClassEdit}/>
                </Grid>
                ))}
            </Grid>
            {token && <Fab color="primary" aria-label="add" className={classes.fab} component={Link} to='/addclasses'>
              <AddFabIcon/>
            </Fab>}
            
        </div>
    )
}

export default Home
