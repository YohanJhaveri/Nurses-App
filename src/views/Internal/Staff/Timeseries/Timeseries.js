import React from "react";

import { Grid, Flex } from "@chakra-ui/react";
import Calendar from "../Timeseries/Calendar/Calendar";
import Timechart from "../Timeseries/Timechart/Timechart";

function Timeseries({ tasks }) {
  return (
    <Grid gap="40px" py="20px">
      <Flex gridGap="40px" align="flex-start">
        <Calendar dates={tasks ? tasks.map((t) => t.date) : []} />
        <Timechart times={tasks ? tasks.map((t) => t.time) : []} />
      </Flex>
    </Grid>
  );
}

export default Timeseries;
