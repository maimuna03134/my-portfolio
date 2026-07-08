import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseAnimations = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings - কিছুটা হালকা করা হয়েছে যাতে লোড কম পড়ে
  const springConfig = { stiffness: 300, damping: 25 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // টাচ ডিভাইস চেক
    const checkTouch = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    };
    checkTouch();

    if (window.matchMedia("(pointer: coarse)").matches) return;

    // requestAnimationFrame ব্যবহার করে পারফরম্যান্স বাড়ানো
    let rafId;
    const move = (e) => {
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 8);
        cursorY.set(e.clientY - 8);
      });
    };

    // ইভেন্ট ডেলিগেশন - বারবার listener না বসিয়ে ১টি বসানো
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .interactive")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .interactive")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: isHovering ? 2.2 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998]"
        style={{ x: smoothX, y: smoothY }}
        animate={{ scale: isHovering ? 1.6 : 1, opacity: isHovering ? 0.4 : 0.2 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
    </>
  );
};

export default MouseAnimations;