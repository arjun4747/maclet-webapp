import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import GamepadModel from './GamepadModel';
import './AccessoriesTeaser.css';

export default function AccessoriesTeaser() {
    return (
        <section className="teaser-section">
            <div className="teaser-content">
                <span className="teaser-label">THE ECOSYSTEM</span>
                <h2 className="teaser-title">Complete your setup.</h2>
                <p className="teaser-subtitle">
                    Power your workflow with our curated collection of premium peripherals.
                </p>
                <Link to="/accessories" className="teaser-btn">
                    Explore Accessories →
                </Link>
            </div>
            <div className="teaser-visual">
                <Canvas camera={{ position: [0, 0, 7], fov: 60 }}> {/* Normal viewing distance and FOV */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[5, 10, 5]} angle={0.25} penumbra={1} intensity={2} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0071e3" />
                    <Suspense fallback={null}>
                        <GamepadModel />
                        <ContactShadows opacity={0.4} scale={10} blur={2} far={4} resolution={256} color="#000000" />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
