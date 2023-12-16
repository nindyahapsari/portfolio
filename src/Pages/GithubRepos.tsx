import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_REPO, SEARCH_REPOS } from "../Query";

import LoaderElement from "../Components/LoaderElement";
import RepoFilter from "../Components/GithubComponents/Filter";
import RepoHeader from "../Components/GithubComponents/RepoHeader";
import SearchGithubRepo from "../Components/GithubComponents/SearchGithubRepo";

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

const GithubRepos = () => {
  const {
    loading,
    data: getRepoData,
    refetch: refetchGetRepo,
  } = useQuery(GET_REPO, {
    variables: {
      first: REPO_QUANTITY_DEFAULT,
    },
  });

  const { data: searchReposData, refetch: refetchSearchRepo } = useQuery(
    SEARCH_REPOS,
    {
      variables: {
        first: REPO_QUANTITY_DEFAULT,
      },
    }
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // const fetchNumberOfRepos = (quantity: number) => {
  //   refetch({ first: quantity });
  // };

  const handleSearch = (owner: string, name: string) => {
    console.log(owner, name);

    refetchGetRepo({ owner, name, first: 5 });
  };

  console.log(getRepoData);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <Link to="/dashboard">
          <button className="float-right px-4 py-2 bg-blue-500 text-white rounded">
            Back to Dashboard
          </button>
        </Link>
      </div>
      <SearchGithubRepo onSearch={handleSearch} />
      {/* <RepoHeader name={data.repository.name} /> */}

      {/* <RepoFilter
        REPO_QUANTITY={REPO_QUANTITY}
        fetchNumberOfRepos={fetchNumberOfRepos}
      /> */}
      <div className="px-52">
        <table className="table-auto w-full mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {getRepoData && (
              <tr key={getRepoData.repository.id}>
                <td className="border px-4 py-2">
                  {getRepoData.repository.name}
                </td>
                <td className="border px-4 py-2">
                  {getRepoData.repository.description}
                </td>
                <td className="border px-4 py-2">
                  {getRepoData.repository.primaryLanguage.name}
                </td>
                <td className="border px-4 py-2">
                  <a
                    href={getRepoData.repository.url}
                    className="text-blue-500"
                  >
                    View
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GithubRepos;
