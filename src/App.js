import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

import Course from "./pages/Course";
import DetailCourse from "./pages/DetailCourse";

import MyCourse from "./pages/MyCourse";
import Instructor from "./pages/Instructor";
import Lecture from "./pages/Lecture";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/course/:id" component={DetailCourse} />
        <Route exact path="/course/lectures/:id" component={Course} />

        <Route exact path="/mycourse" component={MyCourse} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={Forgot} />

        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/lecture" component={Lecture} />

      </Router>
    );
  }
}
export default App;
