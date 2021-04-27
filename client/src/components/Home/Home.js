import { Typography,Grid,Fab, Slide,useScrollTrigger } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux'
import CCardClasses from '../../containers/CCardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';


function Home({title,setIdClassEdit,isOwn}) {
    const allclasses = useSelector( state => state.classes);
    const myclasses = useSelector( state => state.myclasses);
    const trigger = useScrollTrigger();

    const token = useSelector(state => state.auth?.authData?.token)
    
    const classes = useStyle();
    
    return (
        <div>
            <Typography variant='h4'>{title}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
            {isOwn?myclasses.map( c => (
                <Grid key={c._id} item xs={12} sm={4} >
                    <CCardClasses  classItem={c} setIdClassEdit={setIdClassEdit}/>
                </Grid>
                )):
                allclasses.map( c => (
                    <Grid key={c._id} item xs={12} sm={4} >
                        <CCardClasses  classItem={c} setIdClassEdit={setIdClassEdit}/>
                    </Grid>
                    ))}
            </Grid>
            <Slide appear={true} direction='up' in={!trigger}>
            {token && <Fab color="primary" aria-label="add" className={classes.fab} component={Link} to='/addclasses'>
              <AddFabIcon/>
            </Fab>}
            </Slide>
            
        </div>
    )
}

export default Home
