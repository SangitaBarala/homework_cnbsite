
import React, { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CnbTitle from './CnbTop/CnbTitle'
import Navbar from './Components/Navbar'

function App() {
    
    return (
        <Router>
            <Navbar />
            <CnbTitle/>
        </Router>
    );

}

export default App;