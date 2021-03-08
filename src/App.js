import React, { Component } from "react";
import {
  NavLink,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul className="Navigation">
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/courses">Courses</NavLink>
          </ul>
          <Switch>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/" exact to="/courses" />
            <Route render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
