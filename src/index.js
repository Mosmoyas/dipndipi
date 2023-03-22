import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./i18n"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

