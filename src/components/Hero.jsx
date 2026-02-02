import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import MacBook from './MacBook';

export default function Hero() {
    return (
        <section className="hero-section">
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
