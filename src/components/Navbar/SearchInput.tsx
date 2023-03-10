import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

type SearchInputProps = {
  // user: User;
};

export const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
<Flex flexGrow={1} mr={2} align="center">
    <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
          children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
          placeholder="Enter a model name"
          fontSize="10pt"
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