import React from "react";
import RepoBodyTable from "./RepoBodyTable";

interface RepoTableProps {
  nodes: any[];
}

const RepoTable = ({ nodes }: RepoTableProps) => {
  return (
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
          {nodes.map(({ id, name, description, url }) => {
            return (
              <RepoBodyTable
                key={id}
                name={name}
                description={description}
                url={url}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RepoTable;
