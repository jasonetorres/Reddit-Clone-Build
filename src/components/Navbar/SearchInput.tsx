import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

type SearchInputProps = {
  // user: User;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (1
    <Flex flexGrow={1} mr={2} align="center">
      maxWidth={user ? "auto" : "600px"}
      mr={2}
      alignItems="center"
      >
    <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
          children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
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