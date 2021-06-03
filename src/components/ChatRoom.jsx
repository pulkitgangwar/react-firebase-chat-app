import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { auth } from "../firebase";

const ChatRoom = () => {
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <Box>
      <Center>
        <Box>This is the Chat Room</Box>
        <Button colorScheme="red" onClick={handleLogOut}>
          Log Out
        </Button>
      </Center>
    </Box>
  );
};

export default ChatRoom;
