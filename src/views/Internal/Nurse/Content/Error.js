import React from "react";
import { Flex } from "@chakra-ui/react";
import { Message } from "components";

function TasksError() {
  return (
    <Flex borderWidth="1px" p="40px 30px" m="20px 0" rounded="md" bg="#f8f9fa">
      <Message
        type="failure"
        title="Connection Error"
        description="We were unable to load your tasks. However, you can still add new tasks which will be updated as soon as you regain connection."
      />
    </Flex>
  );
}

export default TasksError;
