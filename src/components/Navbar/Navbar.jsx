// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_PATH, UNITS_LIST_PATH, ABOUT_PATH } from '../../constants';
import KLGLogo from './klglogo.png'
import './Navbar.css';

function Navbar() {
    // const click = useState(false);
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    return (
        <nav className="navbar">

            <div className="logo">
                <Link to={HOME_PATH} className="navbar-logo">
                    <img src={KLGLogo} alt="KLG" width="50" height="50"/>
                </Link>
            </div>
            
            <div className="other-links">
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <Link to={UNITS_LIST_PATH} className="nav-links">
                            Units
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ABOUT_PATH} className="nav-links">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar