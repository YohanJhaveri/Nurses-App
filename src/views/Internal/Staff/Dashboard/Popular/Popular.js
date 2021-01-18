import React from "react";

import { Box, Grid, Flex, Text, Heading } from "@chakra-ui/react";

function Popular({ tasks, departments, nurses }) {
  const getTaskCounts = () => {
    const counts = {};

    for (const task of tasks) {
      if (counts[task.id]) {
        counts[task.id] += 1;
      } else {
        counts[task.id] = 1;
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
    sortable.sort((a, b) => a[1] - b[1]);
    return sortable.map((i) => tasks.find((t) => t.id === i[0])).slice(0, 3);
  };

  const popular = getMostPopularTasks();

  return (
    <Box bg="white" p="20px" borderWidth="1px" rounded="md" bg="#f8f9fa">
      <Heading size="md" mb="12px">
        Most Popular Tasks
      </Heading>
      <hr />
      <Grid gap="12px" pt="12px">
        {popular.map((task, index) => (
          <Flex key={index} justify="space-between">
            <Flex gridGap="8px">
              <Text color="gray.500" w="16px" textAlign="right">
                {index + 1}.
              </Text>
              <Text>{task.description === "Custom" ? task.custom : task.description}</Text>
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
        ))}
      </Grid>
    </Box>
  );
}

export default Popular;
