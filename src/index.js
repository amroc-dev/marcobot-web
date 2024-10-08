import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';

import "./analytics";

import 'framework7/framework7-bundle.css';

import './css/icons.css';

import App from '@components/App';

Framework7.use(Framework7React)

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
