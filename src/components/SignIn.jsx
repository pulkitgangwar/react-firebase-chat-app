import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import React from "react";
import firebase, { auth } from "../firebase";

const SignIn = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Center>
      <Button colorScheme="teal" onClick={handleSignIn}>
        Sign In With Google
      </Button>
    </Center>
  );
};

export default SignIn;
