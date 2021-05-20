import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {  Container, Toolbar } from '@material-ui/core';

import CAddClasses from './containers/CAddClasses';
import CPublicClasses from './containers/ListClasses.js/CPublicClasses';
import CMyClasses from './containers/ListClasses.js/CMyClasses';
import CEditClasses from './containers/CEditClasses';
import CSignIn from './containers/Auth/CSignIn';
import CSignUp from './containers/Auth/CSignUp';

import UserSettings from './components/UserSettings/UserSettings';

import NavBar from './components/NavBar/NavBar';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';




function App (){

const [openDrawer, setOpenDrawer] = useState(false);
const [idClassEdit, setIdClassEdit] = useState(null);


const token = useSelector(state => state.auth?.authData?.token);




const toogleDrawer = (open)=> (event)=>{
  if(event.type === 'keydown' && (event.key==='Tab' || event.key==='Shift')){
    return;
  }
  setOpenDrawer(open);
};



    return (
      <Router>
        <NavBar toogleDrawer={toogleDrawer}/>
        <Toolbar/>
        {token && <MenuDrawer openDrawer={openDrawer} toogleDrawer={toogleDrawer} /> }
        <Container>
        <Switch >
          <Route exact path='/' render={ props => <CPublicClasses {...props} isOwn={false} setIdClassEdit={setIdClassEdit}/> } />
          <Route exact path='/myclasses' render={props => {
            if(token){return <CMyClasses {...props} isOwn={true} setIdClassEdit={setIdClassEdit} />}
            return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}/>
          <Route exact path='/addclasses' render={props => { 
            if(token){return<CAddClasses {...props}/>}
            return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}/>
          <Route exact path='/editclass' render={ props => { 
            if(token&&idClassEdit){return <CEditClasses {...props} setIdClassEdit={setIdClassEdit} idClassEdit={idClassEdit} />}
            return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}/>
          <Route exact path='/login' render ={ props => {
            if(!token){return <CSignIn {...props} />}
           return <Redirect to={{pathname:'/',state:{ from: props.location}}} />} } />
          <Route exact path='/signup' render = {props => {
            if(!token){return <CSignUp {...props}/>}
            return <Redirect to={{pathname:'/',state:{ from: props.location}}} />
          }}/>
          <Route path='/settings' render = {props => {
            if(token){return <UserSettings {...props}/>}
            return <Redirect to={{pathname:'/',state:{ from: props.location}}} />
          }}/>

          <Route render={ ()=><p>Not Found</p>} />
        </Switch>
        </Container>
      </Router>
    )
  
}
export default App;
