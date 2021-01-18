import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

function ColumnHead({ title, sort, handleSelectSort }) {
  return (
    <Flex justify="space-between" align="center" onClick={() => handleSelectSort(title)}>
      <Text>{title}</Text>
      {sort.column === title && (sort.order === "ascending" ? <FaCaretUp /> : <FaCaretDown />)}
    </Flex>
  );
}

export default ColumnHead;
