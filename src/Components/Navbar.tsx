import React, { useState } from "react";
import { Link } from "react-router-dom"
import VendorDropdown from './Dropdown';
import Button from "./Button";
import './Navbar.css'
import CnbItemsDropdown from './CnbItemsDropdown';


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [cnbdropdown, setCnbDropdown] = useState(false)

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
                    <li className='nav-item' onMouseEnter={onMouseEnterCnb} onMouseLeave={onMouseLeaveCnb}>
                        <Link to="/cnbServices" className="nav-links" onClick={closeMenu}>
                            CNB <i className="fas fa-caret-down" />
                        </Link>
                        {cnbdropdown && <CnbItemsDropdown />}
                    </li>
                </ul>
                <Button/>
            </nav>
        </div>
    )
}
export default Navbar