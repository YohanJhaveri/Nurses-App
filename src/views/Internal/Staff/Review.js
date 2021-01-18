import React, { useState } from "react";

import { useReview } from "hooks";
import { helper } from "functions";

import { Loading, Select, Input } from "components";
import {
  Box,
  Heading,
  Text,
  Grid,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Error from "./Error";
import Dashboard from "./Dashboard/Dashboard";
import Timeseries from "./Timeseries/Timeseries";
import Datatable from "./Datatable/Datatable";

function Review() {
  const [{ facility, nurses, departments, tasks }, loading, error] = useReview();
  const [inputs, setInputs] = useState({
    department: "",
    nurse: "",
    startDate: "",
    endDate: "",
  });

  const nurseOptions = helper.getNurseOptions(nurses);
  const departmentOptions = helper.getNurseOptions(departments);

  const filterTasks = () => {
    const selectedDepartment = helper.findDepartment(departments, inputs.department);
    const selectedNurse = helper.findNurse(departments, inputs.nurse);

    const filtered = tasks
      .filter((t) => (selectedDepartment ? t.departmentID === selectedDepartment.id : true))
      .filter((t) => (selectedNurse ? t.nurseID === selectedNurse.id : true))
      .filter((t) => {
        const start = new Date(inputs.startDate);
        const end = new Date(inputs.endDate);
        const date = new Date(t.date);

        if ((start && date < start) || (end && date > end)) {
          return false;
        }
        return true;
      });

    return filtered;
  };

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTasks = tasks ? filterTasks() : [];

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Box p="50px" w="100vw">
      <Heading size="lg">Review</Heading>
      <Text color="gray.500">{facility && facility.name} Facility</Text>

      <Grid gap="15px" pt="25px">
        <Flex gridGap="25px">
          <Select
            label="Department"
            name="department"
            value={inputs.department}
            options={departmentOptions}
            onChange={handleChange}
          />
          <Select
            label="Nurse"
            name="nurse"
            value={inputs.nurse}
            options={nurseOptions}
            onChange={handleChange}
          />
          <Input
            label="Start Date"
            name="startDate"
            value={inputs.startDate}
            type="date"
            onChange={handleChange}
          />
          <Input
            label="End Date"
            name="endDate"
            value={inputs.endDate}
            type="date"
            onChange={handleChange}
          />
        </Flex>
      </Grid>

      <Tabs py="20px">
        <TabList>
          <Tab fontWeight="600" color="gray.500">
            Dashboard
          </Tab>
          <Tab fontWeight="600" color="gray.500">
            Timeseries
          </Tab>
          <Tab fontWeight="600" color="gray.500">
            Datatable
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Dashboard tasks={filteredTasks} nurses={nurses} departments={departments} />
          </TabPanel>
          <TabPanel>
            <Timeseries tasks={filteredTasks} />
          </TabPanel>
          <TabPanel>
            <Datatable tasks={filteredTasks} nurses={nurses} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Review;
