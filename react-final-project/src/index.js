import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Components/App';
// import App from './Components2/App';
import App from './componentsagain/app';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
