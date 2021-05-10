import { Button, InputAdornment, Paper, TextField, Typography,IconButton, CardMedia } from '@material-ui/core'

import React, { useState } from 'react'
import useStyle from './styles'
import AlertMessage from '../../AlertMessage/AlertMessage'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router';
import FileBase64 from 'react-file-base64';

const SignUp = ({handleSubmit}) => {
    const classes = useStyle();
    const [userForm, setUserForm ] = useState({username:'',email:'',password:'',confirmPassword:''});
    const [showPassword, setShowPassword ] = useState(false)

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] =useState({severity:'error',text:''})


    const history = useHistory();
    const handleChange= (e)=>{
        setUserForm({...userForm,[e.target.name]:e.target.value})
    }
  
    const validateSuccess = (m)=>{
        if(m.severity!=='success'&&m.text!==''){
            setAlertMessage({...alertMessage, ...m});
            setOpenAlert(true);
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(userForm)
        .then(m =>validateSuccess(m))
    }
    const handleShowPassword = ()=>{
        setShowPassword(prevstate => !prevstate)
    }
    const handleCancel = ()=>{
        setUserForm({username:'',email:'',password:'',confirmPassword:''});
        setShowPassword(false);
        history.push('/');
    }
  
    
    return (
        <>
        <AlertMessage 
            alertMessage={alertMessage}
            openAlert={openAlert}
            setOpenAlert={setOpenAlert}
            />
        <Paper className={classes.paper}>
            <Typography variant='h6' align='center' >You can Register Here</Typography>
            <form className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
            <div className={classes.DataAvatar} >
            <TextField  className={classes.username} name='username' type='text' variant='outlined' label='Your UserName' onChange={handleChange} autoFocus required />
            <div className={classes.fileAvatar}>
            <CardMedia className={classes.avatarMedia} title={userForm?.avatar?'Avatar Selected':'Avatar Default'}  image={userForm.avatar?userForm.avatar:process.env.PUBLIC_URL+'/avatar/default.png'}/>
            <div className={classes.avatarFile}>
            <FileBase64  type='file' multiple={false} onDone={({base64})=>setUserForm({...userForm,avatar:base64})} />
            </div>
            </div>
            </div>
            <TextField  name='email' type='email' variant='outlined' label='Your Email' onChange={handleChange}  fullWidth  required />
            <TextField name='password' 
                        type={showPassword?'text':'password'} 
                        variant='outlined'
                        label='Your Password'
                        onChange={handleChange}
                        InputProps={
                            {
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton onClick={handleShowPassword}>
                                        {showPassword?<Visibility/>:<VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        }
                        fullWidth  required />
            <TextField 
                name='confirmPassword' type='password' 
                variant='outlined' label='Confirm your Password' 
                onChange={handleChange} 
                fullWidth  required />
            <Button type='submit' variant='contained' color='primary' size='large' fullWidth>Register</Button>
            <Button variant='contained' color='secondary' size='small' onClick={handleCancel} fullWidth>Cancel</Button>
            </form>
        </Paper>
        </>
    )
}

export default SignUp
