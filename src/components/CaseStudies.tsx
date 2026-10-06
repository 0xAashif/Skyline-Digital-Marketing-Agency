import React from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { Building, MapPin, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  return (
    <section id="case-studies" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3">
              Proof of Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-zinc-950 leading-tight">
              Real Estate Case Studies with Quantified Outcomes.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600">
              No vanity follower counts. We measure success strictly by cost per qualified inquiry, verified sales gallery visits, and total inventory absorbed.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 hover:text-zinc-600 transition-colors uppercase tracking-wider font-mono self-start md:self-auto cursor-pointer"
          >
            <span>Request Full Portfolio PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#FAFAFA] border border-zinc-200 rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-2xs"
            >
              <div>
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{study.location}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-700">
                    {study.propertySegment}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-zinc-950 mb-1">
                  {study.project}
                </h3>
                <div className="text-xs text-zinc-500 mb-6 font-medium">
                  {study.developerType}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-8 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-zinc-900 block mb-1">The Friction:</span>
                    <p className="text-zinc-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-900 block mb-1">The Skyline Intervention:</span>
                    <p className="text-zinc-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Verified Quantified Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-zinc-200 mb-8">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <div className="text-lg sm:text-xl font-bold font-mono text-zinc-950 tabular-nums">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributable Testimonial Quote */}
              <div className="pt-6 border-t border-zinc-200/80">
                <blockquote className="text-xs sm:text-sm text-zinc-700 italic mb-4 leading-relaxed">
                  "{study.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-xs text-zinc-950">
                      {study.testimonial.author}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {study.testimonial.role}, {study.testimonial.company}
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
