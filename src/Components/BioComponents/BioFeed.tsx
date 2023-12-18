import React from "react";
import { FaBriefcase } from "react-icons/fa";

const myEmploymentHistory = [
  {
    id: 1,
    year: "Mar 2022 - Dec 2023",
    companyName: "Ospin GmbH",
    description: "Web Developer",
  },
  {
    id: 1,
    year: "Aug 2020 - Feb 2022",
    companyName: "WhereGroup GmbH",
    description: "Frontend Developer",
  },
  {
    id: 1,
    year: "Jul 2019 - Aug 2020",
    companyName: "Sanofeld GmbH",
    description: "Frontend Developer",
  },
];

function BioFeed() {
  return (
    <>
      <div className="bg-white rounded-lg max-w-md mx-20">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-semibold">Employment History</h2>
        </div>

        {myEmploymentHistory.map(({ id, year, companyName, description }) => {
          return (
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <FaBriefcase className="h-10 w-8" />

                <div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="font-bold">{year}</div>
                      <div className="text-sm">{companyName}</div>
                    </div>
                  </div>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BioFeed;
