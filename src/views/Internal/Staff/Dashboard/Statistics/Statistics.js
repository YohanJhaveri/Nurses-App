import React, { useState } from "react";

import { Flex } from "@chakra-ui/react";
import Tab from "./Tab";
import Overall from "./Overall";
import TimeChart from "./TimeChart";

function Statistics({ tasks, departments, nurses }) {
  const [tab, setTab] = useState("Overall");
  const tabs = ["Overall", "Time", "Popularity"];

  const render = {
    Overall: <Overall tasks={tasks} nurses={nurses} departments={departments} />,
    Time: <TimeChart times={tasks.map((t) => t.time)} />,
  };

  return (
    <div>
      <Flex gridGap="8px">
        {tabs.map((t) => (
          <Tab selected={t === tab} handleClick={() => setTab(t)}>
            {t}
          </Tab>
        ))}
      </Flex>
      {render[tab]}
    </div>
  );
}

export default Statistics;
