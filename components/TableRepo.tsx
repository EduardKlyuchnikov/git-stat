import { IPullIssues } from "@/types";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";

interface ITableRepoProps {
  tableData: IPullIssues[];
}

const TableRepo = ({ tableData }: ITableRepoProps) => {
  const router = useRouter();
  const navigate = (param: string) => {
    router.query.state = param;
    router.replace(router);
  };

  return (
    <Card
      padding="5px"
      border={"1px solid gray"}
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      gap="1px"
    >
      <ButtonGroup>
        <Button
          isDisabled={
            router.query.state === "open" || router.query.state === undefined
          }
          onClick={() => navigate("open")}
        >
          Opened
        </Button>

        <Button
          isDisabled={router.query.state === "closed"}
          onClick={() => navigate("closed")}
        >
          Closed
        </Button>
      </ButtonGroup>
      {tableData.map((item: any) => (
        <Skeleton key={item.title} isLoaded={true}>
          <Box display="flex" flexDirection="column" padding="5px">
            <Link target="_blank" href={item.html_url}>
              {item.title}
            </Link>
            <Text fontSize="xs" as="samp">
              #{item.number}
              {" opened "}
              {moment
                .utc(item.created_at)
                .local()
                .startOf("seconds")
                .fromNow()}{" "}
              by{" "}
              <Link href={`/user/${item.user.login}`}>{item.user.login}</Link>
            </Text>
            <Divider />
          </Box>
        </Skeleton>
      ))}
    </Card>
  );
};

export default TableRepo;
