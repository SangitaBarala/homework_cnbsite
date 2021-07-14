<<<<<<< HEAD
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Componants/Login";
import Register from "./Componants/Register";

function App() {
    
    return (<Router>
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/sign-in"}>CNB Computers</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/sign-in" component={Login} />
                        <Route path="/sign-up" component={Register} />
                    </Switch>
                </div>
            </div>
        </div></Router>
    );
=======
import Navbar from './components/navbar'
import './App.css';


function App() {
  return (
      <div>
      <div className="App">
          <Navbar/>
      </div>

    {/*<div className="App">*/}
    {/*  <header className="App-header">*/}
    {/*    < Login />*/}
    {/*  </header>*/}
          </div>
         

  );
>>>>>>> 96fdf13c9fa5191ca333e90b5ea1e2ac0625e878
}

export default App;