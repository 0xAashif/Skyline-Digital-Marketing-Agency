import React from 'react';
import { ShieldCheck, TrendingDown, Users, Award } from 'lucide-react';

export const ProofMetrics: React.FC = () => {
  const metrics = [
    {
      value: '₹180 Cr+',
      label: 'Inventory Sold via Digital Campaigns',
      context: 'Across residential, villa, and plot launches',
      icon: Award,
    },
    {
      value: '4,800+',
      label: 'Qualified In-Person Site Visits',
      context: 'Directly attributed to digital funnels',
      icon: Users,
    },
    {
      value: '-42%',
      label: 'Lower Cost Per Qualified Buyer',
      context: 'Versus unspecialized generalist agencies',
      icon: TrendingDown,
    },
    {
      value: '< 5 Mins',
      label: 'Sales Desk Lead Routing SLA',
      context: 'Zero lead leakage with instant WhatsApp API',
      icon: ShieldCheck,
    },
  ];

  const trustedSegments = [
    'Luxury High-Rise Condominiums',
    'Gated Villa Enclaves',
    'Integrated Township Launches',
    'Commercial Grade-A Office Spaces',
    'RERA-Approved Plotted Developments',
  ];

  return (
    <section className="border-y border-zinc-200 bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-zinc-400">
                  <IconComponent className="w-4 h-4 text-zinc-700" />
                  <span className="text-xs font-mono tracking-wider uppercase text-zinc-500">
                    Verified Benchmark
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-zinc-950 tabular-nums">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-zinc-800 mt-2">
                  {item.label}
                </div>
                <div className="text-xs text-zinc-500 mt-1 leading-normal">
                  {item.context}
                </div>
              </div>
            );
          })}
        </div>

        {/* Segments trust strip */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 shrink-0">
            Specialized Expertise In
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-600">
            {trustedSegments.map((segment, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                <span>{segment}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
