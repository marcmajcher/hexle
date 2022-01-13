import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/hexle/" element={<App />} />
        <Route path="/hexle/:id" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
