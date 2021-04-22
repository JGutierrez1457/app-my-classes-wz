import React,{useState,useEffect} from 'react';

import { Slide, AppBar, Toolbar, IconButton,Button,Typography, useScrollTrigger} from '@material-ui/core';

import { Link, useHistory, useLocation } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import useStyle from './styles';

import { useDispatch } from 'react-redux';
import {LOGOUT} from '../../constants/actionTypes';


const NavBar = ({toogleDrawer}) => {
    const trigger = useScrollTrigger();
    const classes = useStyle();
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
    const logout = ()=>{
      dispatch({
        type:LOGOUT
      });
      history.push('/');
      setUser(null);
    }
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    
    return (
        <Slide appear={false} direction='down' in={!trigger}>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            <IconButton color='inherit' onClick={toogleDrawer(true)}>
              <MenuIcon  />
            </IconButton>
            <Button color='inherit' component={Link} to='/'>
            <Typography variant='h6' className={classes.toolTitle}>App Classes WZ</Typography>
            </Button>
            {user?(<Button color='inherit' style={{borderRadius:'0%'}} onClick={logout}>
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
