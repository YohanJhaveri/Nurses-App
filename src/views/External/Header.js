import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Button, Image } from "@chakra-ui/react";
import Nurse from "images/nurse.svg";

function Header() {
  return (
    <Flex px="50px" h="75px" bg="white" justify="space-between" align="center">
      <Link to="/">
        <Flex align="center" cursor="pointer">
          <Image src={Nurse} height="40px" />
          <Heading fontSize="1.5rem">Proxima</Heading>
        </Flex>
      </Link>
      <Link to="/auth">
        <Button colorScheme="teal">Start Now</Button>
      </Link>
    </Flex>
  );
}

export default Header;
