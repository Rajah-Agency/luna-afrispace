'use client';
import { useParallax } from '../hooks/useParallax';
import Image from 'next/image';

export function MissionVision() {
  const { ref, offset } = useParallax(0.4);

  return (
    <section ref={ref} id="mission" className="relative py-24 md:py-32 overflow-hidden">
      {/* Earth from Space Background */}
      <div className="absolute inset-0 z-0">
        <Image
          width={1920}
          height={1080}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover scale-[1.2] will-change-transform"
          style={{
            transform: `translateY(${offset * 0.5}px) scale(1.2)`,
          }}
        />
        {/* <div className="absolute inset-0 bg-luna-bg/45" /> */}
        <div className="absolute inset-0 bg-linear-to-b from-luna-bg/40 via-transparent to-luna-bg/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
          {/* Mission */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t border-l border-luna-royal-blue rounded-tl-full opacity-50" />
            <h2 className="font-heading text-4xl md:text-5xl text-luna-ice-white mb-6 tracking-wider flex items-center">
              <span className="w-8 h-px bg-luna-glow-blue mr-4"></span>
              OUR MISSION
            </h2>
            <p className="font-body text-lg text-white leading-relaxed">
              Position Africa in the global space race by equipping people with the
              necessary skills and knowledge about space.
            </p>
          </div>

          {/* Vision */}
          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b border-r border-luna-royal-blue rounded-br-full opacity-50" />
            <h2 className="font-heading text-4xl md:text-5xl text-luna-ice-white mb-6 tracking-wider flex items-center">
              <span className="w-8 h-px bg-luna-glow-blue mr-4"></span>
              OUR VISION
            </h2>
            <p className="font-body text-lg text-white leading-relaxed">
              Putting Africans at the forefront of the space race in the world and Africa.
              Showing Africa and the world that they don't have to be left behind and to
              show that L.U.N.A encompasses areas such as Science, Technology, Engineering
              and Mathematics, Medicine, Humanities, Artificial Intelligence, Space
              Science, Astronautics and Aerospace
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-luna-royal-blue/30 py-12 backdrop-blur-sm bg-luna-bg/30 px-8">
          <div className="text-center">
            <div className="font-heading text-5xl md:text-6xl text-luna-glow-blue text-glow mb-2">
              15+
            </div>
            <div className="font-heading tracking-widest text-white">AFRICAN NATIONS</div>
          </div>
          <div className="text-center md:border-l md:border-r border-luna-royal-blue/30">
            <div className="font-heading text-5xl md:text-6xl text-luna-glow-blue text-glow mb-2">
              500+
            </div>
            <div className="font-heading tracking-widest text-white">
              STUDENTS CONNECTED
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading text-5xl md:text-6xl text-luna-glow-blue text-glow mb-2">
              30+
            </div>
            <div className="font-heading tracking-widest text-white">
              RESEARCH PROJECTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
