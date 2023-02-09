import client from "@/apollo/client";
import { GET_USER_DATA } from "@/apollo/queries";
import UserInfo from "@/components/UserInfo";
import { IUserInfo } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export default function User({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{userData.login}</title>
      </Head>

      <UserInfo {...userData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  userData: IUserInfo;
}> = async (context) => {
  const { data } = await client.query({
    query: GET_USER_DATA,
    variables: {
      login: context.query.name,
    },
  });

  return {
    props: {
      userData: data.user,
    },
  };
};
