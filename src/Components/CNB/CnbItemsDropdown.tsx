import React, { useState } from 'react';
import { CnbItems } from './CnbItems'
import '../Dropdown.css';
import { Link } from 'react-router-dom';

function CnbItemsDropdown() {
    const [click, setClick] = useState(false);

    const CnbItemhandleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={CnbItemhandleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {CnbItems.map((items, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={items.cName}
                                to={items.path}
                                onClick={() => setClick(false)}>
                                {items.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default CnbItemsDropdown