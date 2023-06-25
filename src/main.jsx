import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider } from "@apollo/client";
import { client } from './Client'
import { AlertProvider } from './Context/alertContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <ApolloProvider client={client}>
        <AlertProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
      </AlertProvider>
  </ApolloProvider>
)
