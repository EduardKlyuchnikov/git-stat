import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Box height="90vh">
      <Center position="relative" top="50%">
        <Heading>404 | Страница не найдена</Heading>
      </Center>
    </Box>
  );
};

export default NotFound;
