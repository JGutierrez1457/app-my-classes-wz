import { Button, LinearProgress, Paper, Snackbar, TextField, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import React,{useState} from 'react'
import useStyle from './styles'
function SettingsSecurity({handleSubmit}) {
    const classes = useStyle();

    const [ dataSecurity, setDataSecurity ] = useState({oldPassword:'',newPassword:'',confirmPassword:''});
    const [ alertMessage, setAlertMessage] = useState({severity:'success',text:''});
    const [ openAlert, setOpenAlert ] = useState(false);
    const [ showProgress, setShowProgress ] = useState(false);
    const handleChange = (e)=>{
        setDataSecurity({...dataSecurity,[e.target.name]:e.target.value})
    }
    const handleCloseAlert = (event, reason)=>{
        if(event ==='clickaway'){
            return;
        }
        setOpenAlert(false);
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
        setShowProgress(true);
        handleSubmit(dataSecurity)
        .then(m => setAlertMessage({...alertMessage,...m}))
        .finally(()=>{
            setShowProgress(false);
            setOpenAlert(true);
            setDataSecurity({
                oldPassword:'',newPassword:'',confirmPassword:''
            })
        })
    }
    return (
        
        <>
        <Snackbar
            open={openAlert}
            autoHideDuration={3000}
            anchorOrigin={{horizontal:'left',vertical:'bottom'}}
            onClose={handleCloseAlert}
            className={classes.snackBar}
            >
            <Alert 
                onClose={handleCloseAlert}
                severity={alertMessage.severity}
                >
                {alertMessage.text}
            </Alert>
        </Snackbar>
        {showProgress&&<LinearProgress/>}
        <Paper className={classes.paper}>
            <Typography>Change Your Password</Typography>
            <form onSubmit={handleOnSubmit}>
                <div className={classes.formInput}>
                    <TextField type='password' name='oldPassword' label='Old Password' variant='outlined' onChange={handleChange} value={dataSecurity.oldPassword} autoFocus/>
                    <TextField type='password' name='newPassword' label='New Password' variant='outlined' onChange={handleChange} value={dataSecurity.newPassword} />
                    <TextField type='password' name='confirmPassword' label='Confirm Password' variant='outlined' onChange={handleChange} value={dataSecurity.confirmPassword} />
                </div>
                <Button type='submit' color='primary' variant='contained'>Accept</Button>
            </form>
        </Paper>
        </>

    )
}

export default SettingsSecurity
