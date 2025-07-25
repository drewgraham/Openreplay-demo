import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OpenReplay from '@openreplay/tracker';

const tracker = new OpenReplay({
  projectKey: 'YOUR_PROJECT_KEY', // Replace with your OpenReplay project key
  ingestPoint: 'http://localhost:3569/ingest',
});
tracker.start();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

