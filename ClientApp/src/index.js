import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './index.js';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <body id = "page-top">
    <App />
  </body>
 
);
