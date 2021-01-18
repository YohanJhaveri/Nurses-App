import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Flex justify="center" align="center" h="100vh" w="100vw">
      <Spinner thickness="4px" speed="0.5s" emptyColor="gray.200" color="blue.500" size="lg" />
    </Flex>
  );
}

export default Loading;
