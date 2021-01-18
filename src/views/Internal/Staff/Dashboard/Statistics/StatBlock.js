import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

function StatBlock({ label, value }) {
  return (
    <Box bg="white" p="15px 20px" borderWidth="1px" rounded="md">
      <Text color="gray.500">{label}</Text>
      <Heading size="lg">{value}</Heading>
    </Box>
  );
}

export default StatBlock;
