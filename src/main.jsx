import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
