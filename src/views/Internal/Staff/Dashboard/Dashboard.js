import React from "react";

import { Grid, Flex } from "@chakra-ui/react";
import Calendar from "./Calendar/Calendar";
import Statistics from "./Statistics/Statistics";
import Timeseries from "./Timeseries/Timeseries";

function Dashboard({ nurses, tasks, departments }) {
  return (
    <Grid gap="40px" py="20px">
      <Flex gridGap="40px">
        <Calendar dates={tasks ? tasks.map((t) => t.date) : []} />
        <Statistics nurses={nurses} tasks={tasks} departments={departments} />
      </Flex>
      <Timeseries />
    </Grid>
  );
}

export default Dashboard;
