import React from "react";

import { useCollection } from "hooks";
import { auth, firestore } from "database/firebase";

import Loading from "./Loading";
import Error from "./Error";
import List from "./List";
import Empty from "./Empty";

function View({ date, isToday, handleTaskSelect }) {
  const [tasks, loading, error] = useCollection(
    firestore
      .collection("tasks")
      .where("nurseID", "==", auth.currentUser.uid)
      .where("date", "==", date)
      .orderBy("time")
  );

  if (loading) return <Loading />;
  if (error) return <Error />;

  return tasks && tasks.length ? (
    <List tasks={tasks} handleTaskSelect={handleTaskSelect} />
  ) : (
    <Empty isToday={isToday} />
  );
}

export default View;
