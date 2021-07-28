import React, { useState } from "react";
import "./style.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allUsers, setAllUsers] = useState<Array<any>>([])

    const submitForm = (e: { preventDefault: () => void; }): void => {
        e.preventDefault()
        const newUser = { email: email, password: password }

        setAllUsers([...allUsers, newUser])
        console.log(allUsers)
    }
    return (

        <form action="" onSubmit={submitForm}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                <div>
                    Forgot <a href="#">password?</a>
                </div>
                <div>
                    New user? <a href={"/sign-up"}>Register</a>
                </div>
            </p>
        </form>

    );
}

export default Login;
