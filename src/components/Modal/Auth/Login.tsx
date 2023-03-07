import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

type LoginProps = {  
  // user: any;
};

const Login:React.FC<LoginProps> = ({ user }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });  
  return (
    <form>
      <Input 
        name="email" 
        type="email"
        placeholder="email" 
        mb={2} 
        onChange={() =>{}}
        />
      <Input 
        name="password" 
        type="password" 
        placeholder="password" 
        mb={2} 
        onChange={() => {}}
        />
      <Button type="submit">Log In</Button>
    </form>
  );
};
export default Login;