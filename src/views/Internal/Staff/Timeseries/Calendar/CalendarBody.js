import React from "react";
import moment from "moment";
import styled from "styled-components";
import { format } from "functions";
import { Flex, Tooltip } from "@chakra-ui/react";

function CalendarBody({ month, year, counts }) {
  const getColors = (value) => {
    if (value) {
      if (value < 10) {
        return ["white", `blue.${value * 100}`];
      } else {
        return ["white", "blue.900"];
      }
    }
    return ["black", "white"];
  };

  const render = () => {
    const monthString = (month < 9 ? "0" : "") + (month + 1);
    const selected = moment(`${year}-${monthString}`, "YYYY-MM");
    const firstWeekday = selected.startOf("month").format("d");
    const daysInMonth = selected.daysInMonth();
    const weeks = [];

    let count = 0;
    while (count - firstWeekday + 1 <= daysInMonth) {
      const days = [];

      for (let i = 0; i < 7; i++) {
        const currentDay = count - firstWeekday + 1;
        const currentDate = format.dateYYYYMMDD([year, month + 1, currentDay]);
        const isValid = currentDay <= daysInMonth && count >= firstWeekday;
        const [color, background] = getColors(counts[currentDate]);

        days.push(
          <TableBodyCell key={i} today={false}>
            <Tooltip
              label={isValid && `${counts[currentDate] || 0} task${count !== 1 ? "s" : ""}`}
              placement="bottom"
              h="100%"
            >
              <Day cursor={isValid && "pointer"} justify="center" align="center">
                <Selected
                  justify="center"
                  align="center"
                  color={color}
                  bg={background}
                  rounded="full"
                >
                  {isValid ? currentDay : ""}
                </Selected>
              </Day>
            </Tooltip>
          </TableBodyCell>
        );

        count++;
      }

      weeks.push(<tr key={count}>{days}</tr>);
    }

    return weeks;
  };

  return (
    <Table>
      <thead>
        <tr>
          <TableHeadCell>Mon</TableHeadCell>
          <TableHeadCell>Tue</TableHeadCell>
          <TableHeadCell>Wed</TableHeadCell>
          <TableHeadCell>Thu</TableHeadCell>
          <TableHeadCell>Fri</TableHeadCell>
          <TableHeadCell>Sat</TableHeadCell>
          <TableHeadCell>Sun</TableHeadCell>
        </tr>
      </thead>
      <tbody>{render()}</tbody>
    </Table>
  );
}

const Table = styled.table`
  table-layout: fixed;
  width: 300px;
`;

const TableHeadCell = styled.th`
  padding: 6px;
  text-align: center;
  font-size: 0.75rem;
`;

const TableBodyCell = styled.td`
  box-sizing: border-box;
  height: calc(300px / 7);
  text-align: center;
  font-size: 0.85rem;
`;

const Day = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const Selected = styled(Flex)`
  height: 80%;
  width: 80%;
`;

export default CalendarBody;
