import React from "react";
import { Grid, Skeleton } from "@chakra-ui/react";

function TasksLoading() {
  return (
    <Grid w="100%" gap="10px" py="10px">
      <Skeleton rounded="md" h="49px" />
      <Skeleton rounded="md" h="49px" />
      <Skeleton rounded="md" h="49px" />
      <Skeleton rounded="md" h="49px" />
    </Grid>
  );
}

export default TasksLoading;
