'use client';
import { events } from '../app/constant';
import { useParallax } from '../hooks/useParallax';

export function Events() {
  const { ref, offset } = useParallax(0.4);

  return (
    <section ref={ref} id="events" className="py-24 md:py-32 relative overflow-hidden">
      {/* Space Station / Earth Horizon Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920&q=80"
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
        <div className="mb-16 md:mb-24">
          <h2 className="font-heading text-4xl md:text-5xl text-luna-ice-white tracking-widest flex items-center">
            UPCOMING EVENTS
            <span className="grow h-px bg-linear-to-r from-luna-royal-blue to-transparent ml-6 hidden md:block"></span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-luna-royal-blue/50 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-1.25 md:left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-luna-glow-blue md:-translate-x-1/2 md:-translate-y-1/2 box-glow z-10"></div>

                {/* Content Box */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                >
                  <div className="bg-luna-deep-navy/70 backdrop-blur-md border border-luna-royal-blue/30 p-6 md:p-8 hover:border-luna-glow-blue transition-colors duration-300">
                    <span className="inline-block px-3 py-1 bg-luna-ice-white font-heading tracking-widest text-sm text-luna-bg mb-4">
                      {event.date}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl text-luna-ice-white mb-2 tracking-wide">
                      {event.name}
                    </h3>
                    <div className="font-heading tracking-widest text-luna-glow-blue mb-4 text-sm">
                      {event.location}
                    </div>
                    <p className="font-body text-luna-muted-steel">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
