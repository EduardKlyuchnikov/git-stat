import client from "@/apollo/client";
import { GET_USER_DATA } from "@/apollo/queris";
import Header from "@/components/Header";
import UserInfo from "@/components/UserInfo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { config } from "process";

export default function App({
  userData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header />
      <UserInfo user={userData} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  userData: any
}> = async () => {
  const { data } = await client.query({
    query: GET_USER_DATA,
    context: {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    },
  });

  return {
    props: {
      userData: data.user
    },
  };
};
