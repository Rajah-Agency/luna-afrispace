'use client';
import { useParallax } from '../hooks/useParallax';
import Image from 'next/image';

export function Newsletter() {
  const { ref, offset } = useParallax(0.4);

  return (
    <section ref={ref} id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Earth Sunrise from Orbit Background — Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-[1.2] will-change-transform"
          style={{
            transform: `translateY(${offset * 0.5}px) scale(1.2)`,
          }}
        />
        <div className="absolute inset-0 bg-luna-bg/40" />
        <div className="absolute inset-0 bg-linear-to-t from-luna-bg/35 via-transparent to-luna-bg/35" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-luna-glow-blue to-transparent opacity-50 z-1"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-luna-royal-blue/10 rounded-full blur-3xl pointer-events-none z-1"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-5xl md:text-7xl text-luna-ice-white tracking-widest mb-6 text-glow">
            STAY IN ORBIT
          </h2>
          <p className="font-body text-xl text-white mb-12 font-medium">
            Get mission updates, event alerts, and stories from Africa's space frontier.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="grow bg-luna-deep-navy/70 backdrop-blur-md border border-luna-royal-blue px-6 py-4 font-body text-luna-ice-white placeholder:text-white/50 focus:outline-none focus:border-luna-glow-blue focus:box-glow transition-all"
            />
            <button
              type="submit"
              className="bg-white text-luna-bg font-heading tracking-widest text-lg px-8 py-4 hover:bg-luna-glow-blue hover:text-luna-bg hover:box-glow transition-all whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>

          <p className="font-body text-md font-medium text-white">
            Join 2,000+ space enthusiasts across the continent.
          </p>
        </div>
      </div>
    </section>
  );
}
