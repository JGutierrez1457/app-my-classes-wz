import React from 'react'
import {  Avatar, Divider, Drawer, MenuItem, 
    MenuList, Typography, Button} from '@material-ui/core';

import {LOGOUT} from '../../constants/actionTypes';


import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/AddToPhotos';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useLocation} from 'react-router-dom';



const MenuDrawer = ({toogleDrawer,openDrawer }) => {
  const classes = useStyles();
  const location = useLocation();
  const user = useSelector(state => state.auth?.authData?.result);
  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(
      {
        type:LOGOUT
      }
    )
  }


    return (
        <Drawer anchor='left' open={openDrawer} onClose={toogleDrawer(false)} className={classes.drawer} >
          <MenuList onClick={toogleDrawer(false)} onKeyDown={toogleDrawer(false)} className={classes.menuList}>
            <MenuItem className={classes.userAvatar} component={Link} to='/settings'>
              <Avatar alt={user.username} src={user.avatar} className={classes.avatar} />
              <Typography>Sign in as <b>{user.username}</b></Typography>
            </MenuItem>
            <Divider/>
            <MenuItem component={Link} to ='/' color='primary' selected={location.pathname==='/'}>
              <HomeIcon className={classes.menuList} />
              Home
            </MenuItem>
            <MenuItem component={Link} to ='/myclasses' selected={location.pathname==='/myclasses'}>
              <DescriptionIcon/>
              My Classes
            </MenuItem>
            <MenuItem component={Link} to ='/mylikes' selected={location.pathname==='/mylikes'}>
              <ThumbUpAltIcon/>
              My Likes
            </MenuItem>
            <MenuItem component={Link} to ='/addclasses' selected={location.pathname==='/addclasses'}>
              <AddIcon/>
              Add Classes
            </MenuItem>
            <Divider />
            <MenuItem component={Link} to ='/settings' selected={location.pathname==='/settings'}>
              <PersonIcon />
              Settings
            </MenuItem>
            <Divider/>
            <MenuItem component={Button} color='inherit' onClick={logout}>
              <ExitToAppIcon />
              <Typography className={classes.buttonSignout}>Sign Out</Typography>
            </MenuItem>
          </MenuList>
        </Drawer>
    )
}

export default MenuDrawer
