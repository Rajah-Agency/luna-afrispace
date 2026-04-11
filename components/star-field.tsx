const STARS = Array.from({ length: 150 }, (_, i) => ({
  id: i,
  x: (i * 13.7 + 7.3) % 100,
  y: (i * 17.3 + 3.1) % 100,
  size: 0.5 + (i * 0.37) % 2,
  opacity: 0.2 + (i * 0.13) % 0.6,
  delay: (i * 0.37) % 5,
  duration: 2 + (i * 0.41) % 3,
}));

export function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {STARS.map((star) => (
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