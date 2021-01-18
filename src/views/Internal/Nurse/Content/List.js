import React from "react";

import { Grid } from "@chakra-ui/react";

import Item from "./Item";

function List({ tasks, handleTaskSelect }) {
  return (
    <Grid gridGap="10px" py="10px">
      {tasks.map((task) => (
        <Item task={task} handleTaskSelect={handleTaskSelect} />
      ))}
    </Grid>
  );
}

export default List;
