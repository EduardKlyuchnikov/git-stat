import { SEARCH_USER } from "@/apollo/queries";
import useDebounce from "@/hooks/useDebounce";
import { IFoundedUser } from "@/types";
import { useQuery } from "@apollo/client";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  Center,
  IconButton,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue] = useDebounce(searchValue, 500);
  const { push } = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, loading } = useQuery<IFoundedUser>(SEARCH_USER, {
    variables: {
      queryString: debouncedValue,
    },
  });

  const navigate = (pathname: string) => {
    push({
      pathname: `/user/${pathname}`,
    });
    onClose();
  };

  return (
    <>
      <IconButton aria-label="search" onClick={onOpen}>
        <Search2Icon />
      </IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Input
              placeholder="Поиск пользователей"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </ModalHeader>

          <ModalBody
            minHeight="50px"
            display="flex"
            flexDirection="column"
            gap="10px"
          >
            {data &&
              data.search.edges.map(({ node }) => (
                <Card padding="10px" key={node.id}>
                  <Box gap="5px" alignItems="center" display="flex">
                    <Avatar src={node.avatarUrl} />

                    <Box>
                      <Box gap="5px" display="flex">
                        <Link
                          onClick={(e) => navigate(node.login)}
                          color="linkedin.300"
                        >
                          {node.login}
                        </Link>

                        <Text>{node.name}</Text>
                      </Box>
                      <Text>{node.location}</Text>
                    </Box>
                  </Box>
                </Card>
              ))}

            {loading && (
              <Center>
                <Spinner />
              </Center>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
