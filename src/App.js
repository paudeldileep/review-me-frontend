import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/routing/PrivateRoute";
import PublicRoute from "./components/routing/PublicRoute";

import LogIn from "./pages/Account";
import { DashBoard } from "./pages/DashBoard";
import { Index } from "./pages/Index";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full mx-1">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <PublicRoute exact path="/login" component={LogIn} />
          <PrivateRoute exact path="/dashboard" component={DashBoard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
