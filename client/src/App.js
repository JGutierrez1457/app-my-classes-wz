import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {  Container, Toolbar } from '@material-ui/core';

import CAddClasses from './containers/CAddClasses';
import CListClasses from './containers/CListClasses';
import CEditClasses from './containers/CEditClasses';

import SignIn from './components/Auth/SignIn/SignIn';
import NavBar from './components/NavBar/NavBar';


import { getClasses} from './actions/classes'


import MenuDrawer from './components/MenuDrawer/MenuDrawer';

function App (){
const [openDrawer, setOpenDrawer] = useState(false);
const [idClassEdit, setIdClassEdit] = useState(null);
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getClasses());
},[dispatch])

const toogleDrawer = (open)=> (event)=>{
  if(event.type === 'keydown' && (event.key==='Tab' || event.key==='Shift')){
    console.log(event.key)
    return;
  }
  setOpenDrawer(open);
};



    return (
      <Router>
        <NavBar toogleDrawer={toogleDrawer} />
        <Toolbar/>
        
        <MenuDrawer openDrawer={openDrawer} toogleDrawer={toogleDrawer} />
        <Container>
        <Switch >
          <Route exact path='/' render={ props => <CListClasses {...props} isOwn={false} /> } />
          <Route path='/myclasses' render={ props => <CListClasses {...props} isOwn={true} setIdClassEdit={setIdClassEdit} />}/>
          <Route path='/addclasses' component={CAddClasses} />
          <Route path='/editclass' render={ props => <CEditClasses {...props} setIdClassEdit={setIdClassEdit} idClassEdit={idClassEdit} />}/>
          <Route path='/login' component={SignIn} />
          <Route render={ ()=><p>Not Found</p>} />
        </Switch>
        </Container>
      </Router>
    )
  
}
export default App;
