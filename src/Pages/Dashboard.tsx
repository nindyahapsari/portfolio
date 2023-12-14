import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Card,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";

import ProjectCard from "../Components/ProjectCard";
import Bio from "../Components/Bio";

interface ProjectCardAttribute {
  id: string;
  header: string;
  description: string;
  icon: string;
  techstack: string | null | undefined;
  linkPage: string | null | undefined;
}

const projectCardAttributes: ProjectCardAttribute[] = [
  {
    id: uuidv4(),
    header: "Todo List",
    description: "A simple todo list that save input data using local storage",
    icon: "code",
    techstack: "React.js, localStorage, semantic ui",
    linkPage: "/todo",
  },
  {
    id: uuidv4(),
    header: "Github repos",
    description: "Small collection of github repository",
    icon: "code",
    techstack: "place techstack here",
    linkPage: "/githubrepos",
  },
];

const Dashboard = () => {
  return (
    <div className="flex justify-center mt-14">
      <div>
        <Bio />
        <div className="mt-20">
          <h2>My Projects</h2>
          <div className="flex justify-between">
            {projectCardAttributes.map((projectAttr) => {
              return (
                <div className="flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden max-w-md p-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <i className={`fas fa-${projectAttr.icon}`}></i>
                  </div>
                  <h2 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {projectAttr.header}
                  </h2>
                  <p className="mt-3 text-base text-gray-500">
                    {projectAttr.description}
                  </p>
                  <span className="mt-3 inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                    {projectAttr.techstack}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
