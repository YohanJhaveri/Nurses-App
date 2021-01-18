import React, { useState } from "react";

import { useReview } from "hooks";

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
import Dashboard from "./Dashboard/Dashboard";
import Datatable from "./Datatable/Datatable";

function Review() {
  const [{ facility, nurses, departments, tasks }, loading, error] = useReview();
  const [filters, setFilters] = useState({
    department: "",
    nurse: "",
    startDate: "",
    endDate: "",
  });

  const filterTasks = () => {
    return tasks;
  };

  const filteredTasks = filterTasks();

  const handleChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box p="50px" w="100vw">
      <Heading size="lg">Review</Heading>
      <Text color="gray.500">{facility && facility.name} Facility</Text>

      <Grid gap="15px" pt="25px">
        <Flex gridGap="25px">
          <Select
            name="department"
            value={filters.department}
            label="Department"
            options={[]}
            onChange={handleChange}
          />
          <Select
            name="nurse"
            value={filters.nurse}
            label="Nurse"
            options={[]}
            onChange={handleChange}
          />
          <Input
            name="startDate"
            value={filters.startDate}
            type="date"
            label="Start Date"
            onChange={handleChange}
          />
          <Input
            name="endDate"
            value={filters.endDate}
            type="date"
            label="End Date"
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
            Datatable
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Dashboard tasks={filteredTasks} nurses={nurses} departments={departments} />
          </TabPanel>
          <TabPanel>
            <Datatable tasks={filteredTasks} nurses={nurses} departments={departments} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Review;
