import React, { useState, useEffect } from 'react'
import { CardMedia, Paper, TextField, Button, Typography, Container, Snackbar, LinearProgress } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64'
import useStyles from './styles';

function SettingsProfile({ handleSubmit }) {
    const user = useSelector(state => state.auth?.authData?.result);
    const [ dataProfile, setDataProfile] = useState({ username: user.username, avatar: user.avatar });
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] =useState({severity:'success',text:''})
    const [ showProgress, setShowProgress] = useState(false)
    const classes = useStyles();

    const handleCloseAlert = (event,reason)=>{
        if(reason ==='clickaway'){
            return;
        }
        setOpenAlert(false);

    }

    const handleChange = (e) => {
        setDataProfile({ ...dataProfile, [e.target.name]: e.target.value });

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setShowProgress(true);
        handleSubmit(dataProfile)
        .then(m => setAlertMessage({...alertMessage,...m}))
        .finally(()=>{
            setShowProgress(false);
            setOpenAlert(true);
        });
    }
    useEffect(() => {
        
    },[alertMessage])
    return (
        <>
        <Snackbar 
            open={openAlert} 
            autoHideDuration={3000} 
            anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
            onClose={handleCloseAlert}
            className={classes.snackBar}
            >
            <Alert variant='standard'  onClose={handleCloseAlert}  severity={alertMessage.severity}>{alertMessage.text}</Alert>
        </Snackbar>
       {showProgress&&<LinearProgress color='primary' />}
        <Paper className={classes.paper}>
            <Typography variant='h6'>Change UserName</Typography>
            <form onSubmit={handleOnSubmit}>
                <div className={classes.formInput}>
                    <TextField variant='outlined' name='username' label='Username' value={dataProfile.username} onChange={handleChange} />
                    <div className={classes.avatarInput}>
                        <CardMedia image={dataProfile.avatar} style={{ height: '100px', width: '100px' }} />
                        <FileBase64 name='avatar' onDone={({ base64 }) => setDataProfile({ ...dataProfile, avatar: base64 })} />
                    </div>
                </div>
               
                <Button type='submit' variant='contained' color='primary' >Accept</Button>
               
            </form>
        </Paper>

        </>

    )
}

export default SettingsProfile
