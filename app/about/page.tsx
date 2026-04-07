import Image from 'next/image';
import { MissionVision } from '../../components/mission';
import { team } from '../constant';

export default function About() {
  const values = [
    {
      title: 'INNOVATION',
      description:
        'Pushing the boundaries of what African space technology can achieve through bold research and creative engineering.',
    },
    {
      title: 'UNITY',
      description:
        'Building bridges across nations, cultures, and disciplines to create a unified African presence in space.',
    },
    {
      title: 'EDUCATION',
      description:
        "Empowering the next generation with the knowledge and skills to lead Africa's cosmic future.",
    },
    {
      title: 'SUSTAINABILITY',
      description:
        'Ensuring our exploration of space benefits both humanity and the planet for generations to come.',
    },
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
          ABOUT LUNA
        </h1>
        <p className="font-body text-xl text-luna-muted-steel max-w-3xl mx-auto">
          Loapi Unified Nexus AfriSpace — connecting Africa to the global space race
          through education, research, and innovation.
        </p>
      </div>

      <MissionVision />

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4 tracking-widest">
              OUR VALUES
            </h2>
            <div className="w-24 h-1 bg-luna-glow-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="border border-luna-royal-blue/30 bg-luna-deep-navy/30 backdrop-blur-sm p-8 hover:border-luna-glow-blue transition-all duration-500 group"
              >
                <div className="w-12 h-12 border border-luna-glow-blue/50 flex items-center justify-center mb-6 group-hover:bg-luna-glow-blue/10 transition-colors">
                  <span className="font-heading text-2xl text-luna-glow-blue">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-white tracking-widest mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-luna-muted-steel text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4 tracking-widest">
              MEET THE TEAM
            </h2>
            <div className="w-24 h-1 bg-luna-glow-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-luna-royal-blue/30 bg-luna-deep-navy/40 backdrop-blur-sm hover:border-luna-glow-blue transition-all duration-500"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-luna-bg via-luna-bg/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-xl text-white tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-luna-glow-blue">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
