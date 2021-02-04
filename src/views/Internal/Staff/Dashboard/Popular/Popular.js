import React from "react";

import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/react";

function Popular({ tasks }) {
  const getDescription = ({ custom, description }) =>
    description === "Custom" ? custom : description;

  const getTaskCounts = () => {
    const counts = {};

    for (const task of tasks) {
      const description = getDescription(task);

      if (counts[description]) {
        counts[description] += 1;
      } else {
        counts[description] = 1;
      }
    }

    return counts;
  };

  const getMostPopularTasks = () => {
    const counts = getTaskCounts();
    const sortable = [];
    for (const id in counts) {
      sortable.push([id, counts[id]]);
    }
    sortable.sort((a, b) => b[1] - a[1]);
    return sortable.map((i) => tasks.find((t) => getDescription(t) === i[0])).slice(0, 3);
  };

  const popular = getMostPopularTasks();

  console.log(popular);

  return (
    <Box p="20px" borderWidth="1px" rounded="md" bg="#f8f9fa">
      <Heading size="md" mb="12px">
        Most Popular Tasks
      </Heading>
      <hr />
      <Grid gap="12px" pt="12px">
        {popular.map(
          (task, index) =>
            task && (
              <Flex key={index} justify="space-between">
                <Flex gridGap="8px">
                  <Text color="gray.500" w="16px" textAlign="right">
                    {index + 1}.
                  </Text>
                  <Text>{getDescription(task)}</Text>
                </Flex>
                <Text
                  color="blue.500"
                  bg="blue.100"
                  rounded="md"
                  p="4px 8px"
                  fontWeight="500"
                  fontSize="0.8rem"
                >
                  {task.department}
                </Text>
              </Flex>
            )
        )}
      </Grid>
    </Box>
  );
}

export default Popular;
