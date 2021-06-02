import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import firebase from "./firebase";

const App = () => {
  // fix it ---->
  const [user, loading, error] = useAuthState(firebase.auth());

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!loading && error) {
    return <div>{error}</div>;
  }

  return <>{user ? <ChatRoom /> : <SignIn />}</>;
};

export default App;
