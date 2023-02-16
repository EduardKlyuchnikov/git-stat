import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query ($login: String = "EduardKlyuchnikov") {
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
  query ($login: String = "EduardKlyuchnikov", $nameRepo: String = "git-stat") {
    repository(name: $nameRepo, owner: $login) {
      name
      url
      description
      nameWithOwner
      readme: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
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
      edges {
        node {
          ... on Organization {
            id
            name
            avatarUrl
            login
            location
          }
          ... on User {
            id
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
