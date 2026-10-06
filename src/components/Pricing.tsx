import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#FAFAFA] border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-3">
            Investment Structure
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-zinc-950">
            Transparent, Predictable Pricing.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Engineered for real estate builders, consultants, and developers. No hidden percentages on your media spend.
          </p>

          {/* Billing Cycle Segmented Control */}
          <div className="mt-8 inline-flex items-center p-1 bg-zinc-200/80 rounded-xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'quarterly'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <span>Quarterly Commitment</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-amber-100 text-amber-900 rounded font-bold">
                10% OFF
              </span>
            </button>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.highlighted;
            const price = billingCycle === 'monthly' ? plan.priceMonthly : plan.priceQuarterly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-200 ${
                  isGrowth
                    ? 'bg-white border-2 border-amber-400 shadow-[0_8px_30px_rgba(245,158,11,0.08)] lg:-translate-y-2'
                    : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-2xs'
                } p-7 sm:p-9`}
              >
                {/* Growth Card Top Highlight Badge */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-zinc-950 text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-zinc-950" />
                    <span>{plan.badge || 'Most Popular'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-display text-zinc-950">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {plan.id.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-zinc-600 mb-6">
                    {plan.tagline}
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-950 tracking-tight tabular-nums">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">
                        / month
                      </span>
                    </div>
                    {billingCycle === 'quarterly' && (
                      <div className="text-[11px] text-amber-700 font-mono mt-1">
                        Billed quarterly (₹{(price * 3).toLocaleString('en-IN')})
                      </div>
                    )}
                    <div className="text-xs text-zinc-500 mt-2 leading-relaxed">
                      Ideal for: {plan.targetAudience}
                    </div>
                  </div>

                  {/* Quick Deliverable Matrix */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-zinc-50 rounded-xl mb-6 text-[11px] font-mono">
                    <div>
                      <span className="text-zinc-400 block text-[10px]">REELS</span>
                      <span className="font-semibold text-zinc-800">{plan.deliverablesSummary.reels}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block text-[10px]">ADS MGMT</span>
                      <span className="font-semibold text-zinc-800">{plan.deliverablesSummary.adsMgmt}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-zinc-400 block text-[10px]">REPORTING</span>
                      <span className="font-semibold text-zinc-800">{plan.deliverablesSummary.reporting}</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-zinc-400 block text-[10px]">LEAD ROUTE</span>
                      <span className="font-semibold text-zinc-800">{plan.deliverablesSummary.leadTracking}</span>
                    </div>
                  </div>

                  {/* Detailed Feature List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Everything Included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-zinc-950 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                      isGrowth
                        ? 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-md active:scale-[0.99]'
                        : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:scale-[0.99]'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Footnote Policy */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>All packages include dedicated account executive, weekly analytics review, and monthly strategy calls.</span>
        </div>
      </div>
    </section>
  );
};
