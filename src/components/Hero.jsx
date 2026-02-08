import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './Hero.css'; // Import custom styles for hero content
import { Link } from 'react-router-dom';
import { Environment, ContactShadows } from '@react-three/drei';
import MacBook from './MacBook';

export default function Hero() {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [shouldRender3D, setShouldRender3D] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // On desktop, load immediately. On mobile, defer slightly to prioritize UI paint.
            if (!mobile) {
                setShouldRender3D(true);
            } else {
                // Defer 3D load on mobile to ensure smooth initial page render
                setTimeout(() => setShouldRender3D(true), 1500);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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
                dpr={isMobile ? [1, 1] : [1, 2]} // Cap DPR on mobile for performance
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isLoaded && shouldRender3D ? 1 : 0,
                    transition: 'opacity 1.5s ease-out',
                    pointerEvents: isLoaded && shouldRender3D ? 'auto' : 'none'
                }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    {shouldRender3D && (
                        <>
                            <MacBook position={[0, -2, 0]} scale={14} isMobile={isMobile} />
                            <ModelLoader />
                            <Environment preset="city" />
                            {/* Reduce shadow quality on mobile or disable if needed. Baking frames=1 is huge perfo win */}
                            <ContactShadows
                                position={[0, -4, 0]}
                                opacity={0.4}
                                scale={30}
                                blur={2.5}
                                far={4}
                                frames={isMobile ? 1 : Infinity}
                                resolution={isMobile ? 256 : 512}
                            />
                        </>
                    )}
                </Suspense>
            </Canvas>
        </section>
    );
}
