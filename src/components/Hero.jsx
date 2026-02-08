import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './Hero.css'; // Import custom styles for hero content
import { Link } from 'react-router-dom';
import { Environment, ContactShadows } from '@react-three/drei';
import MacBook from './MacBook';

export default function Hero() {
    const [isLoaded, setIsLoaded] = React.useState(false);

    // Simple component to signal when Suspense has finished loading
    function ModelLoader() {
        React.useEffect(() => {
            setIsLoaded(true);
        }, []);
        return null;
    }

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
                dpr={window.devicePixelRatio}
                gl={{ antialias: true, powerPreference: "high-performance", alpha: true, preserveDrawingBuffer: true }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 1.5s ease-out'
                }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <MacBook position={[0, -2, 0]} scale={14} />
                    <ModelLoader />
                    <Environment preset="city" />
                </Suspense>
                <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={30} blur={2.5} far={4} />
            </Canvas>
        </section>
    );
}
