import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_REPO, SEARCH_REPOS } from "../Query";

import LoaderElement from "../Components/LoaderElement";
import RepoFilter from "../Components/GithubComponents/Filter";
import RepoHeader from "../Components/GithubComponents/RepoHeader";
import SearchGithubRepo from "../Components/GithubComponents/SearchGithubRepo";
import RepoTable from "../Components/GithubComponents/RepoTable";

interface RepoQuantity {
  number: number;
}

const REPO_QUANTITY_DEFAULT: number = 2;

const REPO_QUANTITY: RepoQuantity[] = [
  { number: 5 },
  { number: 20 },
  { number: 30 },
];

const REPO_OWNER: string = "gitdagray";
const REPO_DEFAULT: string = "";
let INIT_REPO_VALUE: string = "";

const GithubRepos = () => {
  // const {
  //   loading,
  //   data: searchReposData,
  //   refetch: refetchGetRepo,
  // } = useQuery(GET_REPO, {
  //   variables: {
  //     first: REPO_QUANTITY_DEFAULT,
  //   },
  // });

  const {
    loading,
    error,
    data,
    refetch: refetchSearchRepo,
  } = useQuery(SEARCH_REPOS, {
    variables: {
      first: REPO_QUANTITY_DEFAULT,
      name: INIT_REPO_VALUE,
    },
    skip: !INIT_REPO_VALUE,
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const fetchNumberOfRepos = (quantity: number) => {
    refetchSearchRepo({ first: quantity });
  }

  const handleRefetchSearchRepo = (name: string) => {
    INIT_REPO_VALUE = name;
    refetchSearchRepo({ name });
  }

  const nodes = data?.search.nodes;

  console.log("data:", data);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <Link to="/dashboard">
          <button className="float-right px-4 py-2 bg-blue-500 text-white rounded">
            Back to Dashboard
          </button>
        </Link>
      </div>
      <SearchGithubRepo
        fetchSearchRepo={(name: string) => handleRefetchSearchRepo(name)}
      />

      {/* <RepoHeader name={data.repository.name} /> */}

      <RepoFilter
        REPO_QUANTITY={REPO_QUANTITY}
        fetchNumberOfRepos={fetchNumberOfRepos}
      />

      {nodes !== undefined ? (
        <RepoTable nodes={nodes} />
      ) : (
        <h3>Start searching</h3>
      )}
    </div>
  );
};

export default GithubRepos;
