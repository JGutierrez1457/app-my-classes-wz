import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, 
        DialogContentText, DialogTitle, IconButton, Paper, TextField, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import AlertMessage from '../../AlertMessage/AlertMessage'

import useStyle from './styles';

function SettingsAccount({handleSubmit}) {
    const classes = useStyle();
    const [ openDialog, setOpenDialog] = useState(false);
    const [ dataDialog, setDataDialog] = useState({email:'',password:'',confirm:''});
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] =useState({severity:'error',text:''})


    const validateSuccess = (m)=>{
        if(m.severity!=='success'&&m.text!==''){
            setAlertMessage({...alertMessage, ...m});
            setOpenAlert(true);
        }
    }
    const handleDeleteAccount = (e)=>{
        e.preventDefault();
        handleSubmit({email:dataDialog.email, password:dataDialog.password})
        .then(m => validateSuccess(m))
    }
    const handleOnChange = (e)=>{
        setDataDialog({...dataDialog,[e.target.name]:e.target.value})
    }
    const handleCloseDialog = ()=>{
        setOpenDialog(false);
    }
    const handleOpenDialog = ()=>{
        setOpenDialog(true); 
    }
   
    return (
        <>
        <AlertMessage 
        alertMessage={alertMessage}
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        />
        <Paper className={classes.paper}>
            <Typography variant='h6' color='error' >Delete Account</Typography>
            <Typography variant='body2'>Be carefully with this zone</Typography>
            <Button variant='contained' color='secondary' onClick={handleOpenDialog} >Delete</Button>
        </Paper>
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            className={classes.dialog}
        >
            <DialogTitle disableTypography>
                <Typography variant='h6'>
                Are you sure you want to delete your account?
                </Typography>
                <IconButton onClick={handleCloseDialog} style={{position:'absolute', right:'4px',top:'4px'}}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <form onSubmit={handleDeleteAccount}>
            <DialogContent dividers>
                <DialogContentText variant='body1'>
                    We will eliminate all public and private classes you have created
                </DialogContentText>
                <Typography variant='body2'>Your Email</Typography>
                <TextField variant='outlined' type='email' name='email' value={dataDialog.email} onChange={handleOnChange} fullWidth/>
                <Typography variant='body2'>Your Password</Typography>
                <TextField variant='outlined' type='password' name='password' value={dataDialog.password} onChange={handleOnChange} fullWidth/>
                <Typography variant='body2'>To verify, please type <i>delete my account</i></Typography>
                <TextField variant='outlined' type='text' name='confirm' value={dataDialog.confirm} onChange={handleOnChange} fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button
                    type='submit'
                    variant='contained'
                    color='secondary'
                    disabled={!(dataDialog.confirm==='delete my account')}
                    style={{margin:'0 auto'}}
                >Delete this account</Button>
            </DialogActions>
            </form>
        </Dialog>
        </>
        )
        
}

export default SettingsAccount
