import client from "@/apollo/client";
import { GET_REPO_DATA } from "@/apollo/queries";
import RepoLayout from "@/components/RepoLayout";
import { IPageRepo } from "@/types";
import { Box, Card } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";

const Readme: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  repoData,
}) => (
  <RepoLayout repoData={repoData}>
    <Card
      padding="1%"
      border={"1px solid gray"}
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      gap="1px"
      overflow="hidden"
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {repoData.readme
          ? repoData.readme.text
          : "У данного репозитория описания"}
      </ReactMarkdown>
    </Card>
  </RepoLayout>
);

export default Readme;

export const getServerSideProps: GetServerSideProps<{
  repoData: IPageRepo;
}> = async (context) => {
  const { data } = await client.query({
    query: GET_REPO_DATA,
    variables: {
      nameRepo: context.query.repo,
      login: context.query.name,
    },
  });
  return {
    props: {
      repoData: data.repository,
    },
  };
};
