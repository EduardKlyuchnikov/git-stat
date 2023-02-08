import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box, Heading,
  IconButton, useColorMode
} from "@chakra-ui/react";
import Link from "next/link";
  
const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      as='header'
      h='14'
      bgColor={"white"}
      boxShadow={"sm"}
      top='0'
      left='0'
      right='0'
      zIndex='sticky'
      _dark={{
        bgColor: "gray.900",
        boxShadow: "dark-sm",
      }}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      padding='0 20px'
    >
      <Heading><Link href='/'>GitStat</Link></Heading>

      <IconButton aria-label='theme-toggle' onClick={toggleColorMode}>
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Box>
  );
};

export default Header;
