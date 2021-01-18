import React from "react";

import { Grid, Flex } from "@chakra-ui/react";
import Statistics from "./Statistics/Statistics";
import Popular from "./Popular/Popular";

function Dashboard({ nurses, tasks, departments }) {
  return (
    <Grid gap="40px" py="20px" templateColumns="1fr 1fr">
      <Statistics nurses={nurses} tasks={tasks} departments={departments} />
      <Popular tasks={tasks} />
    </Grid>
  );
}

export default Dashboard;
