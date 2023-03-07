import React from "react";
import { Flex } from "@chakra-ui/react";
import AuthButtons from "./AuthButtons";
import AuthModal from "./AuthModal";


type RightContentProps = {
  // user: any;
};

const RightContent: React.FC<RightContentProps> = () => {
  return <>
    <Flex justify="center" align="center">
      <AuthButtons />
    </Flex>
  </>
};
export default RightContent;