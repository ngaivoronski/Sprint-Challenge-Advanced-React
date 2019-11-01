import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
    <nav className="navbar">
        <div className="head-div">
        <h1>Womens World Cup</h1>
        <h2>Most popular players via Google Trends June-July 2019</h2>
        </div>
        
        <div className="dark-mode__toggle">
        <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
        />
        </div>
    </nav>
);
};

export default Navbar;