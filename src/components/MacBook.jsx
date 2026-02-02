import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function MacBook(props) {
    const group = useRef();
    // Ensure we handle the model load gracefully.
    // Note: This expects 'macbook.glb' to be in /public/models/
    const { scene } = useGLTF('/models/macbook.glb');

    useFrame((state) => {
        if (!group.current) return;

        // Get normalized mouse coordinates (-1 to 1)
        const { x, y } = state.pointer;

        // Smooth interaction: tilt and rotate based on cursor position
        // Increased amplitude for stronger effect (rotation) + parallax (position)

        const sensitivityX = 1.0; // Stronger left/right rotation
        const sensitivityY = 0.5; // Up/down rotation

        // Target rotations
        const targetRotationY = x * sensitivityX;
        const targetRotationX = -y * sensitivityY;

        // Target positions for Parallax
        // Move slightly opposite or with mouse to create depth
        const parallaxX = x * 1.5;
        const parallaxY = -2 + (-y * 1.0); // Base Y is -2, float up/down

        // Apply rotation lerp (slightly faster 0.15 purely preference, kept 0.1 for smoothness)
        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            targetRotationY,
            0.1
        );
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            targetRotationX,
            0.1
        );

        // Apply position lerp
        group.current.position.x = THREE.MathUtils.lerp(
            group.current.position.x,
            parallaxX,
            0.1
        );
        group.current.position.y = THREE.MathUtils.lerp(
            group.current.position.y,
            parallaxY,
            0.1
        );
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

// Preload the model
useGLTF.preload('/models/macbook.glb');
