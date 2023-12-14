import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { GET_LUNARVIM_REPOS } from "../Query";

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

const GithubRepos = () => {
  const { loading, error, data, refetch } = useQuery(GET_LUNARVIM_REPOS, {
    variables: {
      owner: "LunarVim",
      name: "LunarVim",
      first: REPO_QUANTITY_DEFAULT,
    },
  });

  if (loading) {
    return <LoaderElement />;
  }

  const fetchNumberOfRepos = (quantity: number) => {
    refetch({ first: quantity });
  };

  const handleSearch = (owner: string, name: string) => {
    console.log(owner, name);

    // refetch({ owner, name });
  };

  const { repository } = data;

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
      <RepoHeader
        name={repository.name}
        description={repository.description}
        primaryLang={repository.primaryLanguage.name}
      />

      <RepoFilter
        REPO_QUANTITY={REPO_QUANTITY}
        fetchNumberOfRepos={fetchNumberOfRepos}
      />
      <div className="px-52">
        <table className="table-auto w-full mx-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.search.nodes.map((repo) => (
              <tr key={repo.id}>
                <td className="border px-4 py-2">{repo.name}</td>
                <td className="border px-4 py-2">{repo.description}</td>
                <td className="border px-4 py-2">
                  <a href={repo.url} className="text-blue-500">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GithubRepos;
