'use client';

import { CirclePlayIcon, PlayIcon } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { episodes } from '../app/constant';

export function Podcast() {
  const { ref, offset } = useParallax(0.35);

  return (
    <section ref={ref} id="podcast" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark Blue Space Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-[1.2] will-change-transform"
          style={{
            transform: `translateY(${offset * 0.5}px) scale(1.2)`,
          }}
        />
        <div className="absolute inset-0 bg-luna-bg/40" />
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/35 via-transparent to-luna-bg/35" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-luna-ice-white tracking-widest mb-2">
            THE L.U.N.A SIGNAL
          </h2>
          <p className="font-body text-xl text-luna-glow-blue">
            Voices from Africa's space frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Featured Episode */}
          <div className="lg:col-span-3 group cursor-pointer">
            <div className="relative aspect-video bg-luna-deep-navy/60 backdrop-blur-sm border border-luna-royal-blue/50 overflow-hidden mb-6 flex items-center justify-center group-hover:border-glow transition-all duration-500">
              {/* Abstract Soundwave/Space Graphic */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-luna-bright-blue via-luna-deep-navy to-luna-bg"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <CirclePlayIcon
                  size={80}
                  strokeWidth={1}
                  className="text-luna-glow-blue opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_15px_rgba(91,163,232,0.5)]"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-3">
                <span className="font-heading tracking-widest text-luna-bright-blue">
                  LATEST EPISODE
                </span>
                <span className="font-body text-sm text-white">45 MIN</span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-luna-ice-white tracking-wide group-hover:text-luna-glow-blue transition-colors">
                Ep. 12: Satellite Dreams — Kenya's Orbital Ambitions
              </h3>
            </div>
          </div>

          {/* Episode List & Subscribe */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="space-y-4 mb-12">
              <h4 className="font-heading text-xl tracking-widest text-white mb-6 border-b border-luna-royal-blue/30 pb-4">
                RECENT TRANSMISSIONS
              </h4>
              {episodes.map((ep) => (
                <div
                  key={ep.num}
                  className="flex items-center justify-between p-4 bg-luna-deep-navy/40 backdrop-blur-sm border border-transparent hover:border-luna-royal-blue/50 hover:bg-luna-deep-navy/70 transition-all cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="font-heading text-xl text-luna-royal-blue group-hover:text-luna-glow-blue transition-colors">
                      {ep.num}
                    </span>
                    <span className="font-heading text-lg text-luna-ice-white tracking-wide">
                      {ep.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-body text-sm text-white hidden sm:block">
                      {ep.duration}
                    </span>
                    <PlayIcon
                      size={20}
                      className="text-white group-hover:text-luna-glow-blue transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-heading text-sm tracking-widest text-white mb-4">
                SUBSCRIBE ON
              </h4>
              <div className="flex flex-wrap gap-6">
                {['Spotify', 'Apple Podcasts', 'YouTube'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-heading tracking-widest text-lg text-luna-glow-blue hover:text-luna-ice-white transition-colors hover:text-glow"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
