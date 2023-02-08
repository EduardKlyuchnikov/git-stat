import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";

const UserInfo = ({ user }: any) => {
  console.log(user);
  return (
    <Box
      width='max-content'
      margin='0 auto'
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Avatar size='2xl' name={user.name && user.login} src={user.avatarUrl} />
      <Text fontWeight='bold'>{user.login}</Text>
      <Flex display='flex' flexDirection='column'>
        {user.repositories.nodes.map((item: any) => (
          <Link key={item.name} href={item.url}>{item.name}</Link>
        ))}
      </Flex>
    </Box>
  );
};

export default UserInfo;
