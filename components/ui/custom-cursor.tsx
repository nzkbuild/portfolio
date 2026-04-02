"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [visible, setVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.3 });
    const springY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.3 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!visible) setVisible(true);

            const el = document.elementFromPoint(e.clientX, e.clientY);
            const cursor = window.getComputedStyle(el as Element).cursor;
            setIsPointer(cursor === "pointer");
        };

        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);
        window.addEventListener("mouseenter", onEnter);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("mouseenter", onEnter);
        };
    }, [mouseX, mouseY, visible]);

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                animate={{ opacity: visible ? 1 : 0, scale: isPointer ? 2.5 : 1 }}
                transition={{ opacity: { duration: 0.15 }, scale: { type: "spring", stiffness: 300, damping: 20 } }}
            >
                <div className="w-2 h-2 rounded-full bg-white" />
            </motion.div>
        </>
    );
}
