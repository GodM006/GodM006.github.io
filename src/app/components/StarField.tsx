import { motion } from "motion/react";
import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function StarField() {
  const stars = useMemo(() => {
    const starArray: Star[] = [];
    
    // Generate stars with random properties
    for (let i = 0; i < 150; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    
    return starArray;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
          style={{
            width: "100px",
            left: `${20 + i * 25}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: ["-100%", "200vw"],
            y: ["0%", "100vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
