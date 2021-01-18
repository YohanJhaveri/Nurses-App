import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import Nurses from "images/nurses.jpeg";

function Home() {
  return (
    <Flex p="50px" h="100%" bg="rgb(213, 235, 234)" justify="space-between" align="flex-end">
      <Flex pb="30px" direction="column" align="flex-start">
        <Heading fontSize="3rem" color="teal.500">
          Track and Analyze
        </Heading>
        <Heading fontSize="3rem">your shift tasks</Heading>
        <Link to="/auth">
          <Button colorScheme="teal" mt="60px" size="lg">
            Start Now
          </Button>
        </Link>
      </Flex>
      <Box w="50vw">
        <img src={Nurses} alt="Group of nurses" />
      </Box>
    </Flex>
  );
}

export default Home;
