import React from "react";
import './Button.css'
import {Link } from "react-router-dom";

const Button = () => {
    return(
        <Link to="./signIn">
            <button className="btn">SIGN IN</button>          
        </Link>
    )
}
export default Button