import { Podcast } from '@/components/podcasts';
import { LunaAcronym } from '../components/acronyms';
import { Events } from '../components/events';
import { Hero } from '../components/hero';
import { MissionVision } from '../components/mission';
import { Newsletter } from '../components/newsletter';
import { Programs } from '../components/programs';
import { Metadata } from 'next';
import { YouTube } from '@/components/youtube';

export const metadata: Metadata = {
  title: 'L.U.N.A',
  description: "Africa's journey to the stars.",
};
export default function Home() {
  return (
    <div className="min-h-screen bg-luna-bg text-luna-ice-white font-body selection:bg-luna-muted-steel selection:text-black">
      <main>
        <Hero />
        <LunaAcronym />
        <MissionVision />
        <Programs />
        <Events />
        <YouTube />
        <Podcast />
        <Newsletter />
      </main>
    </div>
  );
}
