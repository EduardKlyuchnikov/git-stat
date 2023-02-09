import { IUserInfo } from "@/types";
import { Avatar, Box, Container, Text, useMediaQuery } from "@chakra-ui/react";
import CardRepo from "./CardRepo";

const UserInfo = ({ name, repositories, login, avatarUrl }: IUserInfo) => {
  const isMedia = useMediaQuery("(max-width: 950px)");

  return (
    <Container
      gap="1%"
      padding="20px 0"
      maxWidth={isMedia[0] ? "100vw" : "70vw"}
      display={isMedia[0] ? "block" : "flex"}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar size="2xl" name={name && login} src={avatarUrl} />
        <Text fontWeight="bold">{login}</Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="5"
        width="100%"
      >
        {repositories.nodes.map((item) => (
          <CardRepo key={item.name} {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default UserInfo;
