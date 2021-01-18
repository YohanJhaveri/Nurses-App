import React from "react";

import { format } from "functions";

import { Box, Heading, Text, Button } from "@chakra-ui/react";

import View from "./View";

function Content({ date, isToday, onOpen, setSelected }) {
  const handleTaskSelect = (task) => {
    if (isToday) {
      setSelected(task);
      onOpen();
    }
  };

  return (
    <Box w="700px">
      <Heading size="lg">Tasks</Heading>
      <Text color="gray.500">{format.date(date)}</Text>
      <View date={date} isToday={isToday} handleTaskSelect={handleTaskSelect} />
      {isToday && (
        <Button colorScheme="blue" onClick={onOpen} w="100%">
          Add Task
        </Button>
      )}
    </Box>
  );
}

export default Content;
