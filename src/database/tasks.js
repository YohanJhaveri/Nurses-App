import { auth, firestore } from "database/firebase";
import { format } from "functions";

const addTask = async (data) => {
  const { uid } = auth.currentUser;
  data.date = format.dateYYYYMMDD(new Date());
  data.nurseID = uid;
  return await firestore.collection("tasks").add(data);
};

const updateTask = async (id, data) => {
  return await firestore.collection("tasks").doc(id).update(data);
};

export { addTask, updateTask };
