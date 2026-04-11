import Image from 'next/image';
import { MissionVision } from '../../components/mission';
import { team } from '../constant';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | LUNA',
  description: 'Learn about Loapi Unified Nexus Afrispace.',
};

export default function About() {
  return (
    <main className="pt-40 md:pt-50 pb-24">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
          ABOUT LUNA
        </h1>
        <p className="font-body text-xl text-white max-w-3xl mx-auto">
          Provide access to internships and space programs for experts and academia,
          governemnt researchers ,students and knowedge through innovative ideas.
        </p>
      </div>

      <MissionVision />

      {/* Meet the Team */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading  font-semibold text-[2.7rem] md:text-5xl text-white mb-4 tracking-widest">
              MEET THE TEAM
            </h2>
            <div className="w-30 h-1 bg-luna-glow-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-luna-royal-blue/30 bg-luna-deep-navy/40 backdrop-blur-sm hover:border-luna-glow-blue transition-all duration-500"
              >
                <div className="aspect-3/4 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110"
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
