import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Course from "./components/Course/Course";
import Navbar from "./components/Navbar/Navbar";
import AssignmentCourse from "./components/AssignmentCourse/AssignmentCourse";
import Meeting from "./components/Meeting/Meeting";
import Assignments from "./components/Assignments/Assignments";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/navbar" component={Navbar} />
        <Route exact path="/assignment-course" component={AssignmentCourse} />
        <Route exact path="/meeting" component={Meeting} />
        <Route exact path="/assignments" component={Assignments} />
      </Switch>
    </Router>
  );
}

export default App;
