import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-luna-bg border-t border-luna-royal-blue/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#" className="block mb-6">
              <img
                src="https://cdn.magicpatterns.com/uploads/ndVmFYcsDRbT8rzhYhHkpQ/IMG_5833.png"
                alt="LUNA"
                className="h-40 md:h-48 lg:h-56 opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="font-body text-luna-muted-steel mb-6 text-sm">
              Loapi Unified Nexus AfriSpace Agency. Connecting Africa to the global space
              race.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Programs Col */}
          <div>
            <h4 className="font-heading tracking-widest text-luna-ice-white mb-6">
              PROGRAMS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Student Launchpad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Research Orbit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Professional Ascent
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Open Cosmos
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading tracking-widest text-luna-ice-white mb-6">
              Social
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/newsletters"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/lunaAFRISPACE"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/lunafrispace-agency"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1EEB18BG59/?mibextid=wwXIfr"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lunaafrispace/"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div>
            <h4 className="font-heading tracking-widest text-luna-ice-white mb-6">
              CONNECT
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-body text-sm text-luna-muted-steel hover:text-luna-glow-blue transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luna-royal-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-luna-muted-steel/70 text-center md:text-left">
            © 2026 LUNA — Loapi Unified Nexus AfriSpace Agency. All rights reserved.
          </p>
          <p className="font-heading tracking-widest text-sm text-luna-glow-blue text-center md:text-right">
            BUILT FOR THE STARS. ROOTED IN AFRICA.
          </p>
        </div>
      </div>
    </footer>
  );
}
