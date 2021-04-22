import { Paper, TextField, Typography, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import React from 'react'

import useStyle from './styles';

const SignIn = () => {
    const classes = useStyle();
    return (
        <Paper className={classes.card}>
            <Typography variant='h6'>Welcome! Login here</Typography>
            <form className={`${classes.form} ${classes.root}`}>
            <TextField variant='outlined' name='email' required fullWidth autoFocus label='Your Email' type='text' />
            <TextField variant='outlined' name='password' required fullWidth label='Your Password' type='password' />
            
            <Typography variant='p' fullWidth>If you have a account, can sign up in <Link to='/signup'>here</Link></Typography>
            
            <Button color='primary' variant='contained' fullWidth className={classes.buttonLogin}>Log In</Button>
            <Button color='secondary' variant='contained' fullWidth>Cancel</Button>
            </form>
        </Paper>
    )
}

export default SignIn
