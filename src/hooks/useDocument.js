import { useState, useEffect } from "react";
import { useDocument as useFirestoreDocument } from "react-firebase-hooks/firestore";

function useDocument(query, options) {
  const [document, setDocument] = useState();
  const [snapshot, loading, error] = useFirestoreDocument(query, options);

  useEffect(() => {
    if (!error && !loading && snapshot) {
      setDocument({ id: snapshot.id, ...snapshot.data() });
    }
  }, [snapshot]);

  return [document, loading, error];
}

export default useDocument;
