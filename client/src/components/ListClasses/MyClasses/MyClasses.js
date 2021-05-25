import { Typography, Grid, Fab, Slide, useScrollTrigger, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useRef, useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CCardClasses from '../../../containers/CCardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';


function MyClasses({ title, setIdClassEdit, isOwn, stateClasses,OnFetchClasses,onDispatch }) {

    const trigger = useScrollTrigger();
    const token = useSelector(state => state.auth?.authData?.token)
    const styles = useStyle();
    const [page, setPage] = useState(0);


    const { hasMore, loading, classes, error} = OnFetchClasses(page);


    useEffect(()=>{
            onDispatch(classes)
      },[onDispatch,classes])
    
    

    const observer = useRef();
    const lastClassElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        })
        if (node) observer.current.observe(node)
    }, [loading,hasMore]);


    return (
        <>
        <div className={styles.body}>
            <Typography variant='h4'>{title}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
                {stateClasses.map((classes, index)=>{
                    if(stateClasses.length === index + 1){
                        return <Grid key={classes._id} item xs={12} sm={4} innerRef={lastClassElementRef} >
                            <CCardClasses classItem={classes} setIdClassEdit={setIdClassEdit} showPrivacity={isOwn} />
                                </Grid>
                    }else{
                        return <Grid key={classes._id} item xs={12} sm={4} innerRef={lastClassElementRef} >
                        <CCardClasses classItem={classes} setIdClassEdit={setIdClassEdit} showPrivacity={isOwn} />
                            </Grid>
                    }
                })}
            </Grid>
            {loading && <LinearProgress className={styles.linearProgress} />}
            {error && <h2>Error</h2>}
        </div>
            {token && <Slide appear={true} direction='up' in={!trigger}>
                <Fab color="primary" aria-label="add" className={styles.fab} component={Link} to='/addclasses'>
                    <AddFabIcon />
                </Fab>
            </Slide>}
</>
    )
}

export default MyClasses
