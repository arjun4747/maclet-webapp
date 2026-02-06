import React, { useState, useEffect } from 'react';
import './LaptopCarousel.css';

const laptops = [
    { id: 1, name: "MacBook Pro 16", price: "$2,499", image: "/images/latestpick1.jpg", color: "#0071e3" },
    { id: 2, name: "Dell XPS 15", price: "$1,899", image: "/images/latestpick2.jpg", color: "#3287ff" },
    { id: 3, name: "Razer Blade 16", price: "$3,299", image: "/images/latestpick3.jpg", color: "#44d62c" },
    { id: 4, name: "Surface Studio", price: "$2,399", image: "/images/latestpick4.jpg", color: "#00a4ef" },
    { id: 5, name: "Rog Zephyrus", price: "$1,999", image: "/images/latestpick5.jpg", color: "#a29bfe" },
    { id: 6, name: "Alienware x16", price: "$2,699", image: "/images/latestpick6.jpg", color: "#00cec9" },
    { id: 7, name: "MSI Raider GE78", price: "$2,899", image: "/images/latestpick7.jpg", color: "#ff0000" },
];

export default function LaptopCarousel() {
    const [currIndex, setCurrIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const count = laptops.length;

    // Rotate 360 degrees / number of items
    const theta = 360 / count;
    // Radius of the carousel
    const radius = 400;

    // Auto rotate only when visible
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start visibility
                    setIsVisible(true);
                } else {
                    // Stop visibility
                    setIsVisible(false);
                }
            });
        }, { threshold: 0.2 });

        const section = document.getElementById('latest-picks');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return; // Pause if not visible

        const interval = setInterval(() => {
            setCurrIndex(prev => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isVisible]);

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
                                    borderColor: laptop.color,
                                    backgroundImage: `url(${laptop.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <button className="view-btn">View</button>
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
