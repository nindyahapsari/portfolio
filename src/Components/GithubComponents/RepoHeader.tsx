import React from "react";

interface RepoHeaderProps {
  name: string;
  description: string;
  primaryLang: string;
}

const RepoHeader = ({ name, description, primaryLang }: RepoHeaderProps) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold border-b-2 mb-2">
      Repository collection of {name}
    </h1>

    <h3 className="text-lg mb-2">{description}</h3>
    <span className="text-lg font-bold">
      Primary Language
      <span className="text-lg font-normal">{primaryLang}</span>
    </span>
  </div>
);

export default RepoHeader;
