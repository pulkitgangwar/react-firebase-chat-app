import React from "react";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import { useAuth } from "./contexts/auth.context";

const App = () => {
  const { user } = useAuth();

  return <>{user ? <ChatRoom /> : <SignIn />}</>;
};

export default App;
