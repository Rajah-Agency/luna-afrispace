'use client';
import { useEffect, useRef, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { navLinks } from '@/app/constant';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 10) {
        setVisible(true);
        setScrolled(false);
      } else if (current > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
        setScrolled(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'bg-luna-deep-navy/90 backdrop-blur-md border-b border-luna-royal-blue/30' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/luna-logo.png"
            width={120}
            height={120}
            alt="LUNA"
            className="h-32 md:h-40"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-heading tracking-wider text-white hover:text-luna-ice-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-luna-ice-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <XIcon size={32} /> : <MenuIcon size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-luna-deep-navy border-b border-luna-royal-blue/30 py-4 px-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-heading tracking-wider text-white hover:text-luna-ice-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
