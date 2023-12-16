import React from "react";

interface RepoHeaderProps {
  name: string;
}

const RepoHeader = ({ name }: RepoHeaderProps) => (
  <div className="p-4">
    <h1 className="text-2xl font-bold border-b-2 mb-2">Repository of {name}</h1>
  </div>
);

export default RepoHeader;
