import React from "react";

interface ButtonProps {
  quantity: number;
  fetchNumberOfRepos: any;
}

const Button = ({ quantity, fetchNumberOfRepos }: ButtonProps) => {
  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => fetchNumberOfRepos(quantity)}
      >
        {quantity}
      </button>
    </>
  );
};

export default Button;
