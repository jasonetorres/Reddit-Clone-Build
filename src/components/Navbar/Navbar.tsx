import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput"
import RightContent from "./RightContent/RightContent";



const Navbar: React.FC = () => {
  return (
    <Flex bg="tan" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="https://bit.ly/3IJ4S7W" height="30px"/>
        <Image src="https://tinyurl.com/mr254nnh" height="46px"/>
      </Flex>
       <RightContent />
       <SearchInput />
       
    </Flex>
  );
};
export default Navbar;

//https://tinyurl.com/yzn2nk32
//https://tinyurl.com/mr254nnh