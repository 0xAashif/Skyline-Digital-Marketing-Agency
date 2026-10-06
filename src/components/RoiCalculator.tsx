import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sparkles, Building, Check } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const budgetId = useId();
  const ticketId = useId();
  const [ticketPriceInLakhs, setTicketPriceInLakhs] = useState<number>(150); // ₹1.5 Cr default
  const [monthlyBudget, setMonthlyBudget] = useState<number>(45000); // ₹45,000 monthly ad spend
  
  // Real estate industry conversion math
  // Higher ticket price increases cost per lead slightly due to tighter HNI targeting
  const baseCpl = ticketPriceInLakhs > 500 ? 580 : ticketPriceInLakhs > 200 ? 420 : 310;
  const estimatedLeads = Math.round(monthlyBudget / baseCpl);
  const estimatedSiteVisits = Math.round(estimatedLeads * 0.12); // ~12% visit conversion
  const estimatedBookings = Math.max(1, Math.round(estimatedSiteVisits * 0.14)); // ~1 in 7 visits close
  const pipelineValueCr = ((ticketPriceInLakhs * estimatedBookings) / 100).toFixed(1);
  const totalCost = monthlyBudget + 15000; // includes agency retainer approx
  const roiMultiplier = Math.round(((ticketPriceInLakhs * 100000 * 0.02 * estimatedBookings) / totalCost) * 10) / 10; // assuming 2% developer margin on sales

  const formatCurrency = (valInLakhs: number) => {
    if (valInLakhs >= 100) {
      return `₹${(valInLakhs / 100).toFixed(1)} Cr`;
    }
    return `₹${valInLakhs} Lakhs`;
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-2">
            Forecasting Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-zinc-950">
            Real Estate Inquiries & ROI Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Estimate your monthly pipeline of verified buyers based on real-market campaign benchmarks across major Indian metropolitan micro-markets.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-7">
            {/* Slider 1: Ticket Price */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={ticketId} className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Average Property Ticket Size
                </label>
                <span className="font-mono font-bold text-sm text-zinc-950 px-2.5 py-0.5 bg-zinc-100 rounded-md">
                  {formatCurrency(ticketPriceInLakhs)}
                </span>
              </div>
              <input
                id={ticketId}
                type="range"
                min={40}
                max={1000}
                step={10}
                value={ticketPriceInLakhs}
                onChange={(e) => setTicketPriceInLakhs(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1.5">
                <span>₹40 Lakhs (Affordable)</span>
                <span>₹2.5 Cr (Luxury)</span>
                <span>₹10 Cr+ (Ultra-HNI)</span>
              </div>
            </div>

            {/* Slider 2: Monthly Ad Spend */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={budgetId} className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Monthly Ad Spend Budget
                </label>
                <span className="font-mono font-bold text-sm text-zinc-950 px-2.5 py-0.5 bg-zinc-100 rounded-md">
                  ₹{monthlyBudget.toLocaleString('en-IN')} / mo
                </span>
              </div>
              <input
                id={budgetId}
                type="range"
                min={15000}
                max={250000}
                step={5000}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1.5">
                <span>₹15,000 (Targeted)</span>
                <span>₹75,000 (Growth)</span>
                <span>₹2.5 Lakhs (Aggressive)</span>
              </div>
            </div>

            {/* Benchmark Highlights */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs space-y-2">
              <div className="font-semibold text-zinc-900 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Underlying Conversion Model</span>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Calculated using blended Meta Ads & Google Search CPCs, with instant WhatsApp brochure gating and CRM sales desk qualification.
              </p>
              <div className="text-[11px] font-mono text-zinc-500 pt-1">
                Estimated CPL: ~₹{baseCpl} · Target Conversion: ~12% to Site Visit
              </div>
            </div>
          </div>

          {/* Output Forecast Column */}
          <div className="lg:col-span-6 bg-zinc-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 flex items-center justify-between">
                <span>Projected Monthly Outcomes</span>
                <span className="text-emerald-400 font-medium">Model v2.4</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Qualified Enquiries</div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-white tabular-nums">
                    {estimatedLeads}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Phone & WhatsApp verified</div>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                  <div className="text-xs text-zinc-400 mb-1">Experiential Visits</div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tabular-nums">
                    {estimatedSiteVisits}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">At project sales gallery</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 mb-6">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Estimated Inventory Sales Closed</span>
                  <span className="font-mono text-amber-300">~{estimatedBookings} Units Booked</span>
                </div>
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-white tabular-nums">
                  ₹{pipelineValueCr} Cr
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Projected closed booking value per campaign cycle
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-4 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Customized Media Plan for Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
