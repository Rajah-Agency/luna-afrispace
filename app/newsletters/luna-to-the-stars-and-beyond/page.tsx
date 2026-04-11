import { ArrowLeftIcon, CalendarIcon, TagIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function DefaultArticleContent() {
  return (
    <>
      {/* Introduction */}
      <h2 className="font-heading text-3xl md:text-4xl text-white tracking-wider mb-6">
        October Space Week Recap + African Space Highlights
      </h2>

      <p className="font-body text-lg text-white leading-relaxed mb-8">
        October marked World Space Week, and at L.U.N.A. (Loapi Unified Nexus Afrispace
        Agency), we joined the celebration in our own grounded yet cosmic way by expanding
        knowledge, community, and vision. In case you missed last October's publication,
        you can find it here:{' '}
        <a
          href="https://lunaafrispace.org/2025/10/22/october-the-month-for-space-%f0%9f%9b%b0%ef%b8%8f/"
          className="text-blue-500 underline"
        >
          Link
        </a>
      </p>

      <p className="font-body text-lg text-white leading-relaxed mb-12">
        This month's L.U.N.A. Space Dialogue Webinar brought together learners, engineers,
        policymakers, dreamers, and builders across Africa and the diaspora. Together, we
        explored what it means for Africa not just to participate in space, but to lead in
        shaping its future. With the theme:{' '}
        <strong className="font-heading text-luna-glow-blue">
          “Africa's Rising Influence: Pioneering Innovation and Shaping Global Space
          Policy.
        </strong>
        ”
      </p>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        🌍 Quick Meeting Recap
      </h3>

      <p className="font-body text-lg text-white leading-relaxed mb-8">
        We opened with warm introductions and light-hearted weather conversations from
        Paris to Cape Town (yes, even penguins were mentioned 🐧). From there, we went
        deep: What is L.U.N.A.? L.U.N.A. is committed to building African capacity in
        space education, research, compliance, and industry development. We aim to: 1.
        Equip Africans with practical space-related skills 2. Promote policy and
        governance literacy in space activities 3. Encourage African-led innovation and
        collaboration Key Speakers Natasha Van Rooyen—Standards & Compliance Specialist,
        leading the African Space Identity Series and developing the Space Industry
        Dynamics Index. Ian Elly Ssali Kiggundu—space law specialist focusing on
        sustainable governance, ESG, and legal frameworks shaping Africa’s presence in
        orbit and beyond.
      </p>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        🚀 Main Themes Discussed
      </h3>

      <table className="table-auto w-full my-3 border border-white/30">
        <tbody>
          <tr className="border border-white/30">
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Focus Area
            </td>
            <td className="font-body text-lg text-white p-3 border border-white/30">
              What We Explored
            </td>
          </tr>
          <tr className="border border-white/30">
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Africa in Global Space Governance
            </td>
            <td className="font-body text-lg text-white p-3 border border-white/30">
              The rise of Africa's voice in a new multipolar space world.
            </td>
          </tr>
          <tr className="border border-white/30">
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Space Policy &amp; Legal Frameworks
            </td>
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Why compliance, treaties, national laws &amp; ESG matter.
            </td>
          </tr>
          <tr className="border border-white/30">
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Infrastructure &amp; Launch Ambitions
            </td>
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Platforms in Kenya, opportunities in Djibouti, and growing satellite
              programs.
            </td>
          </tr>
          <tr className="border border-white/30">
            <td className="font-body text-lg text-white p-3 border border-white/30">
              Capacity Building &amp; Education
            </td>
            <td className="font-body text-lg text-white p-3 border border-white/30">
              The power of mentorship, technical committees, and interdisciplinary
              learning.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="font-body text-lg text-white leading-relaxed mb-8">
        We also dived into:
      </p>

      <ul className="font-body text-lg text-white leading-relaxed mb-8 list-disc list-inside space-y-2">
        <li>Space debris mitigation standards (ISO 24113, IADC guidelines)</li>
        <li>The importance of transparent and ethical procurement</li>
        <li>Africa's demographic advantage and talent pipeline</li>
        <li>The need for Africans to tell our own story in space 🌍✨</li>
      </ul>

      <figure className="mb-12">
        <Image
          src="/images/blogs/luna-to-the-stars-and-beyond/webinar.png"
          alt="Luna to the Stars and Beyond"
          width={1920}
          height={1080}
          className="w-full aspect-21/9 object-cover border border-luna-royal-blue/30"
        />
        <figcaption className="font-body text-sm text-white/70 mt-3 text-center italic">
          Picture Snippets
        </figcaption>
      </figure>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        🎮 The Interactive Fun Part
      </h3>

      <p className="font-body text-lg text-white leading-relaxed mb-8">
        We tried something new: a Menti Quiz Icebreaker 🥳😊👌🥳. Let’s just say…
        competitive spirit was very alive. Shoutout to everyone who surprised themselves
        with their knowledge and quick thinking 💫
      </p>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        📺 Replay the Webinar
      </h3>

      <p className="font-body text-lg text-white leading-relaxed mb-8">
        Missed it? No worries: catch the{' '}
        <a
          className="text-blue-500 underline"
          href="https://erau.zoom.us/rec/share/AC4XUexw_KLIiNcLl7aAO2kVa-d198TvLYcYiNXGKVpCsPq7k-pLfOjlCZLpXg7C.CNUOkVWD8axnNNMC"
        >
          REPLAY
        </a>
      </p>
      {/* Section 2 */}
      <h2 className="font-heading text-3xl md:text-4xl text-white tracking-wider mb-6">
        🌟 African Space News Highlight of the Month
      </h2>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        🇦🇴 Angola Expands Its Space Leadership
      </h3>

      <figure className="mb-12">
        <Image
          src="/images/blogs/luna-to-the-stars-and-beyond/GGPEN.jpg"
          alt="Luna to the Stars and Beyond"
          width={1920}
          height={1080}
          className="w-full aspect-21/9 object-cover border border-luna-royal-blue/30"
        />
        <figcaption className="font-body text-sm text-white/70 mt-3 text-center italic">
          Dr. Zolana Joao, D.Eng (Left), signing Memorandum of Understanding between
          <a
            href="https://www.linkedin.com/in/ggpen-angola-10a2811b5/"
            className="text-blue-500 underline"
          >
            {' '}
            GGPEN Angola{' '}
          </a>
          and{' '}
          <a
            href="https://www.linkedin.com/company/ses/"
            className="text-blue-500 underline"
          >
            SES Satellites
          </a>
          , one of the world’s leading satellite operators. Source:
          <a
            className="text-blue-500 underline"
            href="https://www.linkedin.com/posts/zolanajoao_minttics-angosat2-africaconnectivity-activity-7388932472325079040-3MEv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFftBc8BiwbRZNQNGnztavsCKMsV1S6volg"
          >
            {' '}
            Zolana Joao , D.Eng
          </a>
        </figcaption>
      </figure>

      <p className="font-body text-lg text-white leading-relaxed mb-4">
        This October, GGPEN (Angola’s National Space Program Management Office) signed an
        MoU with SES Satellites in Luxembourg, intending to advance satellite operations,
        training, and connectivity expansion.
      </p>

      <p className="font-body text-lg text-white leading-relaxed mb-4">
        This partnership strengthens:
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        ANGOSAT-2 satellite operations
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        The Connecta Angola digital inclusion initiative
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        Innovation capacity and technical training for local talent
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        Already, 360,000+ people across 14 provinces benefit from telephone and internet
        services, and the ripple effect is expanding beyond Angola’s borders.
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        This is Africa designing African solutions.
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        This is space serving people, not the other way around. 🌍🚀
      </p>
      <p className="font-body text-lg text-white leading-relaxed mb-4">
        Read more:
        <a
          className="text-blue-500 underline"
          href="https://spaceinafrica.com/2025/10/29/ggpen-and-ses-satellites-sign-mou-to-advance-angolas-space-programme/"
        >
          {' '}
          Here
        </a>
      </p>

      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        🤝 Community Action Points
      </h3>

      <p className="font-body text-lg text-white leading-11 mb-4">
        Here’s how you can stay engaged: <br />
        Follow L.U.N.A. on LinkedIn, Instagram & Facebook <br />
        Join the conversation using #LUNAAfrospace2025 <br />
        Connect with our speakers on LinkedIn <br />
        Explore mentorship by reaching out to technical committees in your country <br />
        If you’re building something &gt; start the conversation. Create your group,
        invite experts, and share knowledge.
        <br />
        Africa rises when Africans collaborate.
      </p>
      <h3 className="font-heading text-3xl md:text-2xl text-white tracking-wider mb-6">
        ✨ Closing Note
      </h3>

      <p className="font-body text-lg text-white leading-11 mb-4">
        October reminded us that Africa is not behind; we are simply entering the room on
        our own terms.
        <br />
        We are not spectators. <br />
        We are the architects. <br />
        And we are just getting started. <br />
        Stay tuned for the November Space Dialogue Series; updates are coming soon. <br />
        Until then, keep imagining, keep building, and keep reaching for the skies.
      </p>
    </>
  );
}
export default function NewsletterDetail() {
  // if (!newsletter) {
  //   return (
  //     <main className="pt-40 md:pt-50 pb-24 min-h-screen">
  //       <div className="container mx-auto px-6 text-center">
  //         <h1 className="font-heading text-5xl text-white mb-6 tracking-widest">
  //           TRANSMISSION NOT FOUND
  //         </h1>
  //         <p className="font-body text-xl text-white mb-8">
  //           This newsletter could not be located in our archives.
  //         </p>
  //         <Link
  //           href="/newsletters"
  //           className="inline-flex items-center text-luna-glow-blue font-heading tracking-widest hover:text-white transition-colors"
  //         >
  //           <ArrowLeftIcon size={16} className="mr-2" /> BACK TO MISSION LOGS
  //         </Link>
  //       </div>
  //     </main>
  //   );
  // }
  return (
    <main className="pt-40 pb-24 min-h-screen mx-auto px-6 max-w-3xl ">
      <Image
        width={1920}
        height={1080}
        src="/images/blogs/stars-and-beyond.webp"
        alt="Luna Stars and Beyond"
        className="w-full h-full object-cover"
      />

      {/* Article Header */}
      <div className="container mt-12">
        <Link
          href="/newsletters"
          className="inline-flex items-center text-luna-glow-blue font-heading tracking-widest text-sm mb-8 hover:text-white transition-colors"
        >
          <ArrowLeftIcon size={14} className="mr-2" /> BACK TO MISSION LOGS
        </Link>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-wider mb-6 text-glow">
          L.U.N.A. – To The Stars and Beyond ✨
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm mb-12 pb-8 border-b border-luna-royal-blue/30">
          <span className="flex items-center text-white font-body">
            <CalendarIcon size={14} className="mr-2 text-luna-glow-blue" />
            <span>October 31 , 2025</span>
          </span>
          <span className="flex items-center text-white font-body">
            <TagIcon size={14} className="mr-2 text-luna-glow-blue" /> Newsletters
          </span>
          <span className="flex items-center text-white font-body">
            <UserIcon size={14} className="mr-2 text-luna-glow-blue" /> admin
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-6 max-w-4xl">
        <DefaultArticleContent />
      </article>

      {/* Bottom Navigation */}
      <div className="container mx-auto px-6 max-w-4xl mt-16 pt-8 border-t border-luna-royal-blue/30">
        <Link
          href="/newsletters"
          className="inline-flex items-center text-luna-glow-blue font-heading tracking-widest hover:text-white transition-colors"
        >
          <ArrowLeftIcon size={16} className="mr-2" /> BACK TO ALL MISSION LOGS
        </Link>
      </div>
    </main>
  );
}
