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
          updatedAt
          name
          url
          stars: stargazers {
            totalCount
          }
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;

export const GET_REPO_DATA = gql`
  query ($name: String = "") {
    user(login: "jorsary") {
      repository(name: $name) {
        name
        url
        description
        languages(first: 100) {
          totalSize
          edges {
            node {
              id
              name
              color
            }
            size
          }
        }
      }
    }
  }
`;
