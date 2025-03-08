import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './responsive.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);