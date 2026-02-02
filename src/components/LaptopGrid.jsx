import React from 'react';
import { motion } from 'framer-motion';
import './LaptopGrid.css';

const laptops = [
    {
        id: 1,
        name: "MacBook Pro 16",
        brand: "Apple",
        specs: "M3 Max • 96GB RAM • 8TB SSD",
        price: "$2,499",
        image: "https://placehold.co/600x400/000000/0071e3?text=MacBook+Pro",
        accent: "#0071e3"
    },
    {
        id: 2,
        name: "Dell XPS 15",
        brand: "Dell",
        specs: "OLED 3.5K • i9 • 64GB RAM",
        price: "$1,899",
        image: "https://placehold.co/600x400/1e1e1e/3287ff?text=Dell+XPS",
        accent: "#3287ff"
    },
    {
        id: 3,
        name: "Razer Blade 16",
        brand: "Razer",
        specs: "RTX 4090 • 240Hz Mini-LED",
        price: "$3,299",
        image: "https://placehold.co/600x400/0f0f0f/44d62c?text=Razer+Blade",
        accent: "#44d62c"
    },
    {
        id: 4,
        name: "Surface Studio 2",
        brand: "Microsoft",
        specs: "Touch • Pen • Nvidia Studio",
        price: "$2,399",
        image: "https://placehold.co/600x400/2b2b2b/00a4ef?text=Surface+Studio",
        accent: "#00a4ef"
    },
    {
        id: 5,
        name: "ROG Zephyrus G14",
        brand: "ASUS",
        specs: "Ryzen 9 • RTX 4070 • OLED",
        price: "$1,999",
        image: "https://placehold.co/600x400/2d3436/a29bfe?text=ROG+Zephyrus",
        accent: "#a29bfe"
    },
    {
        id: 6,
        name: "Alienware x16 R2",
        brand: "Dell",
        specs: "Core i9 • RTX 4090 • 480Hz",
        price: "$2,699",
        image: "https://placehold.co/600x400/000000/00cec9?text=Alienware",
        accent: "#00cec9"
    },
    {
        id: 7,
        name: "Galaxy Book4 Ultra",
        brand: "Samsung",
        specs: "Core Ultra 9 • AMOLED 2X",
        price: "$2,399",
        image: "https://placehold.co/600x400/191919/ffffff?text=Galaxy+Book",
        accent: "#ffffff"
    },
    {
        id: 8,
        name: "ThinkPad X1 Carbon",
        brand: "Lenovo",
        specs: "Carbon Fiber • Ultralight",
        price: "$1,799",
        image: "https://placehold.co/600x400/000000/ff0000?text=ThinkPad+X1",
        accent: "#ff0000"
    }
];

export default function LaptopGrid() {
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
                    >
                        <div className="laptop-image-box">
                            <img src={laptop.image} alt={laptop.name} className="laptop-img" loading="lazy" />
                            <div className="laptop-badge">{laptop.brand}</div>
                        </div>

                        <div className="laptop-details">
                            <h3 className="laptop-name">{laptop.name}</h3>
                            <p className="laptop-specs">{laptop.specs}</p>

                            <div className="laptop-footer">
                                <span className="laptop-price">{laptop.price}</span>
                                <button className="laptop-buy-btn">Buy Now</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
