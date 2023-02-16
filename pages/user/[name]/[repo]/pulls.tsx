import client from "@/apollo/client";
import { GET_REPO_DATA } from "@/apollo/queries";
import RepoLayout from "@/components/RepoLayout";
import TableRepo from "@/components/TableRepo";
import { IPageRepo, IPullIssues } from "@/types";
import { request } from "@octokit/request";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FC } from "react";

const Pulls: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  repoData,
  pullRequests,
}) => (
  <RepoLayout repoData={repoData}>
    <TableRepo tableData={pullRequests} />
  </RepoLayout>
);

export default Pulls;

export const getServerSideProps: GetServerSideProps<{
  repoData: IPageRepo;
  pullRequests: IPullIssues[];
}> = async (context) => {
  const { data } = await client.query({
    query: GET_REPO_DATA,
    variables: {
      nameRepo: context.query.repo,
      login: context.query.name,
    },
  });
  const pullRequests = await request(`/repos/{owner}/{repo}/pulls`, {
    owner: context.query.name,
    repo: context.query.repo,
    state: context.query.state ? context.query.state : "open",
    headers: {
      authorization: `bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`,
    },
  }).then((data) => data.data);

  return {
    props: {
      repoData: data.repository,
      pullRequests,
    },
  };
};
