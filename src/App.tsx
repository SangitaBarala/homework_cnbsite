
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Navbar1 from "./Authentication/Navbar1";



function App() {
    
    return (<Router>
     
        <Navbar1 />    
     
    </Router>);

}

export default App;