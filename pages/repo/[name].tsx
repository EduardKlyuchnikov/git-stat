import client from "@/apollo/client";
import { GET_REPO_DATA } from "@/apollo/queris";
import { IPageRepo } from "@/types";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { FC } from "react";

const Repo: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  repoData,
}) => {
  return (
    <Box
      width="max-content"
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

      <Link isExternal href={repoData.url}>
        Ссылка на GitHub репозиторий <ExternalLinkIcon />
      </Link>
    </Box>
  );
};

export default Repo;

export const getServerSideProps: GetServerSideProps<{
  repoData: IPageRepo;
}> = async (context) => {
  const { data } = await client.query({
    query: GET_REPO_DATA,
    variables: {
      name: context.query.name,
    },
    context: {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    },
  });

  return {
    props: {
      repoData: data.user.repository,
    },
  };
};
