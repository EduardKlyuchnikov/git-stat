import client from "@/apollo/client";
import { GET_USER_DATA } from "@/apollo/queris";
import UserInfo from "@/components/UserInfo";
import { IUserInfo } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export default function App({
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
}> = async () => {
  const { data } = await client.query({
    query: GET_USER_DATA,
  });

  return {
    props: {
      userData: data.user,
    },
  };
};
