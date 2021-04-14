import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { AppBar, Button, Container, Drawer, IconButton, MenuItem, 
  MenuList, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';
import CAddClasses from './containers/CAddClasses';
import CListClasses from './containers/CListClasses';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/AddToPhotos';
import DescriptionIcon from '@material-ui/icons/Description';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { getClasses} from './actions/classes'


import useStyles from './styles';

function App (){
const [openDrawer, setOpenDrawer] = useState(false);
const classes = useStyles();
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getClasses());
  console.log('Effect Home')
},[dispatch])

const toogleDrawer = (open)=> (event)=>{
if(event.type === 'keydown' && (event.key==='Tab' || event.key==='Shift')){
  console.log(event.key)
  return;
}
setOpenDrawer(open);
};

const trigger = useScrollTrigger();

    return (
      <Router>
        <Slide appear={false} direction='down' in={!trigger}>
        <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
            <IconButton color='inherit' onClick={toogleDrawer(true)}>
              <MenuIcon  />
            </IconButton>
            <Button color='inherit' component={Link} to='/'>
            <Typography variant='h6' className={classes.toolTitle}>App Classes WZ</Typography>
            </Button>
            <IconButton color='inherit' style={{borderRadius:'0%'}}>
              <LogoutIcon />
            <Typography variant='h6'>Logout</Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        </Slide>
        <Toolbar/>
        <Drawer anchor='left' open={openDrawer} onClose={toogleDrawer(false)}>
          <MenuList onClick={toogleDrawer(false)} onKeyDown={toogleDrawer(false)} className={classes.menuList}>
            <MenuItem component={Link} to ='/' color='primary' selected>
              <HomeIcon className={classes.menuList} />
              Home
            </MenuItem>
            <MenuItem component={Link} to ='/myclasses'>
              <DescriptionIcon/>
              My Classes
            </MenuItem>
            <MenuItem component={Link} to ='/addclasses'>
              <AddIcon />
              Add Classes
            </MenuItem>
          </MenuList>
        </Drawer>
        <Container>
        <Switch >
          <Route exact path='/' render={ props => <CListClasses {...props} isOwn={false}/> } />
          <Route path='/myclasses' render={ props => <CListClasses {...props} isOwn={true} />}/>
          <Route path='/addclasses' component={CAddClasses} />
          <Route render={ ()=><p>Not Found</p>} />
        </Switch>
        </Container>
      </Router>
    )
  
}
export default App;
