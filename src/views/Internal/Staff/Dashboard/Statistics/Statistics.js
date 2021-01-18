import React from "react";

import { Grid } from "@chakra-ui/react";
import StatBlock from "./StatBlock";

function Statistics({ tasks, departments, nurses }) {
  const getDateCounts = (dates) => {
    const counts = {};

    for (const date of dates) {
      if (counts[date]) {
        counts[date] += 1;
      } else {
        counts[date] = 1;
      }
    }

    return counts;
  };

  const counts = getDateCounts(tasks ? tasks.map((t) => t.date) : []);
  const keys = Object.keys(counts);
  const vals = Object.values(counts);
  const total = vals.reduce((a, b) => a + b, 0);

  return (
    <Grid gap="15px" templateColumns="1fr 1fr">
      <StatBlock label="Total Nurses" value={nurses.length} />
      <StatBlock label="Total Departments" value={departments.length} />
      <StatBlock label="Total Tasks" value={tasks.length} />
      <StatBlock label="Daily Average" value={(total / keys.length).toFixed(2)} />
    </Grid>
  );
}

export default Statistics;
