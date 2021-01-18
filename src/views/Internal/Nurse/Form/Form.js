import React, { useState, useEffect } from "react";

import { useCollection } from "hooks";
import { firestore } from "database/firebase";

import { Grid } from "@chakra-ui/react";
import { Input, Textarea, Select, Sidebar } from "components";

import { helper } from "functions";
import { addTask, updateTask } from "database/tasks";

function Form({ selected, setSelected, isOpen, onClose }) {
  const [inputs, setInputs] = useState({
    time: "",
    department: "",
    description: "",
    custom: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [departments] = useCollection(firestore.collection("departments"));

  const selectedDepartment = helper.findDepartment(departments, inputs.department);
  const departmentOptions = helper.getDepartmentOptions(departments);
  const descriptionOptions = helper.getDescriptionOptions(selectedDepartment);

  useEffect(() => {
    if (selected) setInputs({ ...selected });
  }, [selected]);

  const handleChange = (name, value) => {
    setInputs((prev) => ({
      ...prev,
      description: name === "department" ? "" : prev.description,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: !value }));
  };

  const handleCancel = () => {
    setSelected();
    setInputs({
      time: "",
      department: "",
      description: "",
      custom: "",
    });
    setErrors({});
    onClose();
  };

  const handleSubmit = () => {
    const err = {
      time: !inputs.time,
      department: !inputs.department,
      description: !inputs.description,
      custom: !inputs.custom,
    };
    setErrors(err);
    if (err.time || err.department || err.description) return;

    const { time, department, description, custom } = inputs;

    setLoading(true);

    const data = {
      time,
      department,
      description,
      custom,
      departmentID: selectedDepartment.id,
      facilityID: selectedDepartment.facilityID,
    };

    const taskFunctions = {
      add: () => addTask(data),
      update: () => updateTask(selected.id, data),
    };

    taskFunctions[selected ? "update" : "add"]()
      .then(handleCancel)
      .catch(alert)
      .finally(() => setLoading(false));
  };

  return (
    <Sidebar
      title={`${selected ? "Edit" : "Add"} Task`}
      loading={loading}
      isOpen={isOpen}
      onClose={handleCancel}
      onSubmit={handleSubmit}
    >
      <Grid gap="25px">
        <Input
          type="time"
          name="time"
          label="Time"
          value={inputs.time}
          error={errors.time}
          onChange={handleChange}
        />
        <Select
          name="department"
          label="Department"
          value={inputs.department}
          error={errors.department}
          options={departmentOptions}
          onChange={handleChange}
        />
        {inputs.department && (
          <Select
            name="description"
            label="Task Description"
            value={inputs.description}
            error={errors.description}
            options={descriptionOptions}
            onChange={handleChange}
          />
        )}
        {inputs.description === "Custom" && (
          <Textarea
            limit={100}
            name="custom"
            label="Custom Description"
            value={inputs.custom}
            error={errors.custom}
            onChange={handleChange}
          />
        )}
      </Grid>
    </Sidebar>
  );
}

export default Form;
