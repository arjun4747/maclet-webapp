import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import './About.css';

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="about-container">
                <div className="about-hero">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-title"
                    >
                        Redefining Performance.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="about-subtitle"
                    >
                        Maclet was born from a simple idea: Premium technology deserves a premium experience.
                    </motion.p>
                </div>

                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-card"
                    >
                        <h2>Our Mission</h2>
                        <p>To provide creators, developers, and professionals with the most powerful tools on the planet, curated in one seamless ecosystem.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="about-card"
                    >
                        <h2>The Standard</h2>
                        <p>We don't just sell laptops. We sell tested, verified, and optimized workstations ready for high-end production environments.</p>
                    </motion.div>
                </div>

                <div className="about-image-section">
                    {/* Abstract visual representing the brand */}
                    <div className="brand-visual">
                        <div className="visual-circle"></div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
