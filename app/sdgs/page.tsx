export default function SDGs() {
  const sdgs = [
    {
      number: 4,
      title: 'QUALITY EDUCATION',
      color: '#C5192D',
      description:
        'We provide accessible space education programs across Africa, connecting students to world-class researchers and institutions. Through our Student Launchpad and Research Orbit programs, we ensure inclusive and equitable quality education in STEM and space sciences.',
      initiatives: [
        'Student Launchpad mentorship program across 15+ African nations',
        'Free online courses in astrodynamics, satellite engineering, and remote sensing',
        'University partnerships for hands-on research opportunities',
      ],
    },
    {
      number: 5,
      title: 'GENDER EQUALITY',
      color: '#FF3A21',
      description:
        'LUNA is committed to achieving gender equality in the African space sector. We actively recruit, mentor, and elevate women and girls in aerospace, ensuring they have equal opportunities to lead and innovate.',
      initiatives: [
        'Women in African Aerospace annual summit and fellowship',
        '50% scholarship allocation for women in all LUNA programs',
        'Mentorship network connecting female professionals across the continent',
      ],
    },
    {
      number: 9,
      title: 'INDUSTRY, INNOVATION & INFRASTRUCTURE',
      color: '#FD6925',
      description:
        'We build resilient space infrastructure across Africa, promoting inclusive and sustainable industrialization. From satellite communication networks to launch facilities, LUNA drives innovation that benefits the entire continent.',
      initiatives: [
        'Development of equatorial launch capabilities',
        'Pan-African satellite constellation for communications and Earth observation',
        'Open-source space technology incubator for African startups',
      ],
    },
    {
      number: 11,
      title: 'SUSTAINABLE CITIES & COMMUNITIES',
      color: '#FD9D24',
      description:
        'Our Earth observation and satellite programs directly support making African cities and communities more inclusive, safe, resilient, and sustainable through space-derived data and technology.',
      initiatives: [
        'Satellite-based urban planning and disaster monitoring tools',
        'Climate data services for vulnerable coastal and rural communities',
        'Smart city infrastructure powered by space technology',
      ],
    },
  ];
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
            ABOUT SDGs
          </h1>
          <p className="font-body text-xl text-luna-muted-steel max-w-3xl mx-auto mb-8">
            LUNA aligns its mission with the United Nations Sustainable Development Goals,
            ensuring that Africa's journey to the stars uplifts communities and creates
            lasting impact on the ground.
          </p>
          <div className="flex items-center justify-center space-x-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center font-heading text-2xl md:text-3xl text-white font-bold"
                style={{
                  backgroundColor: sdg.color,
                }}
              >
                {sdg.number}
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
                    <span className="font-heading text-sm tracking-widest text-luna-muted-steel">
                      SDG {sdg.number}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl text-white tracking-wider">
                      {sdg.title}
                    </h2>
                  </div>
                </div>

                <p className="font-body text-lg text-luna-muted-steel leading-relaxed mb-8">
                  {sdg.description}
                </p>

                <div>
                  <h3 className="font-heading text-sm tracking-widest text-luna-glow-blue mb-4">
                    OUR INITIATIVES
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
