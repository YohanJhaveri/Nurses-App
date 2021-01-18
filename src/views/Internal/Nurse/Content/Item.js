import React from "react";
import { format } from "functions";
import { Flex, Text } from "@chakra-ui/react";

function Item({ task, handleTaskSelect }) {
  return (
    <Flex
      cursor="pointer"
      align="center"
      gridGap="8px"
      borderWidth="1px"
      p="10px 12px"
      rounded="md"
      bg="#f8f9fa"
      onClick={() => handleTaskSelect(task)}
    >
      <Text fontSize="0.9rem" color="gray.500" width="64px" textAlign="right">
        {format.time(task.time)}
      </Text>
      <Text mr="auto">{task.description === "Custom" ? task.custom : task.description}</Text>
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
  );
}

export default Item;
