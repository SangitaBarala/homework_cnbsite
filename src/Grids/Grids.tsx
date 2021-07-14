import React from 'react'
import { Link } from "react-router-dom";
import "./Grids.css"

const Grid = () => {
    return (
        <div className="main-container">
            <h1 className="cnbTitle">CNB Intranet</h1>
            <h2 className="cnbSubTitle">CNB Computers intranet is a place where employees can get information about processes, make development requests, create problem tickets and manage accounts.</h2>
            <button className="btn btn-primary">Go to CNB Online</button>
            <div className="grid-container">
                <Link to="#" className="grid-item">
                    <h3>Shipping</h3>
                    <p>View, Update and Manage Shipping Information.</p>
                </Link>
                <div className="grid-item">
                    <h3>Sales</h3>
                    <p>View and Download Sales Data and Price Lists.</p>
                </div>
            <div className="grid-item">
                    <h3>Contacts</h3>
                    <p>View the CNB Contacts list for Extensions and Emails.</p>
            </div>
                <div className="grid-item">
                    <h3>Base SKU</h3>
                    <p>View and Manage Base SKU Inventory and linkage.</p>
                </div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
            </div>
       </div>
    )
}
export default Grid