import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeadButton from "./CalendarHeadButton";

function CalendarHead({ month, year, backYear, backMonth, nextYear, nextMonth }) {
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Flex justify="space-between" align="center" mb="10px">
      <Flex gridGap="8px">
        <CalendarHeadButton icon={<FaAngleDoubleLeft />} onClick={backYear} />
        <CalendarHeadButton icon={<FaAngleLeft />} onClick={backMonth} />
      </Flex>
      <Text fontWeight="600">{`${MONTH_NAMES[month]} ${year}`}</Text>
      <Flex gridGap="8px">
        <CalendarHeadButton icon={<FaAngleRight />} onClick={nextMonth} />
        <CalendarHeadButton icon={<FaAngleDoubleRight />} onClick={nextYear} />
      </Flex>
    </Flex>
  );
}

export default CalendarHead;
