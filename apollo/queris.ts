import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query {
    user(login: "jorsary") {
      avatarUrl
      name
    	login
			repositories(first: 100) {
      totalCount
      nodes {
        name
        url
        owner {
          login
        }
      }
    }
    }
  }
`;
