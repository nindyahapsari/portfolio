import { gql } from "@apollo/client";

export const GET_LUNARVIM_REPOS = gql`
  query getRepos($owner: String!, $name: String!, $first: Int!) {
    repository(owner: $owner, name: $name) {
      name
      description
      primaryLanguage {
        name
      }
    }
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
