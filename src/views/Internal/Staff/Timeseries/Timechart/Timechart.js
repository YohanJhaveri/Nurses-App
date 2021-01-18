import React from "react";
import { Flex, Box, Text, Tooltip } from "@chakra-ui/react";

function Timechart({ times }) {
  const getHourCounts = () => {
    const counts = [];

    for (let i = 0; i < 24; i++) {
      counts[i] = 0;
    }

    for (const time of times) {
      const hour = time.split(":")[0];
      const index = parseInt(hour);

      if (counts[index]) {
        counts[index] += 1;
      } else {
        counts[index] = 1;
      }
    }

    return counts;
  };

  const formatLabel = (index) => {
    const meridian = index < 12 ? "AM" : "PM";
    const hours12 = index % 12 || 12;
    return `${hours12}${meridian}`;
  };

  const counts = getHourCounts();
  const max = Math.max(...counts);

  return (
    <Flex align="flex-end" gridGap="10px">
      {counts.map((count, index) => (
        <Flex
          key={index}
          direction="column"
          justify="flex-end"
          align="center"
          w="calc(100% / 24)"
          h="340px"
          gridGap="10px"
        >
          <Tooltip label={`${count} task${count !== 1 ? "s" : ""}`} placement="top" h="100%">
            <Box
              bg="blue.500"
              rounded="md"
              w="100%"
              h={`${Math.round((count * 100) / max)}%`}
              borderWidth="1px"
              borderColor="blue.600"
            />
          </Tooltip>
          <Text fontSize="0.65rem" fontWeight="600">
            {formatLabel(index)}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default Timechart;
