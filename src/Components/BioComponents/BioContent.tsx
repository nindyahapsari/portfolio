import React from "react";
import { FaInfo } from "react-icons/fa";
import SocialMediaLinks from "./SocialMediaLinks";

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
        <SocialMediaLinks />
      </div>
      <div className="px-8 py-4 bg-gray-100 border-t border-gray-200">
        <span className="inline-flex items-center text-sm">
          <FaInfo />
          <b>{job}</b>
        </span>
      </div>
    </div>
  );
};

export default BioContent;
