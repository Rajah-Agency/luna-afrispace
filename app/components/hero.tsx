'use client';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { StarField } from './star-field';
import { useParallax } from '../hooks/useParallax';
import { HERO_IMAGES } from '../constant';

export function Hero() {
  const { ref, offset } = useParallax(0.3);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Deep Space Background Image Slideshow — Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transform: index === currentImageIndex ? 'scale(1.1)' : 'scale(1)',
              transition: 'opacity 2000ms ease-in-out, transform 10000ms ease-out',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-luna-bg/40" />
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/50 via-transparent to-luna-bg/60" />
      </div>
      <StarField />

      {/* Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 md:w-300 md:h-300 opacity-30 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-orbit-slow">
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
            className="text-luna-royal-blue"
          />
          <circle
            cx="50"
            cy="2"
            r="0.8"
            fill="currentColor"
            className="text-luna-glow-blue animate-pulse-glow"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.05"
            className="text-luna-muted-steel"
            strokeDasharray="1 2"
          />
          <circle
            cx="15"
            cy="50"
            r="0.5"
            fill="currentColor"
            className="text-luna-bright-blue"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="font-heading text-7xl md:text-9xl lg:text-[11rem] font-bold tracking-[0.15em] md:tracking-[0.2em] text-luna-ice-white opacity-90 mb-6 ml-[0.15em] md:ml-[0.2em] text-glow">
          L<span className="text-luna-muted-steel/50 mx-2 md:mx-4">·</span>U
          <span className="text-luna-muted-steel/50 mx-2 md:mx-4">·</span>N
          <span className="text-luna-muted-steel/50 mx-2 md:mx-4">·</span>A
        </h1>

        <h2 className="font-heading text-xl md:text-3xl text-white tracking-[0.2em] mb-6 max-w-3xl">
          AFRICA'S GATEWAY TO THE COSMOS
        </h2>

        <p className="font-body text-lg md:text-xl text-white max-w-2xl mb-12 leading-relaxed">
          Connecting students, researchers, and professionals to the global space race.
        </p>

        <a
          href="#programs"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-heading tracking-widest text-lg text-luna-bg bg-luna-bright-blue overflow-hidden transition-all duration-300 hover:bg-luna-glow-blue hover:box-glow-strong"
        >
          <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          JOIN THE MISSION
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a
          href="#mission"
          aria-label="Scroll to mission section"
          className="text-white hover:text-luna-glow-blue transition-colors"
        >
          <ChevronDownIcon size={32} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
