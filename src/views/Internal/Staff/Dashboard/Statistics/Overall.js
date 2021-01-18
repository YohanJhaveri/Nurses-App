import React from "react";

import { Grid } from "@chakra-ui/react";
import StatBlock from "./StatBlock";

function Overall({ tasks, nurses, departments }) {
  return (
    <Grid gap="15px" py="15px" templateColumns="1fr 1fr">
      <StatBlock label="Number of Nurses" value={nurses.length} />
      <StatBlock label="Number of Departments" value={departments.length} />
      <StatBlock label="Average Tasks per Nurse" value={tasks.length / nurses.length} />
      <StatBlock label="Average Tasks per Department" value={tasks.length / departments.length} />
    </Grid>
  );
}

export default Overall;
