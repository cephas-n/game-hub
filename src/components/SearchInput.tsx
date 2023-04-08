import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string | null) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        name="search"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        borderRadius={100}
        variant="filled"
        placeholder="Search games"
      />
    </InputGroup>
  );
};

export default SearchInput;
