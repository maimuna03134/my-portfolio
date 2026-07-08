import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const MouseAnimations = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // motion values update the DOM directly — no React re-render on mousemove
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  // small fixed pool of trail dots — each has its own motion values,
  // no array-in-state, no re-render, no new objects created per mousemove
  const trailCount = 5;
  const trailRefs = useRef(
    Array.from({ length: trailCount }, () => ({
      x: useMotionValue(-100),
      y: useMotionValue(-100),
    }))
  );

  useEffect(() => {
    // skip entirely on touch devices — there's no mouse to animate
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsTouchDevice(!hasFinePointer);
    if (!hasFinePointer) return;

    const trailHistory = [];

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);

      // keep a short rolling history and feed it to the trail pool
      trailHistory.unshift({ x: e.clientX - 4, y: e.clientY - 4 });
      trailHistory.length = trailCount;

      trailRefs.current.forEach((trail, i) => {
        const point = trailHistory[i];
        if (point) {
          trail.x.set(point.x);
          trail.y.set(point.y);
        }
      });
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches?.('a, button, .interactive')) setIsHovering(true);
    };
    const handleMouseLeave = (e) => {
      if (e.target.matches?.('a, button, .interactive')) setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 will-change-transform"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 0.8 : 0.6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400/50 rounded-full pointer-events-none z-40 will-change-transform"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: isHovering ? 2 : 1, opacity: isHovering ? 0.3 : 0.2 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Mouse Trails — fixed pool, no array state */}
      {trailRefs.current.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-30 will-change-transform"
          style={{
            x: trail.x,
            y: trail.y,
            opacity: 1 - i / trailCount,
            scale: 1 - i / trailCount / 1.5,
          }}
        />
      ))}
    </>
  );
};

export default MouseAnimations;