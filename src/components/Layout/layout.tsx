import React, { ReactNode }from 'react';
import Navbar from "../Navbar/Navbar";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC = ({ children }) => {
return (
    <>
    <Navbar />
      <main>{children}</main>
    </>);
  };
export default Layout;