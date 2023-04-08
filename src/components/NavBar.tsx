import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string | null) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="20" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
