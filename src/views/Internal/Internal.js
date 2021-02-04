import React, { useState } from "react";

import { auth, firestore } from "database/firebase";
import { useDocument } from "hooks";

import { Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Loading } from "components";

import Header from "./Header";
import Tasks from "views/Internal/Nurse/Tasks";
import Review from "views/Internal/Staff/Review";

function Internal() {
  const [user] = useDocument(firestore.collection("users").doc(auth.currentUser.uid));

  return user ? (
    <Box>
      <Header user={user} />
      <Box h="100vh">
        <Switch>
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/review" component={Review} />
          <Redirect to="/tasks" />
        </Switch>
      </Box>
    </Box>
  ) : (
    <Loading />
  );
}

export default Internal;
