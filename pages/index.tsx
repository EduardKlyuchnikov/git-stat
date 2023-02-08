import client from "@/apollo/client";
import { GET_USER_DATA } from "@/apollo/queris";
import UserInfo from "@/components/UserInfo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function App({
  userData
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
      <UserInfo user={userData} />
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
