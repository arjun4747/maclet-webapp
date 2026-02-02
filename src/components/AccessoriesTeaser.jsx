import React from 'react';
import { Link } from 'react-router-dom';
import './AccessoriesTeaser.css';

export default function AccessoriesTeaser() {
    return (
        <section className="teaser-section">
            <div className="teaser-content">
                <span className="teaser-label">THE ECOSYSTEM</span>
                <h2 className="teaser-title">Complete your setup.</h2>
                <p className="teaser-subtitle">
                    Power your workflow with our curated collection of premium peripherals.
                </p>
                <Link to="/accessories" className="teaser-btn">
                    Explore Accessories →
                </Link>
            </div>
            <div className="teaser-visual">
                {/* Abstract visual representation of connectivity */}
                <div className="connection-line"></div>
                <div className="connection-dot"></div>
            </div>
        </section>
    );
}
