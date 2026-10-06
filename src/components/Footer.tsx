import React from 'react';
import { Building2, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200 pt-16 pb-12 text-zinc-600">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top CTA Banner inside footer */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Ready to Turn Properties Into Opportunities?
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white leading-tight">
              Request Your Free Project Marketing Audit.
            </h3>
            <p className="mt-2 text-zinc-400 text-sm max-w-xl">
              We analyze your current ads, creative assets, and micro-market competitors. Receive a customized growth roadmap in 48 hours.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-100 transition-colors shrink-0 shadow-lg cursor-pointer"
          >
            Schedule Discovery Call
          </button>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 text-zinc-950 font-bold text-lg mb-4">
              <div className="w-7 h-7 rounded-md bg-zinc-950 text-white flex items-center justify-center">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-bold text-zinc-950">
                Skyline<span className="text-zinc-400 font-light">Digital</span>
              </span>
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              Real Estate Digital Growth Partner. Engineering high-converting social, search, and lead generation systems for premium property developments.
            </p>
            <div className="text-xs font-mono text-zinc-400">
              Mumbai · Bengaluru · Dubai Desk
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4 font-mono">
              Core Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Social Media Management</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">High-Production Video & Reels</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Meta & Google Performance Ads</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Project Landing Pages & SEO</a></li>
              <li><a href="#services" className="hover:text-zinc-950 transition-colors">Instant WhatsApp CRM Integration</a></li>
            </ul>
          </div>

          {/* Agency System */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4 font-mono">
              The Methodology
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li><a href="#system" className="hover:text-zinc-950 transition-colors">The 5 Pillars of Real Estate</a></li>
              <li><a href="#system" className="hover:text-zinc-950 transition-colors">5-Step Conversion Pipeline</a></li>
              <li><a href="#case-studies" className="hover:text-zinc-950 transition-colors">Verified Developer Case Studies</a></li>
              <li><a href="#pricing" className="hover:text-zinc-950 transition-colors">Transparent Retainers & Pricing</a></li>
              <li><a href="#add-ons" className="hover:text-zinc-950 transition-colors">Modular Add-On Services</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4 font-mono">
              Direct Inquiries
            </div>
            <div className="space-y-3 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="font-mono">growth@skylinedigital.agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span className="font-mono">+91 98200 48192 (Mon-Sat, 9AM-8PM)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>Bandra-Kurla Complex (BKC), Mumbai, MH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Skyline Digital Marketing. All rights reserved.</span>
            <span>·</span>
            <span>Ad spend is separate. Minimum commitment: 3 months.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
