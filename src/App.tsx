
import React, { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Navbar from './Components/Navbar'
import Grid from './Grids/Grids';
import Navbar1 from "./Authentication/Navbar1"

function App() {
    
    return (
        <Router>
            <Navbar />
            <Grid/>
        </Router>
    );

}

export default App;