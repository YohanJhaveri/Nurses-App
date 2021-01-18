import React from "react";

import { format } from "functions";
import { useCollection } from "hooks";
import { auth, firestore } from "database/firebase";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Loading from "./Loading";
import Error from "./Error";
import View from "./View";

function List({ date, isToday, onOpen, setSelected }) {
  const [tasks, loading, error] = useCollection(
    firestore
      .collection("tasks")
      .where("nurseID", "==", auth.currentUser.uid)
      .where("date", "==", date)
      .orderBy("time")
  );

  const handleTaskSelect = (task) => {
    if (isToday) {
      setSelected(task);
      onOpen();
    }
  };

  const render = () => {
    if (loading) return <Loading />;
    if (error) return <Error />;
    return <View tasks={tasks} handleTaskSelect={handleTaskSelect} isToday={isToday} />;
  };

  return (
    <Box>
      <Box w="700px">
        <Box>
          <Heading size="lg">Tasks</Heading>
          <Text color="gray.500">{format.date(date)}</Text>
        </Box>
        {render()}
      </Box>
      {isToday && (
        <Button colorScheme="blue" onClick={onOpen} w="100%">
          Add Task
        </Button>
      )}
    </Box>
  );
}

export default List;
