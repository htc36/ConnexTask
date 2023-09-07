import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import axios from 'axios';
import './css/index.css';

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT;
axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_APIKEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
