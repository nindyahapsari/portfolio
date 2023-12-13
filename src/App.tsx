import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ListPage from "./Pages/ListPage";
import Todo from "./Pages/Todo";
import GithubRepos from "./Pages/GithubRepos";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path='/list' element={<ListPage />} /> */}
      {/* <Route path='/todo' element={<Todo />} /> */}
      <Route path="/githubrepos" element={<GithubRepos />} />
    </Routes>
  );
};

export default App;
