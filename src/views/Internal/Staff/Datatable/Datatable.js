import React, { useState } from "react";
import styled from "styled-components";
import { format } from "functions";
import { Text } from "@chakra-ui/react";

import ColumnHead from "./ColumnHead";

function Datatable({ tasks, nurses }) {
  const [sort, setSort] = useState({ column: "Date", order: "descending" });

  const mapper = () => {
    return tasks.map((task) => ({
      date: format.date(task.date),
      time: format.time(task.time),
      description: task.description === "Custom" ? task.custom : task.description,
      department: task.department,
      nurse: nurses.find((n) => n.id === task.nurseID).name,
    }));
  };

  const sorter = () => {
    // ==================================
    // WORK IN PROGRESS
    // TODO: Figure out sorting by column
    // ==================================

    const mapped = mapper(tasks);
    const attribute = sort.column.toLowerCase();

    switch (attribute) {
      case "date":
        mapped.sort((a, b) => new Date(b[attribute]) - new Date(a[attribute]));
        break;

      default:
        mapped.sort((a, b) => (a.brand > b.brand ? 1 : -1));
    }

    return mapped;
  };

  const handleSelectSort = (column) => {
    setSort((prev) => {
      if (prev.column === column) {
        return { column, order: prev.order === "ascending" ? "descending" : "ascending" };
      }
      return { column, order: "ascending" };
    });
  };

  const sorted = sorter();

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadCell>
            <ColumnHead title="Date" sort={sort} handleSelectSort={handleSelectSort} />
          </TableHeadCell>
          <TableHeadCell>
            <ColumnHead title="Time" sort={sort} handleSelectSort={handleSelectSort} />
          </TableHeadCell>
          <TableHeadCell>
            <ColumnHead title="Description" sort={sort} handleSelectSort={handleSelectSort} />
          </TableHeadCell>
          <TableHeadCell>
            <ColumnHead title="Department" sort={sort} handleSelectSort={handleSelectSort} />
          </TableHeadCell>
          <TableHeadCell>
            <ColumnHead title="Nurse" sort={sort} handleSelectSort={handleSelectSort} />
          </TableHeadCell>
        </TableRow>
      </thead>
      <tbody>
        {sorted &&
          sorted.map((task, index) => (
            <TableRow key={index}>
              <TableBodyCell>{task.date}</TableBodyCell>
              <TableBodyCell>{task.time}</TableBodyCell>
              <TableBodyCell>{task.description}</TableBodyCell>
              <TableBodyCell>
                <Text
                  color="blue.500"
                  bg="blue.100"
                  rounded="md"
                  p="4px 8px"
                  fontWeight="500"
                  fontSize="0.8rem"
                  display="inline-block"
                >
                  {task.department}
                </Text>
              </TableBodyCell>
              <TableBodyCell>{task.nurse}</TableBodyCell>
            </TableRow>
          ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

const TableHeadCell = styled.th`
  text-align: left;
  padding: 10px 15px;
  background: #f8f9fa;
  border: 1px solid #e8e9ea;
`;

const TableBodyCell = styled.td`
  text-align: left;
  padding: 10px 15px;
  font-size: 0.9rem;
  border: 1px solid #e8e9ea;
`;

export default Datatable;
