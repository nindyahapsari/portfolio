import { gql } from "@apollo/client";

export const GET_REPO = gql`
  query getRepos($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      description
      primaryLanguage {
        name
      }
    }
  }
`;

export const SEARCH_REPOS = gql`
  query searchRepos($name: String!, $first: Int!) {
    search(query: $name, type: REPOSITORY, first: $first) {
      nodes {
        ... on Repository {
          id
          name
          description
          url
        }
      }
    }
  }
`;
