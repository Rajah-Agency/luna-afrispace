import { Metadata } from 'next';
import Image from 'next/image';
import { sdgs } from '../constant';

export const metadata: Metadata = {
  title: 'SDGs | L.U.N.A',
  description:
    'L.U.N.A aligns its mission with the United Nations Sustainable Development Goals.',
};

export default function SDGs() {
  return (
    <main className="pt-40 md:pt-50 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow normal-case">
            Sustainable Development Goals (SDGs)
          </h1>
          <p className="font-body text-xl text-white max-w-3xl mx-auto mb-14">
            L.U.N.A aligns its mission with the United Nations (UN) Sustainable
            Development Goals, ensuring that Africa's journey to the stars uplifts
            communities and creates lasting impact on the ground.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="flex flex-col items-center gap-3">
                <Image
                  src={sdg.image}
                  width={160}
                  height={160}
                  alt={`SDG ${sdg.number}`}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
                <span className="font-heading text-sm tracking-widest text-white text-center">
                  {sdg.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SDG Cards */}
        <div className="max-w-5xl mx-auto space-y-16">
          {sdgs.map((sdg, index) => (
            <div
              key={sdg.number}
              className="relative border border-luna-royal-blue/30 bg-luna-deep-navy/20 backdrop-blur-sm overflow-hidden group hover:border-luna-glow-blue/50 transition-all duration-500"
            >
              {/* SDG Number Accent */}
              <div
                className="absolute top-0 left-0 w-2 h-full"
                style={{
                  backgroundColor: sdg.color,
                }}
              />

              <div className="p-8 md:p-12 pl-10 md:pl-16">
                <div className="flex items-center mb-6">
                  <div
                    className="w-14 h-14 flex items-center justify-center font-heading text-2xl text-white font-bold mr-6 shrink-0"
                    style={{
                      backgroundColor: sdg.color,
                    }}
                  >
                    {sdg.number}
                  </div>
                  <div>
                    <span className="font-heading text-sm tracking-widest text-white">
                      SDG {sdg.number}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl text-white tracking-wider">
                      {sdg.title}
                    </h2>
                  </div>
                </div>

                <p className="font-body text-lg text-white leading-relaxed mb-8">
                  {sdg.description}
                </p>

                <div>
                  <h3 className="font-heading text-sm tracking-widest text-luna-glow-blue mb-4">
                    OUR GOALS
                  </h3>
                  <ul className="space-y-3">
                    {sdg.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="w-2 h-2 rounded-full mt-2 mr-4 shrink-0"
                          style={{
                            backgroundColor: sdg.color,
                          }}
                        />
                        <span className="font-body text-white">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
