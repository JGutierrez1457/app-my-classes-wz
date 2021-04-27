import React, { useEffect } from 'react';

import { Slide, AppBar, Toolbar, IconButton,Button,Typography, useScrollTrigger} from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import useStyle from './styles';

import { useDispatch, useSelector } from 'react-redux';
import {LOGOUT} from '../../constants/actionTypes';
import { decode } from 'jsonwebtoken';


const NavBar = ({toogleDrawer}) => {
    const trigger = useScrollTrigger();
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth?.authData?.token)
    const logout = ()=>{
      dispatch({
        type:LOGOUT
      });
      history.push('/');
    }
    useEffect(()=>{
      if(token){
        const decodedToken = decode(token);
        if( decodedToken.exp * 1000 < new Date().getTime()) logout()
      }
    })
    
    return (
        <Slide appear={false} direction='down' in={!trigger}>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            {token && <IconButton color='inherit' onClick={toogleDrawer(true)}>
              <MenuIcon  />
            </IconButton>}
            <Button color='inherit' component={Link} to='/'>
            <Typography variant='h6' className={classes.toolTitle}>App Classes WZ</Typography>
            </Button>
            {token?(<Button color='inherit' style={{borderRadius:'0%'}} onClick={logout}>
              <Typography variant='h6'>Log Out</Typography>
              </Button>):(
              <Button color='inherit' style={{borderRadius:'0%'}} component={Link} to='/login'>
            <Typography variant='h6'>Log In</Typography>
            </Button>
            )}
            
          </Toolbar>
        </AppBar>
        </Slide>
    )
}

export default NavBar
