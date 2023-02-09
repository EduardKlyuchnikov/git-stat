import { IRepositoryNode } from "@/types";
import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Kbd,
  Link,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import { useRouter } from "next/router";

const CardRepo = ({
  name,
  stars,
  primaryLanguage,
  updatedAt,
  nameWithOwner,
}: IRepositoryNode) => {
  const { push } = useRouter();

  const navigate = (path: string) => {
    push({
      pathname: `/repo/${path}`,
    });
  };

  return (
    <Card width="100%">
      <CardHeader gap="5px" display="flex" alignItems="center">
        <Text as={Link} onClick={() => navigate(name)} fontSize="2xl" width="max-content">
          {nameWithOwner}
        </Text>

        <Box display="flex" alignItems="center">
          <StarIcon />

          <Text>{stars.totalCount ? stars.totalCount : ""}</Text>
        </Box>
      </CardHeader>

      <CardBody
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>
          {moment.utc(updatedAt).local().startOf("seconds").fromNow()}
        </Text>

        {!!primaryLanguage && (
          <>
            <Kbd color={primaryLanguage.color}>{primaryLanguage.name}</Kbd>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default CardRepo;
