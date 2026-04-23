'use client';

import { useState } from 'react';
import { PlayIcon } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { channelName, videos } from '@/constants/youtube.constant';
import Image from 'next/image';

export function YouTube() {
  const { ref, offset } = useParallax(0.35);
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section ref={ref} id="youtube" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-[1.2] will-change-transform"
          style={{
            transform: `translateY(${offset * 0.5}px) scale(1.2)`,
          }}
        />
        <div className="absolute inset-0 bg-luna-bg/60" />
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/50 via-transparent to-luna-bg/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-luna-ice-white tracking-widest mb-2">
            L.U.N.A TRANSMISSIONS
          </h2>
          <p className="font-body text-xl text-luna-glow-blue">
            Watch Africa's space story unfold.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Active Video Player */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video bg-luna-deep-navy/60 backdrop-blur-sm border border-luna-royal-blue/50 overflow-hidden mb-6 transition-all duration-500 hover:border-glow">
              <iframe
                key={activeVideo.id} // forces re-mount on video change
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Active video info below player */}
            <div>
              <div className="flex items-center space-x-4 mb-3">
                <span className="font-heading tracking-widest text-luna-bright-blue">
                  NOW PLAYING
                </span>
                <span className="font-body text-sm text-white">
                  {activeVideo.duration}
                </span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-luna-ice-white tracking-wide">
                {activeVideo.title}
              </h3>
            </div>
          </div>

          {/* Right: Scrollable Video List */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="font-heading text-xl tracking-widest text-white mb-6 border-b border-luna-royal-blue/30 pb-4">
                RECENT UPLOADS
              </h4>

              {/* Scrollable list — max height so it aligns with player */}
              <div className="space-y-3 max-h-105 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-luna-royal-blue/40">
                {videos.map((video, index) => {
                  const isActive = video.id === activeVideo.id;
                  return (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video)}
                      className={`w-full text-left transition-all duration-300 group border ${
                        isActive
                          ? 'border-luna-glow-blue/60 bg-luna-deep-navy/80'
                          : 'border-transparent bg-luna-deep-navy/40 hover:border-luna-royal-blue/50 hover:bg-luna-deep-navy/70'
                      }`}
                    >
                      <div className="flex gap-3 p-3">
                        {/* Thumbnail */}
                        <div className="relative shrink-0 w-24 aspect-video overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Play overlay on hover / active */}
                          <div
                            className={`absolute inset-0 flex items-center justify-center bg-luna-bg/50 transition-opacity duration-300 ${
                              isActive
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            <PlayIcon
                              size={20}
                              className="text-luna-glow-blue fill-luna-glow-blue"
                            />
                          </div>
                        </div>

                        {/* Title + meta */}
                        <div className="flex flex-col justify-between min-w-0">
                          <span
                            className={`font-heading text-sm tracking-wide leading-snug line-clamp-2 transition-colors ${
                              isActive
                                ? 'text-luna-glow-blue'
                                : 'text-luna-ice-white group-hover:text-luna-glow-blue'
                            }`}
                          >
                            {video.title}
                          </span>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="font-heading text-xs text-luna-royal-blue">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="font-body text-xs text-white/60">
                              {video.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subscribe CTA — mirrors podcast subscribe row */}
            <div className="mt-12">
              <h4 className="font-heading text-sm tracking-widest text-white mb-4">
                FOLLOW ON
              </h4>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'YouTube', href: `https://www.youtube.com/${channelName}` },
                  {
                    label: 'Subscribe',
                    href: `https://www.youtube.com/${channelName}?sub_confirmation=1`,
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading tracking-widest text-lg text-luna-glow-blue hover:text-luna-ice-white transition-colors hover:text-glow"
                  >
                    {link.label}
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
