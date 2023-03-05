import { Button, ButtonGroup } from "@chakra-ui/button";
import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button colorScheme='blue'>Log In</Button>
      <Button colorScheme='blue'>Sign Up</Button>
    </>
  );
};
export default AuthButtons;