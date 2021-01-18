import React from "react";

import { auth } from "database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Loading } from "components";
import External from "views/External/External";
import Internal from "views/Internal/Internal";

function App() {
  const [cred, loading] = useAuthState(auth);
  return loading ? <Loading /> : cred ? <Internal /> : <External />;
}

export default App;
