import React from "react";

interface BioContentProps {
  name: string;
  titel: string;
  descriptions: string;
  job: string;
}

const BioContent = ({ name, titel, descriptions, job }: BioContentProps) => {
  return (
    <div className="border-solid border-2">
      <div className="p-8">
        <h2 className="font-semibold text-xl mb-2">{name}</h2>
        <p className="text-gray-500">{titel}</p>
        <p className="mt-4 text-gray-700">{descriptions}</p>
      </div>
      <div className="px-8 py-4 bg-gray-100 border-t border-gray-200">
        <span className="inline-flex items-center text-sm">
          <svg
            className="h-5 w-5 mr-2 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 20a10 10 0 100-20 10 10 0 000 20zm0-18a8 8 0 100 16 4 4 0 01 0-8 4 4 0 010 8zm0 2a2 2 0 100 4 2 2 0 000-4zm0 6a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
          {job}
        </span>
      </div>
    </div>
  );
};

export default BioContent;
