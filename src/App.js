import React from 'react'
import "./styles.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import ContextAppProvider from './ContextAPI';
import Websitecontainer from './Components/Websitecontainer/Websitecontainer';


export default function App() {

  return (
   <Router>
        <ContextAppProvider >
          <Switch>
          <Route exact path='/'>
            <Redirect  to='/website'/>
          </Route>
          
          <Route path='/website'>
            <Websitecontainer 
            />
          </Route>
          
          </Switch>
        </ContextAppProvider>
   </Router>
  );
}
