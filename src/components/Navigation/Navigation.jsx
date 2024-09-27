import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ toggleTheme, isDarkMode }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
        localStorage.setItem('activeLink', link);
    };

    useEffect(() => {
        const storedLink = localStorage.getItem('activeLink');
        if (storedLink) {
            setActiveLink(storedLink);
        }
        
        const navbar = document.querySelector(".navbar");
        if (isMenuOpen) {
            navbar.classList.add("open");
        } else {
            navbar.classList.remove("open");
        }
    }, [isMenuOpen]);

    return (
        <header>
            <a href="#" className="logo">AnalyzSys</a>

            <div className="nav-container">
                <ul className="navbar">
                    <li className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`}>
                        <a href="#profile" onClick={() => handleLinkClick('home')}>Home</a>
                    </li>
                    <li className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`}>
                        <a href="#about" onClick={() => handleLinkClick('about')}>About</a>
                    </li>
                    <div className={`underline ${activeLink ? 'visible' : ''}`}></div>
                </ul>

                <div className="nav-button">
                    <i
                        className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"} change-theme`}
                        id="theme-button"
                        onClick={toggleTheme}
                    ></i>
                    <i
                        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
                        id="menu-icon"
                        onClick={handleMenuClick}
                    ></i>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
