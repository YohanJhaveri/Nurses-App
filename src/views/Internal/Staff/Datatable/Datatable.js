import React from "react";
import styled from "styled-components";
import { format } from "functions";

function Datatable({ tasks, departments, nurses }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Time</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Department</TableHeadCell>
          <TableHeadCell>Nurse</TableHeadCell>
        </TableRow>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((task) => (
            <TableRow>
              <TableBodyCell>{format.date(task.date)}</TableBodyCell>
              <TableBodyCell>{format.time(task.time)}</TableBodyCell>
              <TableBodyCell>
                {task.description === "Custom" ? task.custom : task.description}
              </TableBodyCell>
              <TableBodyCell>{task.department}</TableBodyCell>
              <TableBodyCell>{nurses.find((n) => n.id === task.nurseID).name}</TableBodyCell>
            </TableRow>
          ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  width: 100%;
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
  border: 1px solid lightgray;
`;

const TableBodyCell = styled.td`
  text-align: left;
  padding: 10px 15px;
  font-size: 0.9rem;
  border: 1px solid lightgray;
`;

export default Datatable;
