import React, { useState } from'react';
import { Input, Button } from "@chakra-ui/react";
import { AuthModalState } from "../../../atoms/authModalState";

type LoginProps = {
  user: any;
};

const Login: React.FC<LoginProps> = ({ user }) => {
  const setAuthModalState = setRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // Firebase logic
  const onSubmit = () => {};
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    setLoginForm(prev => ({
      ...prev,
      [event.target.name]:event.target.value,
    }));
  };
  
  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        placeholder="email"
        mb={2}
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="password"
        mb={2}
        onChange={onCHange}
      />
      <Button width="100% height ="36px" mt={2} mb={2} type="submit">Log In</Button>
    <Flex fontSize="9pt justifyContent="center">
    <Text mr={1}>New Here?</Text>
      <Text color="blue.500" fontWeight={700} cursor="pointer">
      Sign Up
      </Text>    
    </Flex>
    </form>
  );
};
export default Login;