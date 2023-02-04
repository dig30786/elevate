import React from 'react'
import './Body.css'
import Home from './Home/Home'
import { Route, Switch} from 'react-router-dom';
import Lostpage from './404/Lostpage';

const Body = (props) => {
  return (
    <div className="body">
      <Switch>
        <Route exact path='/website'>
          <Home />
        </Route>
        <Route>
          <Lostpage />
        </Route>
      </Switch>
    </div>
  )
}
export default Body
