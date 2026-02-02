import React, { useRef, useState, useEffect } from "react";

export const GlowingEffect = ({
    children,
    className = "",
    glowColor = "rgba(255, 255, 255, 0.5)",
    spread = 60,
    borderWidth = 1.5
}) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{
                position: "relative",
                borderRadius: "inherit" // Crucial for pill shape inheritance
            }}
        >
            {/* Moving Gradient Border */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 100%)`,
                    borderRadius: "inherit",
                    padding: borderWidth, // Acts as border width
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    zIndex: 10
                }}
            />

            {/* Content */}
            <div className="relative z-10" style={{ borderRadius: "inherit" }}>
                {children}
            </div>
        </div>
    );
};

export default GlowingEffect;
