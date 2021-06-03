import React, { useEffect, useState } from "react";
import { Button, ChatEngine, getOrCreateChat } from "react-chat-engine";
import { useAuth } from "../contexts/auth.context";
import { signUpWithChatEngine } from "../utils/login";
import { auth } from "../firebase";

const ChatRoom = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUser = async () => {
      await signUpWithChatEngine(user);
    };
    getUser();
  }, [user]);

  const handleLogOut = () => {
    auth.signOut();
  };

  const createDirectChat = (creds) => {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  };

  const renderChatForm = (creds) => {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  };

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={user.email}
        userSecret={user.uid}
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />

      <Button colorScheme="red" onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
};

export default ChatRoom;
