import React from "react";
import { Button } from "@chakra-ui/react";

function Tab({ children, selected, handleClick }) {
  return (
    <Button
      colorScheme={selected ? "blue" : ""}
      color={selected ? "white" : "gray.500"}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export default Tab;
