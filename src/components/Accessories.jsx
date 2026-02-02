import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '../context/ProductContext';
import './Accessories.css';

export default function Accessories() {
    const { products } = useProducts();

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
                {products.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="acc-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <div className="acc-image-wrapper">
                            <img src={item.image} alt={item.name} className="acc-img" loading="lazy" />
                            <div className="acc-overlay">
                                <button className="add-btn" title="Add to Cart">+</button>
                            </div>
                        </div>
                        <div className="acc-info">
                            <span className="acc-cat">{item.category}</span>
                            <h3 className="acc-name">{item.name}</h3>
                        </div>
                        <div className="acc-bottom">
                            <span className="acc-price">{item.price}</span>
                            <a href="#" className="shop-link">View Details →</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
