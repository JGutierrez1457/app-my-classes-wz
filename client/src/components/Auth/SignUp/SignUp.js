import { Button, InputAdornment, Paper, TextField, Typography,IconButton } from '@material-ui/core'

import React, { useEffect, useState } from 'react'
import useStyle from './styles'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router';

const SignUp = ({handleSubmit}) => {
    const classes = useStyle();
    const [userForm, setUserForm ] = useState({username:'',email:'',password:''});
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMatch, setErrorMatch] = useState({message:'',error:false});
    const [showPassword, setShowPassword ] = useState(false)
    const history = useHistory();
    const handleChange= (e)=>{
        setUserForm({...userForm,[e.target.name]:e.target.value})
    }
    const handleChangeConfirm= (e)=>{
        setConfirmPassword(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(userForm);
        history.push('/')
    }
    const handleShowPassword = ()=>{
        setShowPassword(prevstate => !prevstate)
    }
    
    useEffect(()=>{
        if(confirmPassword!=='' && userForm.password!==''){
            if(confirmPassword!==userForm.password){
                setErrorMatch({message:"Passwords don't match",error:true})
                return
            }
            setErrorMatch({message:'Passwords Match',error:false})

        }
    },[confirmPassword,userForm])
    
    return (
        <Paper className={classes.paper}>
            <Typography variant='h6' align='center' >You can Register Here</Typography>
            <form className={`${classes.root} ${classes.form}`} onSubmit={onSubmit}>
            <TextField name='username' type='text' variant='outlined' label='Your UserName' onChange={handleChange} fullWidth autoFocus required />
            <TextField name='email' type='email' variant='outlined' label='Your Email' onChange={handleChange}  fullWidth  required />
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
            <TextField error={errorMatch.error} helperText={errorMatch.message} 
                name='confirmPassword' type='password' 
                variant='outlined' label='Confirm your Password' 
                onChange={handleChangeConfirm} 
                className={errorMatch.message==='Passwords Match'?classes.confirmPassword:''} 
                fullWidth  required />
            <Button type='submit' variant='contained' color='primary' size='large' fullWidth>Register</Button>
            <Button variant='contained' color='secondary' size='small' fullWidth>Cancel</Button>
            </form>
        </Paper>
    )
}

export default SignUp
