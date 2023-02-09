import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query {
    user(login: "gaearon") {
      avatarUrl
      name
      login
      repositories(first: 100) {
        totalCount
        nodes {
          updatedAt
          name
          nameWithOwner
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
    user(login: "gaearon") {
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

export const SEARCH_USER = gql`
  query searchUser($queryString: String!) {
    search(query: $queryString, type: USER, first: 10) {
      edges {
        node {
          ... on User {
            name
            avatarUrl
            login
            location
          }
        }
      }
    }
  }
`;
