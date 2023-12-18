import React from "react";

interface RepoBodyTableProps {
  id: string;
  name: string;
  description: string;
  url: string;
}

const RepoBodyTable = ({ id, name, description, url }: RepoBodyTableProps) => {
  return (
    <tr key={id}>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">
        <a href={url} target="_blank">
          {url}
        </a>
      </td>
    </tr>
  );
};

export default RepoBodyTable;
