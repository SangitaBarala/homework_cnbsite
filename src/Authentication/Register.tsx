import React, { Component, useState } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import "./style.css"


const Register = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [records, setRecords] = useState<Array<any>>([])

    const handleInput = (e: any) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })

    }

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        const newRecord = { ...user, id: new Date().getTime().toString() }
        setRecords([...records, newRecord])
        console.log(newRecord)
        setUser({ firstName: "", lastName: "", email: "", password: "" })
        console.log(records)
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" value={user.firstName} onChange={handleInput} name="firstName" id="firstName" required />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" value={user.lastName} onChange={handleInput} name="lastName" required />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={user.email} onChange={handleInput} name="email" required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={user.password} onChange={handleInput} name="password" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <Link to={"/sign-in"}>Login</Link>
            </p>
        </form>
    );
}

export default Register;