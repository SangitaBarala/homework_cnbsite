<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
>>>>>>> 96fdf13c9fa5191ca333e90b5ea1e2ac0625e878
