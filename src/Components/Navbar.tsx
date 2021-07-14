import React, { useState } from "react";
import { BrowserRouter as Route, Switch} from "react-router-dom";
import { Link } from "react-router-dom"
import VendorDropdown from './Dropdown';
import Button from "./Button";
import './Navbar.css'
import Login from '../Authentication/Login'
import CnbItemsDropdown from './CnbItemsDropdown';
import Navbar1 from "../Authentication/Navbar1"

//import cnblogo from "./cnblogo.png"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

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
   
    
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    CNB-NET
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className="nav-links" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                        >
                        <Link to="/vendors" className="nav-links" onClick={closeMenu}>
                            Vendors <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <VendorDropdown />}
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/cnbServices" className="nav-links" onClick={closeMenu}>
                            CNB <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <CnbItemsDropdown/>}
                    </li>
                    <Navbar1/>
                </ul>
                <Button/>
            </nav>
        </div>
    )
}
export default Navbar