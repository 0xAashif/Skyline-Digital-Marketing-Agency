import React, { useState } from 'react';
import { 
  Share2, 
  Video, 
  Target, 
  Globe, 
  Database, 
  MapPin, 
  ArrowRight, 
  Check, 
  Layers,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'social-media':
        return Share2;
      case 'content-creation':
        return Video;
      case 'paid-ads':
        return Target;
      case 'website-traffic':
        return Globe;
      case 'lead-generation':
        return Database;
      case 'google-business':
        return MapPin;
      default:
        return Layers;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-zinc-950 leading-tight">
            Complete Digital Marketing Solutions for Real Estate.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed text-balance">
            We help real estate brands build a strong online presence, capture high-intent inquiries from qualified buyers, and convert digital interest into verified on-site visits.
          </p>
        </div>

        {/* Clean CSS Grid of Border-Only Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative bg-white border border-zinc-200 rounded-2xl p-7 md:p-8 flex flex-col justify-between transition-all duration-200 hover:border-zinc-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-semibold text-zinc-400 group-hover:text-zinc-950 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold font-display text-zinc-950 group-hover:text-zinc-900 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-zinc-500 mt-1 mb-4">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-zinc-950 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="pt-5 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 font-medium">
                    {service.metrics}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedService(service);
                      onSelectService(service);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition-colors cursor-pointer"
                  >
                    <span>Scope Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deliverables Detail Modal */}
        {selectedService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-150"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white border border-zinc-200 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                <span>SERVICE SCOPE</span>
                <span>·</span>
                <span>{selectedService.number}</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-zinc-950 mb-1">
                {selectedService.title}
              </h3>
              <p className="text-xs font-mono text-zinc-500 mb-4">
                {selectedService.tagline}
              </p>

              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Scope of Work & Weekly Deliverables
                </div>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 text-xs text-zinc-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                  Channels Managed
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.channels.map((channel, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium text-zinc-700 bg-zinc-100 rounded-md"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="text-xs text-zinc-500 font-mono">
                  Impact: <strong className="text-zinc-900">{selectedService.metrics}</strong>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-zinc-950 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
