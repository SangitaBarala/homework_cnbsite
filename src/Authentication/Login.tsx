import React, { Component } from "react";
<<<<<<< HEAD
=======
import "./style.css"
>>>>>>> 813f506d4d063f2b4d87cb6737392c612bb3b7e6

function Login() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
<<<<<<< HEAD
                    <input type="email" className="form-control" placeholder="Enter email" />
=======
                    <input type="email" className="form-control" placeholder="Enter email" required />
>>>>>>> 813f506d4d063f2b4d87cb6737392c612bb3b7e6
                </div>

                <div className="form-group">
                    <label>Password</label>
<<<<<<< HEAD
                    <input type="password" className="form-control" placeholder="Enter password" />
=======
                    <input type="password" className="form-control" placeholder="Enter password" required />
>>>>>>> 813f506d4d063f2b4d87cb6737392c612bb3b7e6
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }

export default Login;
