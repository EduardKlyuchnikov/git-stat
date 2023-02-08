import { Avatar, Box, Container, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import CardRepo from "./CardRepo";

const UserInfo = ({ user }: any) => {
  const isMedia = useMediaQuery('(max-width: 500px)')
  
  return (
    <Container gap='1%' padding='0' maxWidth='70vw' display={isMedia[0] ? 'block' : 'flex'} >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Avatar
          size='2xl'
          name={user.name && user.login}
          src={user.avatarUrl}
        />
        <Text fontWeight='bold'>{user.login}</Text>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        gap='5'
        width='100%'
      >
        {user.repositories.nodes.map((item: any) => (
          <CardRepo key={item.name} {...item} />
        ))}
      </Box>
    </Container>
  );
};

export default UserInfo;
