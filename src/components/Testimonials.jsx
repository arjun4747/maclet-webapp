import React from 'react';
import './Testimonials.css';

const testimonials = [
    { id: 1, image: "/images/client1.jpeg" },
    { id: 2, image: "/images/client2.jpeg" },
    { id: 3, image: "/images/client3.jpeg" },
    { id: 4, image: "/images/client4.jpeg" },
    { id: 5, image: "/images/client1.jpeg" },
    { id: 6, image: "/images/client2.jpeg" }
];

export default function Testimonials() {
    // Triple the list for seamless loop
    const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">&#123; Happy Clients &#125;</h2>

            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {displayTestimonials.map((client, index) => (
                        <div key={`${client.id}-${index}`} className="testimonial-card">
                            <img src={client.image} alt="Happy Client" className="client-photo-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
