import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import useData from "../hooks/useData";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />} minWidth={20}>
        Platform
      </MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
