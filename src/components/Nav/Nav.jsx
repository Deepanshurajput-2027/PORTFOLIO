import React from 'react';
import DateTime from '../DateTime';
import './Nav.css';

const Nav = () => {
  return (
    <nav aria-label="Primary navigation bar">
        <div className="left">
            <div className="apple-icon" role="button" tabIndex={0} aria-label="Apple menu">
                <img className='nav-logo' src="/navbar-icons/apple.svg" alt="Apple logo" />
                </div>

                <div className="nav-item" role="menuitem" tabIndex={0} aria-label="Deepanshu Rajput menu">
                    <p>Deepanshu Rajput</p>
                </div>
                <div className="nav-item" role="menuitem" tabIndex={0} aria-label="File menu">
                    <p>File</p>
                </div>
                <div className="nav-item" role="menuitem" tabIndex={0} aria-label="Window menu">
                    <p>Window</p>
                </div>
                <div className="nav-item" role="menuitem" tabIndex={0} aria-label="Terminal menu">
                    <p>Terminal</p>
                </div>
            
        </div>
        <div className="right">
            <div className="nav-icon" role="button" tabIndex={0} aria-label="Wi-Fi status and settings">
                <img className='nav-logo' src="/navbar-icons/wifi.svg" alt="Wi-Fi signal icon" />
            </div>

            <div className="nav-item">
                    <DateTime />
                </div>

        </div>
    </nav>
  )
}

export default Nav;
