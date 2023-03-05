import React from 'react';
import Navbar from "../Navbar/Navbar";
import { Flex } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
return (
    <>
    <Navbar />
      <main>{children}</main>
    </>);
  };
export default Layout;