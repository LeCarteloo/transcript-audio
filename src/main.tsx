import { scan } from 'react-scan'; // import this BEFORE react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../dist/output.css';

if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
    alwaysShowLabels: true,
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
