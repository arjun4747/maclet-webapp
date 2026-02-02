import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Maclet</h2>
                    <p>Designed for power users. <br />Crafted for perfection.</p>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h4>Shop</h4>
                        <a href="/#laptops">Laptops</a>
                        <a href="/accessories">Accessories</a>
                        <a href="#">New Arrivals</a>
                    </div>
                    <div className="link-column">
                        <h4>Support</h4>
                        <a href="#">Help Center</a>
                        <a href="#">Warranty</a>
                        <a href="#">Returns</a>
                    </div>
                    <div className="link-column">
                        <h4>Social</h4>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Maclet. All rights reserved.</p>
            </div>
        </footer>
    );
}
