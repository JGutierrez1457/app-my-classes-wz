import React,{useState} from 'react'
import { Paper, TextField, Typography, Button, Snackbar, LinearProgress } from '@material-ui/core'
import {useSelector} from 'react-redux';
import useStyle from './styles';
import Alert from '@material-ui/lab/Alert';
function SettingsEmail({handleSubmit}) {
    const classes = useStyle();
    const user = useSelector(state => state.auth?.authData?.result);

    const [ dataEmail, setDataEmail ] = useState({email:user.email});
    const [ alertMessage, setAlertMessage ] = useState({severity:'success',text:''});
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ showProgress, setShowProgress ] = useState(false);

    const handleChange = (e)=>{
        setDataEmail({...dataEmail,[e.target.name]:e.target.value})
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setShowProgress(true);
        handleSubmit(dataEmail)
        .then(m =>setAlertMessage({...alertMessage,...m}))
        .finally(()=>{setShowProgress(false);setOpenAlert(true)});
    }
    const handleCloseAlert= (event,reason)=>{
        if(reason === 'clickaway'){
            return;
        }
        setOpenAlert(false);
    }
    return (
        <>
        <Snackbar 
            open={openAlert} 
            onClose={handleCloseAlert}
            autoHideDuration={3000}
            anchorOrigin={{horizontal:'left',vertical:'bottom'}}
            className={classes.snackBar}
            >
            <Alert onClose={handleCloseAlert} severity={alertMessage.severity}>
                {alertMessage.text}
            </Alert>
        </Snackbar>
        {showProgress&&<LinearProgress />}
        <Paper className={classes.paper}>
            <Typography>
                Change Email
            </Typography>
            <form onSubmit={handleOnSubmit}>
                <div className={classes.formInput}>
            <TextField type='email' name='email' variant='outlined' label='Email' value={dataEmail.email} onChange={handleChange} autoFocus />
                </div>
            <Button variant='contained' color='primary' type='submit'>Accept</Button>
            </form>
        </Paper>
        </>
    )
}

export default SettingsEmail
