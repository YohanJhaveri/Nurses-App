import React from "react";
import moment from "moment";
import styled from "styled-components";
import { format } from "functions";
import { Flex } from "@chakra-ui/react";

function CalendarBody({ month, year, today, date, setDate }) {
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

        days.push(
          <TableBodyCell key={i} today={false} onClick={() => isValid && setDate(currentDate)}>
            <Day justify="center" align="center">
              <Selected
                justify="center"
                align="center"
                today={today === currentDate}
                selected={date === currentDate}
              >
                {isValid ? currentDay : ""}
              </Selected>
            </Day>
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
  width: 360px;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  text-align: center;
  font-size: 0.85rem;
`;

const TableBodyCell = styled.td`
  box-sizing: border-box;
  height: calc(360px / 7);
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Day = styled(Flex)`
  height: 100%;
  width: 100%;
`;

const Selected = styled(Flex)`
  height: 70%;
  width: 70%;

  ${(props) =>
    props.today &&
    `
    font-weight: 500;
    color: rgb(49, 130, 206);
    border: 2px solid rgb(49, 130, 206);
    border-radius: 1000px;
  `}

  ${(props) =>
    props.selected &&
    `
    font-weight: 500;
    color: white;
    background: rgb(49, 130, 206);
    border-radius: 1000px;
  `}
`;

export default CalendarBody;
