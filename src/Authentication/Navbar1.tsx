import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Route, Switch, Link } from "react-router-dom";
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'

const Navbar1 = () => {
    return (
        <div className="App">
            
        </div>
        )
}
export default Navbar1
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "./style.css"


function Navbar() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
        </div>
        );
}

export default Navbar;
>>>>>>> 813f506d4d063f2b4d87cb6737392c612bb3b7e6
