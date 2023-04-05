import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import useData from "../hooks/useData";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  selectedPlatform: Platform | null;
  onSelect: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelect }: Props) => {
  const { data: platforms, error, isLoading } = usePlatform();

  const renderActivePlatform = () => {
    return selectedPlatform && selectedPlatform.id !== -1
      ? selectedPlatform.name
      : "Platform";
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        minWidth="200px"
        textAlign="left"
      >
        {renderActivePlatform()}
      </MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {[{ name: "All", id: -1, slug: "" }, ...platforms].map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelect(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
