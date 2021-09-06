
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import { DashBoard } from './pages/DashBoard';
import { Index } from './pages/Index';

function App() {
  return (
    <Router>
    <div className=" min-h-screen w-full">
     <Switch>
       <Route exact path="/" component={Index}/>
       <PrivateRoute exact path="/dashboard" component={DashBoard}/>
       <Route path='*'>
          <Redirect to="/" />
        </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
