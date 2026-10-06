import React, { useState } from 'react';
import { ChevronDown, Plus, CheckCircle2, ShieldAlert } from 'lucide-react';
import { ADD_ONS_DATA } from '../data/agencyData';
import { AddOnItem } from '../types';

interface AddOnsProps {
  onOpenBooking: () => void;
}

export const AddOnsAccordion: React.FC<AddOnsProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('meta-ads-management');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="add-ons" className="py-24 md:py-32 bg-white border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Modular Extensions
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-zinc-950">
            A La Carte & Add-On Services.
          </h2>
          <p className="mt-4 text-base text-zinc-600 max-w-xl mx-auto">
            Scale your campaign capabilities as your project phases evolve. Transparent standalone pricing with zero lock-in markups.
          </p>
        </div>

        {/* Elegant Minimalist Accordion */}
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {ADD_ONS_DATA.map((addon) => {
            const isOpen = openId === addon.id;
            return (
              <div key={addon.id} className="py-5 transition-colors">
                <button
                  onClick={() => toggleAccordion(addon.id)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 pr-4">
                    <span className="text-base sm:text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                      {addon.name}
                    </span>
                    <span className="inline-block sm:hidden text-sm font-mono font-bold text-zinc-900">
                      {addon.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline text-base font-mono font-bold text-zinc-900">
                      {addon.price}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:border-zinc-400 group-hover:text-zinc-900 transition-all ${
                        isOpen ? 'rotate-180 bg-zinc-950 text-white border-zinc-950' : 'bg-white'
                      }`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : ''}`} />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-3 text-xs sm:text-sm text-zinc-600 animate-in fade-in duration-200">
                    <p className="mb-4 leading-relaxed text-zinc-700">
                      {addon.description}
                    </p>
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-4 mb-4">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-2.5">
                        Deliverables Scope
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-800">
                        {addon.includedScope.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-zinc-400">
                        Billing: {addon.billingType === 'one-time' ? 'One-time fee upon setup' : 'Monthly recurring add-on'}
                      </span>
                      <button
                        onClick={onOpenBooking}
                        className="px-3.5 py-1.5 rounded-lg bg-zinc-950 text-white font-medium text-xs hover:bg-zinc-800 transition-colors"
                      >
                        Enquire for Project
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mandatory Bottom Terms */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-zinc-400 tracking-tight">
            Ad spend is separate. Minimum commitment: 3 months.
          </p>
        </div>
      </div>
    </section>
  );
};
