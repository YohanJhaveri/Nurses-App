import React from "react";
import { Flex, Box, Text, Tooltip } from "@chakra-ui/react";

function TimeChart({ times }) {
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

  const counts = [0, 3, 5, 3, 8, 9, 3, 2, 4, 6, 8, 0, 6, 3, 2, 5, 8, 9, 2, 3, 7, 2, 5, 5];
  const max = Math.max(...counts);

  return (
    <Flex py="40px" align="flex-end" gridGap="10px">
      {counts.map((count, index) => (
        <Tooltip label={`${count} tasks`} placement="bottom">
          <Flex
            direction="column"
            justify="flex-end"
            align="center"
            h="400px"
            w="calc(100% / 24)"
            gridGap="10px"
          >
            <Box
              bg="blue.300"
              rounded="md"
              w="100%"
              h={`${Math.round((count * 100) / max)}%`}
              borderWidth="1px"
              borderColor="blue.400"
            />
            <Text fontSize="0.75rem" fontWeight="500">
              {formatLabel(index)}
            </Text>
          </Flex>
        </Tooltip>
      ))}
    </Flex>
  );
}

export default TimeChart;
