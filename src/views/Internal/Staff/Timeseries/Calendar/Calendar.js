import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";

import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

function Calendar({ dates }) {
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    const now = new Date();
    setMonth(now.getMonth());
    setYear(now.getFullYear());
  }, []);

  const backMonth = () => {
    setMonth((prev) => {
      if (prev === 0) {
        backYear();
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setMonth((prev) => {
      if (prev === 11) {
        nextYear();
        return 0;
      }
      return prev + 1;
    });
  };

  const backYear = () => {
    setYear((prev) => prev - 1);
  };

  const nextYear = () => {
    setYear((prev) => prev + 1);
  };

  const getDateCounts = (dates) => {
    const counts = {};

    for (const date of dates) {
      if (counts[date]) {
        counts[date] += 1;
      } else {
        counts[date] = 1;
      }
    }

    return counts;
  };

  const counts = getDateCounts(dates);

  return (
    <Grid gap="8px" w="300px">
      <CalendarHead
        month={month}
        year={year}
        backYear={backYear}
        backMonth={backMonth}
        nextYear={nextYear}
        nextMonth={nextMonth}
      />
      <hr />
      <CalendarBody month={month} year={year} counts={counts} />
    </Grid>
  );
}

export default Calendar;
