import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Course from "./pages/Course";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

import Learning from "./pages/Learning";

import MyCourse from "./pages/MyCourse";
import Instructor from "./pages/Instructor";
import Lecture from "./pages/Lecture";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/course/:id" component={Course} />
        <Route path="/learning/:id" component={Learning} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={Forgot} />

        <Route path="/mycourse" component={MyCourse} />
        <Route path="/instructor" component={Instructor} />
        <Route path="/lecture/:id" component={Lecture} />
      </Router>
    );
  }
}
export default App;
