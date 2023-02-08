import { gql } from "@apollo/client";

export const POKEMONS_WITH_TYPES = gql`
  query MyQuery($login: String = "jorsary") {
    user(login: $login) {
      id
      avatarUrl
      name
    }
  }
`;
