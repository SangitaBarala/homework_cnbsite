import React, { useState} from "react";
import {Link} from "react-router-dom"
//import {Switch, Route} from 'react-router-dom'
import VendorDropdown from '../Vendors/VendorDropdownList';
import Btn from "../Btn";
import '../Btn.css'
import './Navbar.css'
import CnbItemsDropdown from '../CNB/CnbItemsDropdown';
import AllVendors from "../Vendors/AllVendor";
// import Login from "../Authentication/Login";
// import Register from "../Authentication/Register";

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [cnbDropdown, setCnbDropdown] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    const onMouseEnterCnb = () => {
        if (window.innerWidth < 960) {
            setCnbDropdown(false)
        } else {
            setCnbDropdown(true)
        }
    }
    const onMouseLeaveCnb = () => {
        if (window.innerWidth < 960) {
            setCnbDropdown(false)
        } else {
            setCnbDropdown(false)
        }
    }

    return (
        <div className='navbar navbar-fixed-top' >
            <nav className="navbar">
                <a href="#home" className="navbar-logo">
                    CNB-NET
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="#home" className="nav-links" onClick={closeMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/vendors" className="nav-links" onClick={closeMenu}>
                            Vendors <i className="fas fa-caret-down"/>
                        </Link>
                        {dropdown && <VendorDropdown/>}
                    </li>
                    <li className='nav-item'  onMouseEnter={onMouseEnterCnb} onMouseLeave={onMouseLeaveCnb}>
                        <Link to="/cnbServices" className="nav-links" onClick={closeMenu}>
                            CNB <i className="fas fa-caret-down"/>
                        </Link>
                        {cnbDropdown && <CnbItemsDropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link className="btn" target="_blank" to={"/sign-in"}>Login</Link>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <Link className="btn" target="_blank" to={"/sign-up"}>Sign up</Link>*/}
                    {/*</li>*/}
                </ul>
                <Btn/>
            </nav>
            {/*<div className="auth-wrapper">*/}
            {/*<div className="auth-inner">*/}
            {/*    <Switch>*/}
            {/*        <Route path="/sign-in" component={Login} />*/}
            {/*        <Route path="/sign-up" component={Register} />*/}
            {/*    </Switch>*/}
            {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}
export default Navbar