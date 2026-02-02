import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        id: 1,
        title: "Express Shipping",
        desc: "Global delivery within 3-5 days.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
        )
    },
    {
        id: 2,
        title: "Official Warranty",
        desc: "1-year coverage on all devices.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
        )
    },
    {
        id: 3,
        title: "Expert Support",
        desc: "24/7 assistance from tech pros.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
        )
    }
];

export default function Services() {
    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <h2 className="services-main-title">Why Maclet?</h2>
                <p className="services-subtitle">Experience the difference.</p>
            </div>

            <div className="services-container">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        className="service-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
