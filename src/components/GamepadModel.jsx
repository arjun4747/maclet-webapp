import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export default function GamepadModel() {
    const { scene } = useGLTF('/models/gamepad1.glb');
    const modelRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Responsive offset state
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Initial setup and idle animation
    useEffect(() => {
        if (modelRef.current) {
            // Initial position - Responsive centering
            const baseX = isMobile ? -0.8 : 0; // Shift left on mobile to center visually
            modelRef.current.position.set(baseX, 0, 0);
            // Initial rotation
            modelRef.current.rotation.set(0.2, -0.5, 0);

            // Idle floating animation (up and down)
            gsap.to(modelRef.current.position, {
                y: 0.1,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut"
            });
        }
    }, [isMobile]); // Re-run if mobile state changes to adjust position

    // Mouse interaction for subtle parallax
    useFrame((state) => {
        if (!modelRef.current) return;

        // Mouse Parallax Logic
        // Normalized mouse x (-1 to 1)
        const mouseX = state.mouse.x;

        // Reduce intensity on mobile
        const intensity = isMobile ? 0.05 : 0.14;
        const posIntensity = isMobile ? 0.05 : 0.2;

        // Target Rotations (Restricted to Y-axis only)
        // Max rotation +/- 8 degrees (approx 0.14 radians)
        // Base rotation -0.5 preserved
        const targetRotY = -0.5 + (mouseX * intensity);
        const targetRotX = 0.2; // Fixed subtle tilt

        // Target Positions (Restricted to X-axis only)
        // Small horizontal parallax with Responsive Base Offset
        const baseX = isMobile ? -0.8 : 0; // Maintain offset during parallax
        const targetPosX = baseX + (mouseX * posIntensity);

        // Damping / Smoothing factor
        const damping = hovered ? 0.05 : 0.02; // Very smooth inertia

        // Apply smooth interpolation
        modelRef.current.rotation.y += (targetRotY - modelRef.current.rotation.y) * damping;
        modelRef.current.rotation.x += (targetRotX - modelRef.current.rotation.x) * damping;
        modelRef.current.position.x += (targetPosX - modelRef.current.position.x) * damping;
    });

    // Hover Effects
    useEffect(() => {
        if (!modelRef.current) return;

        if (hovered) {
            // Mouse Over: Scale up slightly and maybe pause idle float?
            gsap.to(modelRef.current.scale, {
                x: 0.65, // Slightly larger on hover
                y: 0.65,
                z: 0.65,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            // Mouse Leave: Return to base scale
            gsap.to(modelRef.current.scale, {
                x: 0.6, // Base scale (fits comfortably)
                y: 0.6,
                z: 0.6,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    }, [hovered]);

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={0.6} // Normal hero size
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        />
    );
}

useGLTF.preload('/models/gamepad1.glb');
