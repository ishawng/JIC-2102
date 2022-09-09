import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const click = useState(false);
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        KLG {/* Add icon later 13:15 in tutorial */}
                    </Link>
                    {/* <div className="menu-icon">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div> at  19:00, horiz bars check if we want that */ }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/units' className="nav-links">
                            Units
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-links">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar