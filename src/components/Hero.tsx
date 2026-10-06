import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  MessageSquare, 
  PhoneCall, 
  Eye, 
  Building, 
  Compass, 
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'creative' | 'crm'>('funnel');

  const liveEnquiries = [
    {
      name: 'Dr. Sameer Verma',
      project: 'The Sovereign Sky Residences (4BHK)',
      type: 'Doctor / Ultra-HNI',
      action: 'Requested Private Site Visit',
      time: '3m ago',
      channel: 'WhatsApp CRM',
      budget: '₹9.5 Cr',
    },
    {
      name: 'Rajesh & Malini Iyer',
      project: 'Greenwood Forest Villas',
      type: 'Tech VP, Sarjapur',
      action: 'Downloaded 3D Masterplan',
      time: '11m ago',
      channel: 'Meta Instant Form',
      budget: '₹3.8 Cr',
    },
    {
      name: 'Karan Malhotra (NRI - Dubai)',
      project: 'Horizon Bayfront Penthouses',
      type: 'NRI Investor',
      action: 'Booked Video Walkthrough Call',
      time: '24m ago',
      channel: 'Google Search Ad',
      budget: '₹14.2 Cr',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFA] bg-grid-pattern">
      {/* Ambient background blur circles */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-100/40 via-zinc-100/60 to-transparent blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Tagline Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-zinc-200/80 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-xs font-medium text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Exclusively for Real Estate Developers & Top Brokers</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>Strategy</span>
            <span className="text-zinc-300">|</span>
            <span>Content</span>
            <span className="text-zinc-300">|</span>
            <span>Ads</span>
            <span className="text-zinc-300">|</span>
            <span>Leads</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-zinc-950 leading-[1.06] text-balance">
            Real Estate <br className="hidden sm:block" />
            <span className="text-zinc-900 underline decoration-zinc-300 underline-offset-8 decoration-2">
              Digital Growth Partner.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-7 text-lg sm:text-xl md:text-2xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto text-balance">
            More Visibility. More Buyers. More Enquiries. <br className="hidden sm:inline" />
            Let's turn your properties into opportunities.
          </p>
        </div>

        {/* Tags / Pillars Pills */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          {['Strategy', 'Content', 'Ads', 'Leads'].map((tag, idx) => (
            <span
              key={tag}
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-zinc-700 bg-white border border-zinc-200 px-3.5 py-1.5 rounded-full shadow-xs hover:border-zinc-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-zinc-950 rounded-xl hover:bg-zinc-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] group cursor-pointer"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#system"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-zinc-800 bg-white border border-zinc-200 rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200 shadow-2xs"
          >
            <span>Explore The 5-Pillar System</span>
          </a>
        </div>

        {/* Live Interactive Real Estate Growth Engine Cockpit */}
        <div className="max-w-5xl mx-auto bg-white border border-zinc-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-zinc-50 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              </div>
              <span className="text-zinc-500 font-mono ml-2">skyline-growth-engine // live-campaign-preview</span>
            </div>

            {/* Interactive Mode Switcher */}
            <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('funnel')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  activeTab === 'funnel'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Lead Stream
              </button>
              <button
                onClick={() => setActiveTab('creative')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  activeTab === 'creative'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Campaign Creative
              </button>
              <button
                onClick={() => setActiveTab('crm')}
                className={`px-3 py-1 rounded-md font-medium transition-all ${
                  activeTab === 'crm'
                    ? 'bg-white text-zinc-900 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Conversion Funnel
              </button>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200 bg-white">
            <div className="p-4 sm:p-5">
              <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center justify-between">
                <span>Verified Enquiries</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tabular-nums">
                348
              </div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">
                +42% MoM Qualified
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center justify-between">
                <span>Avg. Cost / Lead (CPL)</span>
                <span className="text-[10px] font-mono text-zinc-400">Meta + Google</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tabular-nums">
                ₹320
              </div>
              <div className="text-[11px] text-emerald-600 font-medium mt-1">
                -38% vs Industry Benchmark
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center justify-between">
                <span>Site Visits Booked</span>
                <Building className="w-3.5 h-3.5 text-zinc-700" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tabular-nums">
                48
              </div>
              <div className="text-[11px] text-zinc-500 font-medium mt-1">
                13.8% Lead-to-Visit Rate
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="text-xs text-zinc-500 font-medium mb-1 flex items-center justify-between">
                <span>Pipeline Value</span>
                <span className="text-[10px] font-mono bg-amber-50 text-amber-800 px-1.5 py-0.5 rounded border border-amber-200/60">
                  Target: Worli / BKC
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-950 tabular-nums">
                ₹24.8 Cr
              </div>
              <div className="text-[11px] text-zinc-600 font-medium mt-1">
                4 Token Bookings In Progress
              </div>
            </div>
          </div>

          {/* Dynamic Tab Body */}
          <div className="p-6 bg-white min-h-[300px]">
            {activeTab === 'funnel' && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Live Inbound Buyer Inquiries (Simulated Feed)
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">Synced with WhatsApp CRM</span>
                </div>

                <div className="space-y-3">
                  {liveEnquiries.map((enquiry, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-zinc-200/90 bg-zinc-50/50 hover:bg-zinc-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-display font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                          {enquiry.name.split(' ')[0][0]}{enquiry.name.split(' ')[1] ? enquiry.name.split(' ')[1][0] : ''}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-sm text-zinc-900">{enquiry.name}</span>
                            <span className="text-[11px] text-zinc-500 bg-white border border-zinc-200 px-2 py-0.5 rounded">
                              {enquiry.type}
                            </span>
                            <span className="text-xs font-mono font-medium text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                              Budget: {enquiry.budget}
                            </span>
                          </div>
                          <div className="text-xs text-zinc-600 mt-1 flex items-center gap-1.5">
                            <Building className="w-3 h-3 text-zinc-400" />
                            <span>{enquiry.project}</span>
                            <span className="text-zinc-300">·</span>
                            <span className="font-medium text-emerald-700">{enquiry.action}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center text-right shrink-0">
                        <span className="text-xs font-mono text-zinc-400">{enquiry.time}</span>
                        <span className="text-[11px] text-zinc-600 font-medium flex items-center gap-1 mt-0.5">
                          <MessageSquare className="w-3 h-3 text-emerald-600" />
                          {enquiry.channel}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'creative' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                      <span>Pillar 01: Property</span>
                      <span className="font-mono text-emerald-600">Reel Concept</span>
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 mb-1">
                      "Why 270° Panoramic Balconies Are the New Luxury Standard"
                    </h4>
                    <p className="text-xs text-zinc-600 line-clamp-3 mb-3">
                      Cinematic drone shot transitioning through double-height living room out to ocean sunset. Emphasizes ceiling height and ventilation.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500">
                    <span>Target: HNIs, Doctors</span>
                    <span className="font-mono text-zinc-900 font-semibold">120K+ Views</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                      <span>Pillar 02: Locality</span>
                      <span className="font-mono text-amber-700">Carousel Guide</span>
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 mb-1">
                      "Upcoming 6-Lane Expressway: Impact on Property Values by 2027"
                    </h4>
                    <p className="text-xs text-zinc-600 line-clamp-3 mb-3">
                      Data-backed infrastructure roadmap. Highlights commute savings to financial district from 55 mins down to 18 mins.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500">
                    <span>Target: Tech CXOs</span>
                    <span className="font-mono text-zinc-900 font-semibold">480+ Saves</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                      <span>Pillar 05: Lead Gen</span>
                      <span className="font-mono text-zinc-800">Direct Ad Copy</span>
                    </div>
                    <h4 className="font-semibold text-sm text-zinc-900 mb-1">
                      "Only 8 Duplex Penthouses: Exclusive Pre-Launch Pricing"
                    </h4>
                    <p className="text-xs text-zinc-600 line-clamp-3 mb-3">
                      High-urgency direct response ad with click-to-WhatsApp. Instant brochure delivery with confidential price sheets.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-zinc-200/80 flex items-center justify-between text-xs text-zinc-500">
                    <span>Target: Verified Buyers</span>
                    <span className="font-mono text-zinc-900 font-semibold">₹310 CPL</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'crm' && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                  <span className="text-[11px] font-mono text-zinc-400">Step 1</span>
                  <div className="text-sm font-semibold text-zinc-900 mt-1">High-Intent Traffic</div>
                  <p className="text-xs text-zinc-500 mt-1">Targeted Meta & Google Search visitors clicking project ad.</p>
                  <div className="mt-3 text-xs font-mono font-semibold text-zinc-800">12,400 Visitors</div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                  <span className="text-[11px] font-mono text-zinc-400">Step 2</span>
                  <div className="text-sm font-semibold text-zinc-900 mt-1">Instant Lead Capture</div>
                  <p className="text-xs text-zinc-500 mt-1">Gated brochure request or WhatsApp click with phone verification.</p>
                  <div className="mt-3 text-xs font-mono font-semibold text-zinc-800">420 Inquiries (3.4%)</div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                  <span className="text-[11px] font-mono text-zinc-400">Step 3</span>
                  <div className="text-sm font-semibold text-zinc-900 mt-1">Automated Handoff</div>
                  <p className="text-xs text-zinc-500 mt-1">Dispatched to sales desk under 2 minutes with budget tags.</p>
                  <div className="mt-3 text-xs font-mono font-semibold text-zinc-800">96% Connected</div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50">
                  <span className="text-[11px] font-mono text-zinc-400">Step 4</span>
                  <div className="text-sm font-semibold text-zinc-900 mt-1">Site Visit Conversion</div>
                  <p className="text-xs text-zinc-500 mt-1">VIP experiential walkthrough scheduled with sales manager.</p>
                  <div className="mt-3 text-xs font-mono font-semibold text-emerald-600">48 In-Person Visits</div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar Info */}
          <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700" />
              <span>Real estate performance data verified across 24+ builder launches</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="font-medium text-zinc-950 hover:underline flex items-center gap-1"
            >
              <span>Get this setup for your project</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
