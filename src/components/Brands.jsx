import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Brands.css';

const brands = [
    { id: 1, name: 'APPLE' },
    { id: 2, name: 'DELL' },
    { id: 3, name: 'HP' },
    { id: 4, name: 'LENOVO' },
    { id: 5, name: 'ASUS' },
    { id: 6, name: 'MSI' },
    { id: 7, name: 'RAZER' },
    { id: 8, name: 'SAMSUNG' },
    { id: 9, name: 'MICROSOFT' },
];

export default function Brands() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="brands" className="brands-section" ref={ref}>
            <motion.div
                className="brands-header"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="brands-title">Premium Partners</h2>
                <p className="brands-subtitle">Choose your powerhouse.</p>
            </motion.div>

            <motion.div
                className="marquee-container"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="marquee-track">
                    {/* Double the list for seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={`${brand.id}-${index}`} className="brand-item">
                            <span className="brand-text">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
