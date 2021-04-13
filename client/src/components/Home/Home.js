import { Typography,Grid,Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardClasses from '../CardClasses/CardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';


function Home({title, getClasses}) {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getClasses());
    },[dispatch,getClasses])
    const classesItems = useSelector( state => state.classes)
    const classes = useStyle();
    console.log(classesItems)
    return (
        <div>
            <Typography variant='h4'>{title}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
            {classesItems.map( c => (
                <Grid key={c._id} item xs={12} sm={4} >
                    <CardClasses  classItem={c}/>
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
