import { Typography, Grid, Fab, Slide, useScrollTrigger, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useRef, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import CCardClasses from '../../../containers/CCardClasses';
import AddFabIcon from '@material-ui/icons/Add';
import useStyle from './styles';
import { Redirect, useParams } from 'react-router'

function UserClasses({OnFetchClasses}) {
    const {username} = useParams();
    const user = useSelector(state => state.auth?.authData?.result?.username);
    
    const trigger = useScrollTrigger();
    const token = useSelector(state => state.auth?.authData?.token)
    const styles = useStyle();
    const [page, setPage] = useState(0);

    const {hasMore, error, classes, loading } = OnFetchClasses(page,username);


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
    if(username===user){
        return <Redirect to={{pathname:'/myclasses'}} />
    }
    return (
        <>
        <div className={styles.body}>
            <Typography variant='h4'>{`Classes of ${username}`}</Typography>
            <Grid container alignItems='stretch' spacing={3}>
                {classes.map((classes, index)=>{
                    if(classes.length === index + 1){
                            return <Grid key={classes._id} item xs={12} sm={4} innerRef={lastClassElementRef} >
                            <CCardClasses classItem={classes} showPrivacity={false} />
                                </Grid>
                    }else{
                        return <Grid key={classes._id} item xs={12} sm={4} >
                        <CCardClasses classItem={classes} showPrivacity={false} />
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

export default UserClasses
