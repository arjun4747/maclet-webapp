import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { laptops } from '../data/laptops';
import './LaptopDetails.css';

export default function LaptopDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [laptop, setLaptop] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const found = laptops.find(l => l.slug === slug);
        if (found) {
            setLaptop(found);
            setMainImage(found.images[0]);
        } else {
            navigate('/laptops');
        }
    }, [slug, navigate]);

    if (!laptop) return <div className="loading">Loading...</div>;

    return (
        <div className="laptop-details-container">
            <div className="laptop-details-grid">
                {/* Left Side: Gallery */}
                <div className="laptop-gallery">
                    <div className="main-image-container">
                        <img src={mainImage} alt={laptop.name} className="main-image" />
                    </div>
                    <div className="thumbnails">
                        {laptop.images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`thumbnail-card ${mainImage === img ? 'active' : ''}`}
                                onClick={() => setMainImage(img)}
                            >
                                <img src={img} alt={`${laptop.name} view ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Info */}
                <div className="laptop-info">
                    <div className="brand-tag" style={{ '--accent': laptop.accent }}>{laptop.brand}</div>
                    <h1 className="details-title">{laptop.name}</h1>
                    <p className="details-price">{laptop.price}</p>

                    <div className="specs-box">
                        <h3>Specifications</h3>
                        <p>{laptop.specs}</p>
                    </div>

                    <div className="description-box">
                        <h3>Description</h3>
                        <p>{laptop.description}</p>
                    </div>

                    <div className="actions">
                        <a
                            href={`https://wa.me/919876543210?text=${encodeURIComponent(`I am interested in the ${laptop.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.002 2C6.478 2 2 6.478 2 12c0 1.767.464 3.428 1.275 4.885L2.1 21.9l5.127-1.332A9.957 9.957 0 0012.002 22C17.525 22 22 17.522 22 12S17.525 2 12.002 2zM12 20.334c-1.524 0-2.964-.396-4.226-1.088l-.304-.176-3.14 1.153.84-3.06-.196-.341C4.093 15.422 3.666 13.766 3.666 12c0-4.594 3.738-8.333 8.334-8.333 4.596 0 8.333 3.739 8.333 8.333S16.596 20.334 12 20.334zm4.564-6.248c-.25-.125-1.479-.73-1.708-.813-.229-.083-.396-.125-.563.125-.167.25-.646.813-.792.979-.146.167-.292.188-.542.063-.25-.125-1.055-.389-2.009-1.24-.741-.66-1.241-1.476-1.387-1.726-.146-.25-.015-.385.11-.51.113-.113.25-.292.375-.438.125-.145.167-.25.25-.416.083-.167.042-.313-.021-.438-.063-.125-.563-1.354-.771-1.854-.203-.49-.409-.423-.563-.43-.146-.007-.313-.007-.479-.007-.167 0-.438.063-.667.313-.229.25-.875.854-.875 2.083s.896 2.417 1.021 2.583c.125.167 1.763 2.692 4.271 3.774.596.257 1.06.411 1.423.527.602.192 1.15.164 1.586.1.481-.07 1.479-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.229-.167-.479-.292z" />
                            </svg>
                            CHAT ON WHATSAPP
                        </a>
                        <button className="back-btn" onClick={() => navigate('/laptops')}>Back to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
