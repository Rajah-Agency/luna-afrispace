import { Podcast } from 'lucide-react';
import { LunaAcronym } from './components/acronyms';
import { Events } from './components/events';
import { Hero } from './components/hero';
import { MissionVision } from './components/mission';
import { Newsletter } from './components/newsletter';
import { Programs } from './components/programs';

export default function Home() {
  return (
    <div className="min-h-screen bg-luna-bg text-luna-ice-white font-body selection:bg-luna-muted-steel selection:text-black">
      <main>
        <Hero />
        <LunaAcronym />
        <MissionVision />
        <Programs />
        <Events />
        <Podcast />
        <Newsletter />
      </main>
    </div>
  );
}
