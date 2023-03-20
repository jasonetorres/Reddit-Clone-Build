import React, { useState } from 'react';
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import { AuthModalState } from "../../Modal/Auth/AuthModal";
import useRecoilState from 'recoil';


type LoginProps = {
  user: any;
};

const Login: React.FC<LoginProps> = ({ user }) => {
const [authModalState, setAuthModalState] = useRecoilState(AuthModalState);
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
        placeholder="email"
        type="text"
        mb={2}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        onChange={onChange}
      />
      <Button width="100%" height="36px" mt={2} mb={2} type="submit">Log In</Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New Here?</Text>
        <Text color="blue.500" fontWeight={700} cursor="pointer">
          Sign Up
        </Text>    
      </Flex>
    </form>
  );
};

export default Login;
