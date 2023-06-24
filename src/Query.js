import { gql } from '@apollo/client';

export const GET_LUNARVIM_REPOS = gql`
  query getLunarVim ($first: Int!) {
    repository(owner:"LunarVim", name:"LunarVim") {
      name
      description
      primaryLanguage {
        name
      }
    }
    search(query: "LunarVim", type: REPOSITORY, first: $first) {
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
`


