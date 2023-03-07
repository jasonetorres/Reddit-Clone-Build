import React from "react";
import { Flex } from "@chakra-ui/react";
import { useRecoiilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";

type AuthInputsProps = {

};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoiilValue(authModalState);

  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && "Login" />}
      {modalState.view === "signup" && "Sign Up" />}
    </Flex>
  };
};
export default AuthInputs;
  