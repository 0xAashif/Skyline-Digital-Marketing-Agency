import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (prefillTier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Content System', href: '#system' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Add-Ons', href: '#add-ons' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-zinc-950 font-bold tracking-tight text-xl focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center font-display text-base transition-transform group-hover:scale-105">
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold tracking-tight text-lg md:text-xl text-zinc-950">
            Skyline<span className="text-zinc-400 font-light">Digital</span>
          </span>
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-zinc-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-zinc-950 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.12)] whitespace-nowrap active:scale-[0.98]"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-zinc-950 rounded-md"
          >
            Audit
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-base font-medium text-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-950 transition-colors border-b border-zinc-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-zinc-950 rounded-lg shadow-sm"
              >
                Book Free Growth Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
