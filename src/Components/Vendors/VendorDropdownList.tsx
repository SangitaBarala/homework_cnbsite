import React, { useState } from 'react';
import MenuItems from './MenuItems';
//import {Switch, Route} from 'react-router-dom'
import '../Dropdown.css';
import { Link } from 'react-router-dom';

// @ts-ignore
function VendorDropdown({data, cardIndex}) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    // @ts-ignore
    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {data[cardIndex].map((item: any, index: any) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default VendorDropdown;