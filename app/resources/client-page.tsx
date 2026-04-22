'use client';

import { useMemo, useState } from 'react';
import { Mentor, mentors, resources } from './resources.constant';
import { Search } from 'lucide-react';
import { MentorCard } from './components/mentor-card';
import { ResourceRow } from './components/resource-row';

type Tab = 'mentors' | 'resources';

function groupByLetter(mentors: Mentor[]): Record<string, Mentor[]> {
  const sorted = [...mentors].sort((a, b) => a.name.localeCompare(b.name));
  return sorted.reduce<Record<string, Mentor[]>>((acc, mentor) => {
    const letter = mentor.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(mentor);
    return acc;
  }, {});
}

export function MentorsClientPage() {
  const [activeTab, setActiveTab] = useState<Tab>('mentors');
  const [search, setSearch] = useState('');

  const filteredMentors = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return mentors;
    return mentors.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.country.toLowerCase().includes(q) ||
        m.expertise.toLowerCase().includes(q),
    );
  }, [search]);

  const filteredResources = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return resources;
    return resources.filter((r) => r.title.toLowerCase().includes(q));
  }, [search]);

  const grouped = useMemo(() => groupByLetter(filteredMentors), [filteredMentors]);
  const letters = Object.keys(grouped).sort();

  return (
    <main className="min-h-screen bg-luna-bg pt-40 md:pt-50 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
            {activeTab === 'mentors' ? 'MENTOR INDEX' : 'RESOURCES'}
          </h1>
          <p className="font-body text-xl text-white max-w-3xl mx-auto">
            {activeTab === 'mentors'
              ? "Connect with Africa's leading space professionals and researchers."
              : 'Download guides, reports, and handbooks from the LUNA library.'}
          </p>
          <div className="w-30 h-1 bg-luna-glow-blue mx-auto mt-6" />
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="flex border border-luna-royal-blue/30 bg-luna-deep-navy/40 backdrop-blur-sm">
            {(['mentors', 'resources'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSearch('');
                }}
                className={`font-heading tracking-widest font-bold text-sm px-10 py-4 transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-luna-royal-blue/40  border-b-2 border-luna-glow-blue'
                    : 'text-white hover:text-white hover:bg-luna-deep-navy/60'
                }`}
              >
                {tab === 'mentors' ? 'MENTOR INDEX' : 'RESOURCES'}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-16">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-luna-glow-blue"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              activeTab === 'mentors'
                ? 'Search by name, country, or expertise...'
                : 'Search resources...'
            }
            className="w-full bg-luna-deep-navy/60 border border-luna-royal-blue/40 text-white font-body pl-12 pr-4 py-4 placeholder:text-white focus:outline-none focus:border-luna-glow-blue transition-colors duration-300"
          />
        </div>

        {activeTab === 'mentors' && (
          <div>
            {letters.length === 0 ? (
              <p className="text-center font-body text-white py-24">
                No mentors found for "{search}"
              </p>
            ) : (
              <div className="space-y-12">
                {letters.map((letter) => (
                  <div key={letter}>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-heading text-4xl text-white tracking-widest">
                        {letter}
                      </h2>
                      <div className="flex-1 h-px bg-luna-royal-blue/30" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {grouped[letter].map((mentor) => (
                        <MentorCard key={mentor.linkedin} mentor={mentor} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {activeTab === 'resources' && (
          <div>
            {filteredResources.length === 0 ? (
              <p className="text-center font-body text-white py-24">
                No resources found for "{search}"
              </p>
            ) : (
              <div className="divide-y divide-luna-royal-blue/20 border border-luna-royal-blue/30 bg-luna-deep-navy/40 backdrop-blur-sm">
                {filteredResources.map((resource, index) => (
                  <ResourceRow key={index} resource={resource} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
