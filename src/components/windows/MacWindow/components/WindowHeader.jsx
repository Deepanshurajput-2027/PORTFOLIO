import React from 'react';

const WindowHeader = ({
    elem,
    handleClose,
    handleMinimize,
    toggleMaximize
}) => {
    return (
        <div className="nav">
            <div className="dots">
                <div onClick={handleClose} className="nav-dot red"></div>
                <div onClick={handleMinimize} className="nav-dot yellow"></div>
                <div onClick={toggleMaximize} className="nav-dot green"></div>
            </div>

            <div className="title">
                <p>deepanshurajput - zsh - {elem}</p>
            </div>
        </div>
    );
};

export default WindowHeader;
