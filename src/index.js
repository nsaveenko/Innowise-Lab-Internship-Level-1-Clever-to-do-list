import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(
  application,
  document.getElementById('root')
);

reportWebVitals();
