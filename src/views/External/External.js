import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Home from "views/External/Home/Home";
import Auth from "views/External/Auth/Auth";

import Header from "./Header";
import { Box } from "@chakra-ui/react";

function External() {
  return (
    <Box>
      <Header />
      <Box h="calc(100vh - 75px)">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      </Box>
    </Box>
  );
}

export default External;
