
import React, { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Navbar1 from "./Authentication/Navbar1";



function App() {
    
    return (<Router>
     
        <Navbar1 />    
     
    </Router>);
>>>>>>> 813f506d4d063f2b4d87cb6737392c612bb3b7e6

}

export default App;