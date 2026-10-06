import React, { useState } from 'react';
import { 
  ArrowRight, 
  Building2, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  Target,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { CONTENT_PILLARS, PROCESS_STEPS } from '../data/agencyData';

export const ContentSystem: React.FC = () => {
  const [activePillar, setActivePillar] = useState(CONTENT_PILLARS[0]);
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS[0]);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'property':
        return Building2;
      case 'locality':
        return MapPin;
      case 'education':
        return GraduationCap;
      case 'trust':
        return ShieldCheck;
      case 'lead-gen':
        return Target;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="system" className="py-24 md:py-32 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Agency Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-zinc-950 leading-tight">
            Strategic Content. <br />
            Qualified Audience. Better Enquiries.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-zinc-600 leading-relaxed text-balance">
            Generic property tours don’t sell homes. We operate on a proven 5-Pillar Content System and a 5-step conversion pipeline built exclusively for high-ticket residential & commercial real estate.
          </p>
        </div>

        {/* 1. The 5 Pillars of Real Estate Content */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-display text-zinc-950">
              The 5 Pillars of Real Estate Content
            </h3>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Click pillar to inspect strategy
            </span>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-zinc-100 rounded-xl mb-8">
            {CONTENT_PILLARS.map((pillar) => {
              const Icon = getPillarIcon(pillar.id);
              const isSelected = activePillar.id === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar)}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-zinc-950' : 'text-zinc-400'}`} />
                  <span className="truncate">{pillar.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Inspector Card */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 md:p-10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-3">
                  <span className="font-semibold text-zinc-900 uppercase">Pillar Focus:</span>
                  <span>{activePillar.focus}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 mb-4 leading-snug">
                  {activePillar.headline}
                </h4>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                  {activePillar.description}
                </p>

                <div className="p-4 rounded-xl bg-white border border-zinc-200/90 shadow-2xs">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Sample Content Creative Script</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-800 italic">
                    "{activePillar.exampleCreative}"
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase mb-2">
                    Buyer Psychology Targeted
                  </div>
                  <div className="text-lg font-bold font-display text-zinc-950 mb-4">
                    {activePillar.buyerPsychology}
                  </div>
                  <div className="text-xs text-zinc-600 leading-relaxed space-y-3">
                    <p>
                      Rather than pushing immediate hard-sells, this pillar systematically dismantles buyer friction at this exact stage of the evaluation journey.
                    </p>
                    <p className="font-medium text-zinc-800">
                      Primary Channel: <span className="font-mono text-xs">Instagram Reels, YouTube Shorts, & Meta Carousel Ads</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span>Frequency: 3–4 assets / mo</span>
                  <span className="font-mono text-zinc-900 font-semibold">High Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. The 5-Step Process Flow with Arrow Icons */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              End-to-End Pipeline
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-zinc-950">
              The 5-Step Process Flow
            </h3>
            <p className="text-sm text-zinc-600 mt-2 max-w-2xl">
              From the initial site shoot to an in-person site visit booked at your sales gallery. Every step is measured and tracked.
            </p>
          </div>

          {/* Horizontal Flow Timeline with Arrow Icons */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-8">
            {PROCESS_STEPS.map((stepItem, index) => {
              const isSelected = activeStep.step === stepItem.step;
              return (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(stepItem)}
                  className={`group relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                      : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-zinc-400' : 'text-zinc-400'}`}>
                        Step 0{stepItem.step}
                      </span>
                      {index < PROCESS_STEPS.length - 1 && (
                        <ArrowRight className={`hidden md:block w-3.5 h-3.5 absolute -right-3 top-1/2 -translate-y-1/2 z-10 ${isSelected ? 'text-zinc-950' : 'text-zinc-300'}`} />
                      )}
                    </div>
                    <div className="font-display font-bold text-sm mb-1 leading-snug">
                      {stepItem.title}
                    </div>
                    <div className={`text-[11px] font-mono ${isSelected ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {stepItem.duration}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-zinc-200/40 text-[11px] truncate">
                    <span className={isSelected ? 'text-zinc-300' : 'text-zinc-500'}>
                      {stepItem.output}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep Dive Card */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
              <div>
                <span className="text-xs font-mono text-zinc-400 font-semibold uppercase">
                  ACTIVE PHASE 0{activeStep.step}
                </span>
                <h4 className="text-2xl font-display font-bold text-zinc-950 mt-1">
                  {activeStep.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-mono font-medium text-zinc-700">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  Turnaround: {activeStep.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 text-white text-xs font-mono font-medium">
                  Guaranteed Deliverable
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Strategic Scope & Execution
                </div>
                <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                  {activeStep.description}
                </p>
                <div className="p-3.5 rounded-xl bg-white border border-zinc-200 text-xs">
                  <span className="text-zinc-500 font-mono">Stage Output: </span>
                  <strong className="text-zinc-900 font-semibold">{activeStep.output}</strong>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                  Key Action Items Handled By Skyline
                </div>
                <div className="space-y-2">
                  {activeStep.actionItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
