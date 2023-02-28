import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="tan" height="44px" padding="6px 12px">
      <Flex>
        <Image src="/images/redditlogo.png" height="30px"/>
        <Image src="/images/redditText.svg" height="46px"/>
      </Flex>
    </Flex>
  );
};
export default Navbar;