import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Main from "Routes/Main";
import Signup from "Routes/Signup";
import Login from "Routes/Login";
import Navbar from "./Navbar";

export default () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Login" component={Login} />
      <Route path="/Search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
