import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { accessories } from '../data/accessories';
import './Accessories.css';

export default function Accessories() {
    const navigate = useNavigate();

    return (
        <section id="accessories" className="accessories-section">
            <div className="accessories-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="acc-title"
                >
                    The Ecosystem.
                </motion.h2>
                <p className="acc-subtitle">Complete your setup with essentials.</p>
            </div>

            <div className="acc-grid">
                {accessories.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="acc-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => navigate(`/accessories/${item.slug}`)}
                    >
                        <div className="acc-image-wrapper">
                            <img src={item.images[0]} alt={item.name} className="acc-img" loading="lazy" />
                            <div className="acc-overlay">
                                <button
                                    className="add-btn"
                                    title="View Details"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/accessories/${item.slug}`);
                                    }}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                        <div className="acc-info">
                            <h3 className="acc-name">{item.name}</h3>
                            <p className="acc-specs" style={{ color: '#888', fontSize: '0.9rem', marginTop: '0.25rem' }}>{item.specs}</p>
                        </div>
                        <div className="acc-bottom">
                            <span className="acc-price">{item.price}</span>
                            <button
                                className="shop-link"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/accessories/${item.slug}`);
                                }}
                            >
                                More
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
