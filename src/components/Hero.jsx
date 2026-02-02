import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './Hero.css'; // Import custom styles for hero content
import { Link } from 'react-router-dom';
import { Environment, ContactShadows } from '@react-three/drei';
import MacBook from './MacBook';

export default function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-line">Unleash the machine. Elevate your potential.</span>
                </h1>
            </div>

            <a href="#latest-picks" className="cta-button side-btn left">Elevate Your Setup</a>
            <Link to="/accessories" className="cta-button side-btn right">The Essentials</Link>

            <Canvas
                camera={{ position: [0, 0, 20], fov: 35 }}
                dpr={[1, 2]}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <MacBook position={[0, -2, 0]} scale={14} />
                    <Environment preset="city" />
                </Suspense>
                <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={30} blur={2.5} far={4} />
            </Canvas>
        </section>
    );
}
