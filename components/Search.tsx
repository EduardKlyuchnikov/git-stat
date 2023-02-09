import { SEARCH_USER } from "@/apollo/queris";
import useDebounce from "@/hooks/useDebounce";
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
import { useEffect, useState } from "react";

const Search = () => {
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
    <>
      <IconButton aria-label="search" onClick={onOpen}>
        <Search2Icon />
      </IconButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              placeholder="Поиск"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </ModalHeader>
          <ModalBody minHeight='50px' display="flex" flexDirection="column" gap="10px">
            {data &&
              data.search.edges.map((searchItem: any) => (
                <Card padding="10px" key={searchItem.node.name}>
                  <Box gap="5px" alignItems="center" display="flex">
                    <Avatar src={searchItem.node.avatarUrl} />
                    <Box>
                      <Box gap="5px" display="flex">
                        <Link color="Highlight">{searchItem.node.login}</Link>
                        <Text>{searchItem.node.name}</Text>
                      </Box>
                      <Text>{searchItem.node.location}</Text>
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
