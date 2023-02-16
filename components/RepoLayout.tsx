import { IPageRepo } from "@/types";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

interface IRepoLayoutProps {
  repoData: IPageRepo;
  children: JSX.Element;
}

const RepoLayout = ({ children, repoData }: IRepoLayoutProps) => {
  const router = useRouter();

  const currentPage = router.pathname.split("/").reverse()[0];
  const navigate = (param: string) => {
    router.replace({
      pathname: `/user/${repoData.nameWithOwner}${param}`,
    });
  };
  return (
    <Box
      margin="0 auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Head>
        <title>{repoData.name}</title>
      </Head>

      <Text fontSize="4xl">{repoData.name}</Text>

      <Text fontSize="2xl">{repoData.description}</Text>

      <Link target="_blank" href={repoData.url}>
        Ссылка на GitHub репозиторий <ExternalLinkIcon />
      </Link>

      <Box maxWidth="1000px" width="100%">
        <ButtonGroup isAttached margin="10px 0">
          <Button
            isDisabled={currentPage === "[repo]"}
            onClick={() => {
              navigate("/");
            }}
          >
            Info
          </Button>

          <Button
            isDisabled={currentPage === "issues"}
            onClick={() => {
              navigate("/issues");
            }}
          >
            Issues
          </Button>

          <Button
            isDisabled={currentPage === "pulls"}
            onClick={() => {
              navigate("/pulls");
            }}
          >
            Pull Requests
          </Button>
        </ButtonGroup>

        {children}
      </Box>
    </Box>
  );
};

export default RepoLayout;
