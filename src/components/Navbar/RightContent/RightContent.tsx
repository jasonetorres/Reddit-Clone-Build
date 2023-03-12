import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "../../Navbar/RightContent/AuthButtons";
import AuthModal from "../../Modal/Auth/AuthModal";


type RightContentProps = {
  // user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
    <Flex justify="center" align="center">
      <AuthButtons />
    </Flex>
  </>
  );
};
export default RightContent;