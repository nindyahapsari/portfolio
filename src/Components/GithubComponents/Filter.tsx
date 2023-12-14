import React from "react";
import Button from "./Button";

interface FilterProps {
  REPO_QUANTITY: { number: number }[];
  fetchNumberOfRepos: any;
}

const Filter = ({ REPO_QUANTITY, fetchNumberOfRepos }: FilterProps) => {
  return (
    <div className="p-4">
      <h3 className="text-lg">Show me:</h3>
      <div className="flex space-x-2">
        {REPO_QUANTITY.map((repoQuantity) => {
          return (
            <Button
              key={repoQuantity.number}
              quantity={repoQuantity.number}
              fetchNumberOfRepos={fetchNumberOfRepos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
