import React from "react";
import { Flex } from "@chakra-ui/react";
import { Message } from "components";

function Error() {
  return (
    <Flex h="100vh" w="100vw" bg="#f8f9fa">
      <Message
        type="failure"
        title="Connection Error"
        description="We were unable to load the facility review."
      />
    </Flex>
  );
}

export default Error;
