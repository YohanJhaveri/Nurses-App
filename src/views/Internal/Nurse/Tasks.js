import React, { useState, useEffect } from "react";

import { format } from "functions";
import { Flex, useDisclosure } from "@chakra-ui/react";

import Calendar from "./Calendar/Calendar";
import Form from "./Form/Form";
import Content from "./Content/Content";

function Tasks() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = useState();
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");
  const isToday = date === today;

  useEffect(() => {
    const now = new Date();
    const todayFormatted = format.dateYYYYMMDD(now);
    setDate(todayFormatted);
    setToday(todayFormatted);
  }, []);

  return (
    <Flex p="50px" gridGap="50px" align="flex-start">
      <Calendar today={today} date={date} setDate={setDate} />
      <Content date={date} isToday={isToday} onOpen={onOpen} setSelected={setSelected} />
      <Form selected={selected} setSelected={setSelected} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Tasks;
