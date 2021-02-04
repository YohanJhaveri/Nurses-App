import React from "react";
import { Flex } from "@chakra-ui/react";
import { Message } from "components";

function Error() {
  return (
    <Flex h="calc(100vh - 75px)" w="100vw">
      <Message
        type="failure"
        title="Authorization Error"
        description="You do not have valid authorization to access the facility review. If you think this is incorrect, please contact the database administrator for access."
      />
    </Flex>
  );
}

export default Error;
