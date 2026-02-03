import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { laptops } from '../data/laptops';
import './LaptopGrid.css';

export default function LaptopGrid() {
    const navigate = useNavigate();

    return (
        <section className="laptop-grid-section">
            <div className="laptop-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="laptop-title"
                >
                    Performance. Uncompromised.
                </motion.h2>
                <p className="laptop-subtitle">The most powerful portable machines on the planet.</p>
            </div>

            <div className="laptop-grid-container">
                {laptops.map((laptop, index) => (
                    <motion.div
                        key={laptop.id}
                        className="laptop-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ '--accent': laptop.accent }}
                        onClick={() => navigate(`/laptops/${laptop.slug}`)}
                    >
                        <div className="laptop-image-box">
                            <img src={laptop.images[0]} alt={laptop.name} className="laptop-img" loading="lazy" />
                            <div className="laptop-badge">{laptop.brand}</div>
                        </div>

                        <div className="laptop-details">
                            <h3 className="laptop-name">{laptop.name}</h3>
                            <p className="laptop-specs">{laptop.specs}</p>

                            <div className="laptop-footer">
                                <span className="laptop-price">{laptop.price}</span>
                                <button
                                    className="laptop-buy-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/laptops/${laptop.slug}`);
                                    }}
                                >
                                    More
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
