export default function PastEvents() {
  const events = [
    {
      id: 1,
      title: 'African Space Tech Summit 2025',
      date: 'November 12-14, 2025',
      location: 'Kigali, Rwanda',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    },
    {
      id: 2,
      title: 'LUNA Satellite Launch Viewing',
      date: 'August 05, 2025',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1200&q=80',
    },
    {
      id: 3,
      title: 'Student Rocketry Competition Finals',
      date: 'May 20, 2025',
      location: 'Cape Town, South Africa',
      image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=1200&q=80',
    },
    {
      id: 4,
      title: 'Women in African Aerospace',
      date: 'March 08, 2025',
      location: 'Nairobi, Kenya',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    },
  ];
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
            MISSION ARCHIVES
          </h1>
          <p className="font-body text-xl text-luna-muted-steel max-w-2xl mx-auto">
            Explore our past events, summits, and milestones in the African space journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative overflow-hidden border border-luna-royal-blue/30 bg-luna-deep-navy/20"
            >
              <div className="aspect-16/10 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-luna-bg via-luna-bg/60 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="font-heading text-sm tracking-widest text-luna-glow-blue">
                      {event.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-luna-muted-steel"></span>
                    <span className="font-heading text-sm tracking-widest text-luna-muted-steel">
                      {event.location}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl text-white mb-6">{event.title}</h2>
                  <button className="px-6 py-3 border border-luna-royal-blue text-white font-heading tracking-widest text-sm hover:bg-luna-glow-blue hover:border-luna-glow-blue hover:text-luna-bg transition-all duration-300 opacity-0 group-hover:opacity-100">
                    VIEW EVENT LOG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
