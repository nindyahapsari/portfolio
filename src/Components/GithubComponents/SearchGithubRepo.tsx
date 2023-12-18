import { on } from "events";
import React, { useState } from "react";

interface SearchGithubRepoProps {
  fetchSearchRepo: (name: string) => void;
}

const SearchGithubRepo = ({ fetchSearchRepo }: SearchGithubRepoProps) => {
  const [name, setName] = useState("");

  return (
    <div className="my-10">
      <div className="flex items-center space-x-4">
        <label htmlFor="name" className="text-gray-600">
          Name of repository :
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />

        <button
          onClick={() => fetchSearchRepo(name)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchGithubRepo;
