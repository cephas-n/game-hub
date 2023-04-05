import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface SortOrder {
  label: string;
  value: string;
}

interface Props {
  selectedOrder: SortOrder | null;
  onSort: (order: SortOrder) => void;
}

const SortSelector = ({ selectedOrder, onSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        minWidth="200px"
        textAlign="left"
      >
        Order By: {selectedOrder?.label || "Relavence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => onSort(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
