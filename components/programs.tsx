'use client';
import { GraduationCapIcon, TelescopeIcon, RocketIcon, GlobeIcon } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import Image from 'next/image';

export function Programs() {
  const { ref, offset } = useParallax(0.35);

  const programs = [
    {
      title: 'STUDENT LAUNCHPAD',
      description:
        'Fellowships and hands-on engineering programs for university students across the continent.',
      icon: <GraduationCapIcon size={32} className="text-luna-glow-blue" />,
    },
    {
      title: 'RESEARCH ORBIT',
      description:
        'Funding and global partnerships for African researchers and academics in astrophysics and aerospace.',
      icon: <TelescopeIcon size={32} className="text-luna-glow-blue" />,
    },
    {
      title: 'PROFESSIONAL ASCENT',
      description:
        'Career acceleration, networking, and placement for industry professionals in the global space sector.',
      icon: <RocketIcon size={32} className="text-luna-glow-blue" />,
    },
    {
      title: 'OPEN COSMOS',
      description:
        'Community initiatives, hackathons, and open-source satellite data projects for the public.',
      icon: <GlobeIcon size={32} className="text-luna-glow-blue" />,
    },
  ];
  return (
    <section ref={ref} id="programs" className="py-24 md:py-32 relative overflow-hidden">
      {/* Milky Way Background */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          src="https://images.unsplash.com/photo-1457364887197-9150188c107b?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-[1.2] will-change-transform"
          style={{
            transform: `translateY(${offset * 0.5}px) scale(1.2)`,
          }}
        />
        {/* <div className="absolute inset-0 bg-luna-bg/40" /> */}
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/35 via-transparent to-luna-bg/35" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-luna-royal-blue/20 rounded-full animate-orbit-slow pointer-events-none" />
          <h2 className="font-heading text-4xl md:text-6xl text-luna-ice-white tracking-widest inline-block px-8 relative z-10">
            PROGRAMS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-luna-deep-navy/80 backdrop-blur-sm border border-luna-royal-blue/50 p-8 transition-all duration-300 hover:border-glow hover:box-glow hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-luna-bg/60 inline-block rounded-full border border-luna-royal-blue/30 group-hover:border-luna-glow-blue transition-colors">
                {program.icon}
              </div>
              <h3 className="font-heading text-2xl text-luna-ice-white mb-4 tracking-wider">
                {program.title}
              </h3>
              <p className="font-body text-white mb-8 grow">{program.description}</p>
              <a
                href="#"
                className="font-heading tracking-widest text-luna-glow-blue flex items-center group-hover:text-luna-ice-white transition-colors mt-auto"
              >
                LEARN MORE{' '}
                <span className="ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
