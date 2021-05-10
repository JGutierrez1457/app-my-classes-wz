import { Paper, TextField, Typography, Button } from '@material-ui/core'
import AlertMessage from '../../AlertMessage/AlertMessage'
import {Link, useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import useStyle from './styles';


const SignIn = ({handleSubmit}) => {

    const classes = useStyle();
    const history = useHistory();
    const [userForm, setUserForm] = useState({email:'',password:''});

    const [ openAlert, setOpenAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] =useState({severity:'success',text:''})

    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(userForm)
        .then(m =>setAlertMessage({...alertMessage, ...m}))
        .finally(()=>{
            setOpenAlert(true);
        });
    }
    

    const onChange = (e)=>{
        setUserForm({...userForm, [e.target.name]:e.target.value});
    }
    const cancel = ()=>{
        setUserForm({email:'',password:''});
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
            <Typography variant='h6' align='center' >Welcome! Login here</Typography>
            <form className={`${classes.form} ${classes.root}`}  onSubmit={onSubmit}>
            <TextField variant='outlined' name='email' required fullWidth autoFocus label='Your Email' type='email' onChange={onChange}/>
            <TextField variant='outlined' name='password' required fullWidth label='Your Password' type='password' onChange={onChange} />
            
            <Typography variant='body2'>If you have a account, can sign up in <Link to='/signup'>here</Link></Typography>
            
            <Button color='primary' variant='contained' size='large' fullWidth type='submit'>Log In</Button>
            <Button color='secondary' variant='contained' size='small' fullWidth onClick={cancel}>Cancel</Button>
            </form>
        </Paper>
        </>
    )
}

export default SignIn
