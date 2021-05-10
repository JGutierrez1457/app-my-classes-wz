import React,{useState} from 'react'
import { Paper, TextField, Typography, Button, LinearProgress } from '@material-ui/core'
import {useSelector} from 'react-redux';
import useStyle from './styles';

import AlertMessage from '../../AlertMessage/AlertMessage';
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
    return (
        <>
        <AlertMessage 
            alertMessage={alertMessage}
            openAlert={openAlert}
            setOpenAlert={setOpenAlert}
            />
        {showProgress&&<LinearProgress />}
        <Paper className={classes.paper}>
            <Typography variant='h6'>
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
