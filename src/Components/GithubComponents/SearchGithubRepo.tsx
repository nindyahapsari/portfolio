import { on } from "events";
import React, { useState } from "react";

interface SearchGithubRepoProps {
  onSearch: (owner: string, name: string) => void;
}

const SearchGithubRepo = ({ onSearch }: SearchGithubRepoProps) => {
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");

  const handleSearch = () => {
    onSearch(owner, name);
  };

  return (
    <div className="my-10">
      <div className="flex items-center space-x-4">
        <label htmlFor="owner" className="text-gray-600">
          Owner:
        </label>
        <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />

        <label htmlFor="name" className="text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-2 py-1"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchGithubRepo;
