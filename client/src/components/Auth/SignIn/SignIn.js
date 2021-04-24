import { Paper, TextField, Typography, Button } from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import useStyle from './styles';


const SignIn = ({handleSubmit}) => {

    const classes = useStyle();
    const history = useHistory();
    const [userForm, setUserForm] = useState({email:'',password:''});
    const [ errorForm, setErrorForm ]= useState(false);

    const validateSubmit= (data)=>{
        if(data==='authenticated')return;
        setErrorForm(data)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        handleSubmit(userForm).then(v =>validateSubmit(v));
    }
    

    const onChange = (e)=>{
        setUserForm({...userForm, [e.target.name]:e.target.value});
        setErrorForm(false);
    }
    const cancel = ()=>{
        setUserForm({email:'',password:''});
        setErrorForm(false)
        history.push('/');
    }
    return (
        <Paper className={classes.paper}>
            <Typography variant='h6' align='center' >Welcome! Login here</Typography>
            {errorForm&&<Typography color='error' variant='body2'>{errorForm}</Typography>}
            <form className={`${classes.form} ${classes.root}`}  onSubmit={onSubmit}>
            <TextField variant='outlined' name='email' required fullWidth autoFocus label='Your Email' type='email' onChange={onChange}/>
            <TextField variant='outlined' name='password' required fullWidth label='Your Password' type='password' onChange={onChange} />
            
            <Typography variant='body2'>If you have a account, can sign up in <Link to='/signup'>here</Link></Typography>
            
            <Button color='primary' variant='contained' size='large' fullWidth type='submit'>Log In</Button>
            <Button color='secondary' variant='contained' size='small' fullWidth onClick={cancel}>Cancel</Button>
            </form>
        </Paper>
    )
}

export default SignIn
