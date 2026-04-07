import React, { useMemo } from 'react';
export function StarField() {
  const stars = useMemo(() => {
    return Array.from({
      length: 150,
    }).map((_, i) => {
      // Use a pseudo-random approach based on index to keep it stable across renders
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      const opacity = Math.random() * 0.6 + 0.2;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      return {
        id: i,
        x,
        y,
        size,
        opacity,
        delay,
        duration,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-luna-ice-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
