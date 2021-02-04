import React from "react";
import { signout } from "database";
import { Box, Flex, Button, Heading, Text, Image } from "@chakra-ui/react";
import { FaDoorOpen } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Nurse from "images/nurse.svg";

function Header({ user }) {
  const { pathname } = useLocation();

  return (
    <Flex p="20px 50px" w="100%" justify="space-between" align="center">
      <Link to="/tasks">
        <Flex align="center" cursor="pointer">
          <Image src={Nurse} height="40px" />
          <Box>
            <Heading fontSize="1.4rem">Proxima</Heading>
            <Text fontSize="1rem" color="gray.500">
              {user.name}
            </Text>
          </Box>
        </Flex>
      </Link>
      <Flex gridGap="40px" align="center">
        {user.isSupervisor && (
          <>
            <Link to="/tasks">
              <Text
                borderBottomWidth={pathname === "/tasks" && "2px"}
                borderBottomColor={pathname === "/tasks" && "blue.500"}
                color={pathname === "/tasks" ? "blue.500" : "gray.500"}
                fontWeight="500"
              >
                Tasks
              </Text>
            </Link>
            <Link to="/review">
              <Text
                borderBottomWidth={pathname === "/review" && "2px"}
                borderBottomColor={pathname === "/review" && "blue.500"}
                color={pathname === "/review" ? "blue.500" : "gray.500"}
                fontWeight="500"
              >
                Review
              </Text>
            </Link>
          </>
        )}
        <Button leftIcon={<FaDoorOpen />} colorScheme="red" onClick={signout}>
          Sign out
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
