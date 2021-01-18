import { useState, useEffect } from "react";
import { auth, firestore } from "database/firebase";

async function getDocument(query) {
  const snapshot = await query.get();
  return { id: snapshot.id, ...snapshot.data() };
}

async function getCollection(query) {
  const snapshot = await query.get();
  const documents = [];
  // ==============================================================================
  // for some odd reason as much as I want to use the ".map" higher order function,
  // snapshot's value isn't a normal iterable and doesn't have the function "map"
  // ==============================================================================
  snapshot.forEach((doc) => documents.push({ id: doc.id, ...doc.data() }));
  return documents;
}

function useReview() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const user = await getDocument(firestore.collection("users").doc(auth.currentUser.uid));

      if (!(user && user.facilityID)) {
        throw Error("User data not found");
      }

      const { facilityID } = user;

      console.log(facilityID);

      const [facility, nurses, departments, tasks] = await Promise.all([
        getDocument(firestore.collection("facilities").doc(facilityID)),
        getCollection(firestore.collection("users").where("facilityID", "==", facilityID)),
        getCollection(firestore.collection("departments").where("facilityID", "==", facilityID)),
        getCollection(firestore.collection("tasks").where("facilityID", "==", facilityID)),
      ]);

      setData({
        departments,
        nurses,
        facility,
        tasks,
      });
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if ((data && data.nurses) || error) {
      setLoading(false);
    } else {
      fetchData();
    }
  }, [data, error]);

  return [data, loading, error];
}

export default useReview;
