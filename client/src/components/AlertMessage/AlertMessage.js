import React from 'react'
import {  Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import useStyle from './styles'

function AlertMessage({alertMessage,openAlert,setOpenAlert}) {
    const classes = useStyle();
    const handleCloseAlert = (event,reason)=>{
        if(reason==='clickaway'){
            return;
        }
        setOpenAlert(false);
    }
    return (
        <Snackbar 
            open={openAlert}
            onClose={handleCloseAlert}
            autoHideDuration={3000}
            anchorOrigin={{horizontal:'left',vertical:'bottom'}}
            className={classes.snackBar}
            >
            <Alert
                onClose={handleCloseAlert}
                severity={alertMessage.severity}
                >
                    {alertMessage.text}
            </Alert>
        </Snackbar>
    )
}

export default AlertMessage
