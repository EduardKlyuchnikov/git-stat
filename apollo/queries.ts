import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query ($login: String = "Jorsary") {
    user(login: $login) {
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
  query ($login: String = "Jorsary", $nameRepo: String = "landing") {
    repository(name: $nameRepo, owner: $login) {
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
`;

export const SEARCH_USER = gql`
  query searchUser($queryString: String!) {
    search(query: $queryString, type: USER, first: 10) {
      userCount
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
