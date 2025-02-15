import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';   // Import Component หลัก
import './index.css';      // โหลด CSS หลัก

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
