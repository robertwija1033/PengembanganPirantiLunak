import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AssignmentCourse from "./components/AssignmentCourse/AssignmentCourse";
import Assignment from "./components/Assignment/Assignment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AssignmentCourse} />
        <Route exact path="/assignment" component={Assignment} />
      </Switch>
    </Router>
  );
}

export default App;
