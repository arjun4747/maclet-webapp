import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Brands.css';

const brands = [
    { id: 7, name: 'Asus', logo: '/images/asus.png' },
    { id: 1, name: 'Apple', logo: '/images/apple.png' },
    { id: 2, name: 'Samsung', logo: '/images/samsung.png' },
    { id: 3, name: 'HP', logo: '/images/hp.png' },
    { id: 4, name: 'Lenovo', logo: '/images/lenovo.png' },
    { id: 5, name: 'Acer', logo: '/images/acer.png' },
    { id: 6, name: 'Dell', logo: '/images/dell.png' },
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
                <h2 className="brands-title">&#123; Choose your powerhouse &#125;</h2>
            </motion.div>

            <motion.div
                className="marquee-wrapper"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <div className="glass-container">
                    <div className="marquee-track">
                        {/* Triple the list for smoother seamless loop on wider screens */}
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div
                                key={`${brand.id}-${index}`}
                                className="brand-item"
                                style={{ animationDelay: `${index * 0.5}s` }}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="brand-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
