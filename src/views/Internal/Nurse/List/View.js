import React from "react";
import { Grid } from "@chakra-ui/react";
import Item from "./Item";
import Empty from "./Empty";

function View({ tasks, handleTaskSelect, isToday }) {
  return tasks && tasks.length ? (
    <Grid gridGap="10px" py="10px">
      {tasks.map((task) => (
        <Item task={task} handleTaskSelect={handleTaskSelect} />
      ))}
    </Grid>
  ) : (
    <Empty isToday={isToday} />
  );
}

export default View;
