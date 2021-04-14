import { Typography,Grid,Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux'
import CCardClasses from '../../containers/CCardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';


function Home({title}) {
    const classesItems = useSelector( state => state.classes);
   
    const classes = useStyle();
    return (
        <div>
            <Typography variant='h4'>{title}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
            {classesItems.map( c => (
                <Grid key={c._id} item xs={12} sm={4} >
                    <CCardClasses  classItem={c}/>
                </Grid>
                ))}
            </Grid>
            <Fab color="primary" aria-label="add" className={classes.fab} component={Link} to='/addclasses'>
              <AddFabIcon/>
            </Fab>
        </div>
    )
}

export default Home
