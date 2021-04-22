import React,{useState,useEffect} from 'react'
import {  Drawer, MenuItem, 
    MenuList } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/AddToPhotos';
import DescriptionIcon from '@material-ui/icons/Description';
import useStyles from './styles';

import { Link , useLocation} from 'react-router-dom';



const MenuDrawer = ({toogleDrawer,openDrawer }) => {
  const classes = useStyles();
  const location = useLocation();
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))  
  }, [location])

    return (
        <Drawer anchor='left' open={openDrawer} onClose={toogleDrawer(false)}>
          <MenuList onClick={toogleDrawer(false)} onKeyDown={toogleDrawer(false)} className={classes.menuList}>
            <MenuItem component={Link} to ='/' color='primary' selected>
              <HomeIcon className={classes.menuList} />
              Home
            </MenuItem>
            {user?(<><MenuItem component={Link} to ='/myclasses'>
              <DescriptionIcon/>
              My Classes
            </MenuItem>
            <MenuItem component={Link} to ='/addclasses'>
              <AddIcon />
              Add Classes
            </MenuItem></>):null}
            
          </MenuList>
        </Drawer>
    )
}

export default MenuDrawer
