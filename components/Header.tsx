import { SEARCH_USER } from "@/apollo/queris";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@apollo/client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./Search";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState("jorasry");

  const [debouncedValue] = useDebounce(searchValue, 500);

  const { data, loading } = useQuery(SEARCH_USER, {
    variables: {
      queryString: debouncedValue,
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      h="14"
      bgColor={"white"}
      boxShadow={"sm"}
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      _dark={{
        bgColor: "gray.900",
        boxShadow: "dark-sm",
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 20px"
    >
      <Heading>
        <Link href="/">GitStat</Link>
      </Heading>

      <Box>
        <Search />
      </Box>

      <IconButton aria-label="theme-toggle" onClick={toggleColorMode}>
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Box>
  );
};

export default Header;
