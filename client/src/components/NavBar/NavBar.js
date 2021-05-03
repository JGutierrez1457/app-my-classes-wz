import React, { useEffect, useRef, useState } from 'react';

import { Slide, AppBar, Toolbar, IconButton,Typography, useScrollTrigger, Avatar, Button, Menu, MenuItem, Popper, MenuList, Divider, Paper, ClickAwayListener} from '@material-ui/core';

import { Link, useHistory } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import useStyle from './styles';

import { useDispatch, useSelector } from 'react-redux';
import {LOGOUT} from '../../constants/actionTypes';
import { decode } from 'jsonwebtoken';


const NavBar = ({toogleDrawer}) => {
    const trigger = useScrollTrigger();
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth?.authData?.token);
    const user = useSelector(state => state.auth?.authData?.result);
    const [ openMenu, setOpenMenu ] = useState(false);
    const anchorRef = useRef(null);
    const avatarRef = useRef(null);

    const handleToggleMenu = ()=>{
      setOpenMenu((prevOpen)=> !prevOpen);
    }
    const handleCloseMenu = (event)=>{
      if(anchorRef.current && anchorRef.current.contains(event.target)){
        return;
      }
      setOpenMenu(false);
    }
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpenMenu(false);
      }
    }

    const prevOpen = useRef(openMenu);
    useEffect(() => {
      if (prevOpen.current === true && openMenu === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = openMenu;
    }, [openMenu]);
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
        <Slide appear={true} direction='down' in={!trigger}>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            {token && <IconButton color='inherit' onClick={toogleDrawer(true)}>
              <MenuIcon  />
            </IconButton>}
            <Button color='inherit' component={Link} to='/'>
            <Typography variant='h6' className={classes.toolTitle}>App Classes WZ</Typography>
            </Button>
            {token?(<div className={classes.profile}>
              <IconButton size='small' className={classes.menuUser}  onClick={handleToggleMenu} ref={anchorRef}>
              <Avatar alt={user.username} src={user.avatar} className={classes.white}  />
                <ArrowDropDownIcon />
              </IconButton>
              
              <Popper 
                id='menu-sign'
                open={openMenu}
                anchorEl={anchorRef.current}
                keepMounted
                disablePortal
                placement='bottom-end'
                modifiers={{
                  arrow:{
                    enabled: true,
                    element: avatarRef.current
                  }
                }}
              >
              <svg  className={classes.arrow} ref={avatarRef} viewBox='0 0 8 4'>
                <path  d='M 0 4 L4 0 L8 4 Z'></path>
              </svg>
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseMenu}>
                    <MenuList onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleCloseMenu}>Sign in as {user.username}</MenuItem>
                      <Divider/>
                      <MenuItem onClick={handleCloseMenu}>Sign in as {user.username}</MenuItem> 
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Popper>
              {/* <IconButton color='inherit' style={{borderRadius:'100%'}} onClick={logout}>
                <ExitToAppIcon/>
              </IconButton> */}
            </div>
              ):(
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
