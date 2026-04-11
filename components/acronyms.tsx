'use client';
import { useEffect, useState } from 'react';
import { slides } from '../app/constant';

export function LunaAcronym() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'opacity 1500ms ease-in-out, transform 8000ms ease-out',
            }}
          />
        ))}
        {/* <div className="absolute inset-0 bg-luna-bg/60" /> */}
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/50 via-transparent to-luna-bg/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Letter Display */}
          <div className="mb-8 transition-all duration-700">
            <h2 className="font-heading text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.2em] text-luna-ice-white mb-4 opacity-90">
              {slides[currentSlide].letter}
            </h2>
          </div>

          {/* Word Display */}
          <div className="transition-all duration-700">
            <p className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-[0.3em] text-luna-glow-blue">
              {slides[currentSlide].word}
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-luna-ice-white w-8' : 'bg-luna-muted-steel/50 hover:bg-luna-muted-steel'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
