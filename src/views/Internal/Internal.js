import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Tasks from "views/Internal/Nurse/Tasks";
import Review from "views/Internal/Staff/Review";

function Internal() {
  return (
    <Switch>
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/review" component={Review} />
      <Redirect to="/tasks" />
    </Switch>
  );
}

export default Internal;
