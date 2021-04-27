import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {  Container, Toolbar } from '@material-ui/core';

import CAddClasses from './containers/CAddClasses';
import CListClasses from './containers/CListClasses';
import CEditClasses from './containers/CEditClasses';
import CSignIn from './containers/Auth/CSignIn';
import CSignUp from './containers/Auth/CSignUp';

import NavBar from './components/NavBar/NavBar';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
import { getClasses, myClasses} from './actions/classes'


function App (){

const [openDrawer, setOpenDrawer] = useState(false);
const [idClassEdit, setIdClassEdit] = useState(null);

const dispatch = useDispatch();

const token = useSelector(state => state.auth?.authData?.token)
useEffect(()=>{
  if(token){
        dispatch(myClasses())
      }
      dispatch(getClasses())
},[dispatch,token])


const toogleDrawer = (open)=> (event)=>{
  if(event.type === 'keydown' && (event.key==='Tab' || event.key==='Shift')){
    console.log(event.key)
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
          <Route exact path='/' render={ props => <CListClasses {...props} isOwn={false} setIdClassEdit={setIdClassEdit}/> } />
          <Route exact path='/myclasses' render={props => {
            if(token){return <CListClasses {...props} isOwn={true} setIdClassEdit={setIdClassEdit} />}
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

          <Route render={ ()=><p>Not Found</p>} />
        </Switch>
        </Container>
      </Router>
    )
  
}
export default App;
