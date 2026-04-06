import React from 'react'
import DateTime from '../DateTime'
import './Nav.css'

const Nav = () => {
  return (
    <nav role="navigation" aria-label="Main navigation bar">
        <div className="left" role="menubar">
            <div className="apple-icon" role="button" tabIndex={0} aria-label="Apple menu">
                <img className='nav-logo' src="/navbar-icons/apple.svg" alt="Apple logo" />
                </div>

                <div className="nav-item" role="menuitem" tabIndex={0} aria-label="Deepanshu Rajput menu item">
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
        <div className="right" role="menubar" aria-label="System status items">
            <div className="nav-icon" role="button" tabIndex={0} aria-label="Wi-Fi status and options">
                <img className='nav-logo' src="/navbar-icons/wifi.svg" alt="Wi-Fi status icon" />
            </div>

            <div className="nav-item" role="button" tabIndex={0} aria-label="Date and time, click to open calendar">
                    <DateTime />
                </div>

        </div>
    </nav>
  )
}

export default Nav