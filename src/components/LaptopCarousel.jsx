import React, { useState, useEffect } from 'react';
import './LaptopCarousel.css';

const laptops = [
    { id: 1, name: "MacBook Pro 16", price: "$2,499", image: "https://placehold.co/600x400/000000/0071e3?text=MacBook+Pro", color: "#0071e3" },
    { id: 2, name: "Dell XPS 15", price: "$1,899", image: "https://placehold.co/600x400/1e1e1e/3287ff?text=Dell+XPS", color: "#3287ff" },
    { id: 3, name: "Razer Blade 16", price: "$3,299", image: "https://placehold.co/600x400/0f0f0f/44d62c?text=Razer+Blade", color: "#44d62c" },
    { id: 4, name: "Surface Studio", price: "$2,399", image: "https://placehold.co/600x400/2b2b2b/00a4ef?text=Surface+Studio", color: "#00a4ef" },
    { id: 5, name: "Rog Zephyrus", price: "$1,999", image: "https://placehold.co/600x400/2d3436/a29bfe?text=ROG+Zephyrus", color: "#a29bfe" },
    { id: 6, name: "Alienware x16", price: "$2,699", image: "https://placehold.co/600x400/000000/00cec9?text=Alienware", color: "#00cec9" },
];

export default function LaptopCarousel() {
    const [currIndex, setCurrIndex] = useState(0);
    const count = laptops.length;

    // Rotate 360 degrees / number of items
    const theta = 360 / count;
    // Radius of the carousel
    const radius = 400;

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIndex(prev => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const next = () => setCurrIndex(currIndex + 1);
    const prev = () => setCurrIndex(currIndex - 1);

    return (
        <section id="latest-picks" className="carousel-section">
            <h2 className="carousel-title">&#123; Latest Picks &#125;</h2>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateZ(-${radius}px) rotateY(${-currIndex * theta}deg)`
                    }}
                >
                    {laptops.map((laptop, index) => {
                        const angle = theta * index;
                        return (
                            <div
                                key={laptop.id}
                                className="carousel-card"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    borderColor: laptop.color
                                }}
                            >
                                <div className="card-top">
                                    <span className="card-price">{laptop.price}</span>
                                </div>
                                <img src={laptop.image} alt={laptop.name} className="card-img" loading="lazy" />
                                <div className="card-bottom">
                                    <h3 className="card-name">{laptop.name}</h3>
                                    <button className="view-btn">View</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="carousel-controls">
                <button onClick={prev} className="control-btn">←</button>
                <button onClick={next} className="control-btn">→</button>
            </div>
        </section>
    );
}
