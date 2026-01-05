import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Create trail effect
      setTrails(prev => [
        ...prev.slice(-8), // Keep only last 8 trail points
        { 
          x: e.clientX, 
          y: e.clientY, 
          id: Date.now() + Math.random() 
        }
      ]);
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, .interactive')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, .interactive')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-400/50 rounded-full pointer-events-none z-40"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Mouse Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-30"
          style={{
            x: trail.x - 4,
            y: trail.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ 
            scale: 0, 
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
          }}
        />
      ))}

      {/* Floating Particles that follow mouse */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-20"
        style={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 rounded-full"
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.5, 0.5, 1],
              opacity: [0.4, 0.8, 0.2, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${50 + i * 30}px`,
              top: `${50 + i * 20}px`,
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default MouseAnimations;