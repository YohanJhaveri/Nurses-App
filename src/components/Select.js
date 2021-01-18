import React from "react";
import { FormControl, Select, FormLabel, FormErrorMessage } from "@chakra-ui/react";

function Field({ name, value, label, placeholder, error, options, onChange, ...rest }) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(name, value);
  };

  return (
    <FormControl isInvalid={error} {...rest}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select value={value} placeholder={placeholder} onChange={handleChange} bg="white">
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

export default Field;
