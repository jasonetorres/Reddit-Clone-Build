import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";


const Navbar: React.FC = () => {
  return (
    <Flex bg="tan" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="https://tinyurl.com/yzn2nk32" height="30px"/>
        <Image src="https://tinyurl.com/mr254nnh" height="46px"/>
      display={[{base: "none"}, { md: "unset"} ]}
      </Flex>
       <SearchInput />
    </Flex>
  );
};
export default Navbar;