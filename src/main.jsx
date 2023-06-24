import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider } from "@apollo/client";
import { client } from './Client'

ReactDOM.createRoot(document.getElementById('root')).render(

  <ApolloProvider client={client}>
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
  </ApolloProvider>
)
