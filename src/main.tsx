import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Client";
import { AlertProvider } from "./Context/alertContext.jsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ApolloProvider client={client}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </ApolloProvider>
  );
} else {
  console.error("Root element not found");
}
