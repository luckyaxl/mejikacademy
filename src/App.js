import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Instructor from "./pages/Instructor";

import Course from "./pages/Course";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

import Learning from "./pages/Learning";

import Courses from "./pages/Courses";
import Lecture from "./pages/Lecture";

import ErrorPage from "./pages/404";

const active = localStorage.getItem("active");
if (!active) {
  localStorage.setItem("active", "student");
}

class App extends Component {
  render() {
    const active = localStorage.getItem("active");
    return (
      <Router>
        <Switch>
          {active === "student" ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Route exact path="/" component={Instructor} />
          )}

          <Route path="/course/:id" component={Course} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={Forgot} />

          {/** PRIVATE */}
          <Route path="/learning/:id" component={Learning} />
          <Route path="/courses" component={Courses} />
          <Route path="/lecture/:id" component={Lecture} />
          <Route path="" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}
export default App;
