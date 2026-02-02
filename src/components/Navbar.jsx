import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <img src="/images/maclet-logo.png" alt="Maclet Logo" className="navbar-logo" />
            <nav className="navbar-pill">
                <ul className="navbar-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#laptops">Laptops</a></li>
                    <li><a href="#accessories">Accessories</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}
