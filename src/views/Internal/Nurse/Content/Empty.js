import React from "react";
import { Flex } from "@chakra-ui/react";
import { Message } from "components";

function Empty({ isToday }) {
  return (
    <Flex borderWidth="1px" p="40px 30px" my="10px" rounded="md" bg="#f8f9fa">
      <Message
        title="No tasks recorded"
        description={
          isToday
            ? "Click on the 'Add Task' button to log your first task!"
            : "No shift tasks were recorded on this particular day"
        }
      />
    </Flex>
  );
}

export default Empty;
