import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
