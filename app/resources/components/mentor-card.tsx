import { FaLinkedin } from 'react-icons/fa6';
import { Mentor } from '../resources.constant';
import { Mail } from 'lucide-react';

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="group border border-luna-royal-blue/30 bg-luna-deep-navy/40 backdrop-blur-sm hover:border-luna-glow-blue transition-all duration-500 p-6">
      <div className="flex flex-col h-full">
        {/* Name + Country */}
        <div className="mb-4">
          <h3 className="font-heading text-xl text-white tracking-wider mb-1 group-hover:text-luna-glow-blue transition-colors duration-300">
            {mentor.name}
          </h3>
          <p className="font-body text-sm">{mentor.country}</p>
        </div>

        {/* Expertise */}
        <p className="font-body text-sm  mb-6 flex-1">{mentor.expertise}</p>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-luna-royal-blue/20">
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-heading text-xs tracking-widest  hover:text-luna-glow-blue transition-colors duration-300"
          >
            <FaLinkedin size={16} />
            LINKEDIN
          </a>
          {mentor.email && (
            <a
              href={`mailto:${mentor.email}`}
              className="flex items-center gap-2 font-heading text-xs tracking-widest  hover:text-luna-glow-blue transition-colors duration-300"
            >
              <Mail size={16} />
              EMAIL
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
