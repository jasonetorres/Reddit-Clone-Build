import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, InputGroup, InputLeftElement} from "@chakra-ui/layout";

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />
        <Input
          placeholder="Search"
          fontsize="10pt"
          _placeholder={{ color: "gray.500"}}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;