import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import {  Container, Toolbar } from '@material-ui/core';

import CAddClasses from './containers/CAddClasses';
import CListClasses from './containers/CListClasses';
import CEditClasses from './containers/CEditClasses';
import CSignIn from './containers/Auth/CSignIn';

import NavBar from './components/NavBar/NavBar';




import MenuDrawer from './components/MenuDrawer/MenuDrawer';

function App (){

const [openDrawer, setOpenDrawer] = useState(false);
const [idClassEdit, setIdClassEdit] = useState(null);

const token = useSelector(state => state.auth?.authData?.token)



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
          <Route exact path='/' render={ props => <CListClasses {...props} isOwn={false} /> } />
          <Route exact path='/myclasses' render={props => {
            if(token){return <CListClasses {...props} isOwn={true} setIdClassEdit={setIdClassEdit} />}
            else{ return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}}/>
          <Route exact path='/addclasses' render={props => { if(token){return<CAddClasses {...props}/>}
            else{ return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}}/>
          <Route exact path='/editclass' render={ props => { if(token){return <CEditClasses {...props} setIdClassEdit={setIdClassEdit} idClassEdit={idClassEdit} />}
            else{ return <Redirect to={{pathname:'/',state:{ from: props.location}}} />}}}/>
          <Route path='/login' render ={ props => <CSignIn {...props} /> } />
          <Route render={ ()=><p>Not Found</p>} />
        </Switch>
        </Container>
      </Router>
    )
  
}
export default App;
