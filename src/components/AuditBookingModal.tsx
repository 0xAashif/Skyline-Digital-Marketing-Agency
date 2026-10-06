import React, { useState } from 'react';
import { X, Check, Calendar, ArrowRight, ShieldCheck, Clock, Building2 } from 'lucide-react';
import { PricingPlan } from '../types';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan | null;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    developerName: '',
    projectName: '',
    city: 'Mumbai',
    propertyType: 'Luxury High-Rise',
    monthlyBudget: '₹50,000 – ₹1,00,000',
    primaryGoal: 'Generate Verified Site Visits',
    contactName: '',
    phone: '',
    email: '',
    preferredDate: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.developerName.trim()) newErrors.developerName = 'Company or Builder name required';
    if (!formData.projectName.trim()) newErrors.projectName = 'Project name required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    return true;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.contactName.trim()) newErrors.contactName = 'Name required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid 10-digit phone number required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid corporate email required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border border-zinc-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
                <span>STAGE {step} OF 3</span>
                <span>·</span>
                <span>
                  {selectedPlan ? `${selectedPlan.name.toUpperCase()} STRATEGY SESSION` : 'REAL ESTATE GROWTH AUDIT'}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-zinc-950">
                {step === 1 && 'Project & Micro-Market Details'}
                {step === 2 && 'Campaign Scale & Objectives'}
                {step === 3 && 'Schedule Your Strategy Call'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                {step === 1 && 'Tell us about the property you are bringing to market.'}
                {step === 2 && 'Help our performance team prepare custom benchmarks for your segment.'}
                {step === 3 && 'Choose your preferred slot with a senior real estate growth strategist.'}
              </p>
            </div>

            {/* Step Progress Dots */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    s === step
                      ? 'bg-zinc-950'
                      : s < step
                      ? 'bg-zinc-400'
                      : 'bg-zinc-200'
                  }`}
                />
              ))}
            </div>

            {/* Step 1 Form */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Builder / Agency Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Sovereign Realty or Apex Properties"
                    value={formData.developerName}
                    onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900"
                  />
                  {errors.developerName && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.developerName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Project / Development Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Sovereign Sky Residences, Phase 2"
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900"
                  />
                  {errors.projectName && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.projectName}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Target City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900 bg-white"
                    >
                      <option>Mumbai / MMR</option>
                      <option>Bengaluru</option>
                      <option>Delhi NCR / Gurgaon</option>
                      <option>Pune</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      <option>Other / Tier 2</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900 bg-white"
                    >
                      <option>Luxury High-Rise (₹2 Cr+)</option>
                      <option>Gated Villas</option>
                      <option>Mid-Market Residential</option>
                      <option>RERA Plotted Development</option>
                      <option>Commercial Grade A</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 bg-zinc-950 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center gap-2"
                  >
                    <span>Next: Objectives</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 Form */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Planned Monthly Digital Ad Spend
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900 bg-white"
                  >
                    <option>₹25,000 – ₹50,000 / mo</option>
                    <option>₹50,000 – ₹1,00,000 / mo</option>
                    <option>₹1,00,000 – ₹2,50,000 / mo</option>
                    <option>₹2,50,000+ / mo (Aggressive Launch)</option>
                    <option>Undecided (Need Skyline Recommendation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Primary Campaign Metric
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Generate Verified Site Visits',
                      'Reduce Cost Per Lead (CPL)',
                      'Premium Brand & Video Authority',
                      'Pre-Launch Phase 1 Sold Out',
                    ].map((goal) => (
                      <div
                        key={goal}
                        onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                        className={`p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                          formData.primaryGoal === goal
                            ? 'border-zinc-950 bg-zinc-950 text-white'
                            : 'border-zinc-200 hover:border-zinc-300 text-zinc-800'
                        }`}
                      >
                        {goal}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-600">
                  <div className="font-semibold text-zinc-900 mb-1">Audit Deliverables Included:</div>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Competitor ad creative tear-down in your micro-market</li>
                    <li>Estimated cost per qualified inquiry and visit model</li>
                    <li>Recommended 3-month media budget allocation</li>
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-zinc-600 hover:text-zinc-950"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 bg-zinc-950 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center gap-2"
                  >
                    <span>Next: Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Full Name & Designation *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Rohit Sharma (VP Sales / Managing Director)"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900"
                  />
                  {errors.contactName && (
                    <span className="text-xs text-rose-500 mt-1 block">{errors.contactName}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98200 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900"
                    />
                    {errors.phone && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="rohit@buildergroup.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Preferred Strategy Call Timing
                  </label>
                  <select
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-950 text-zinc-900 bg-white"
                  >
                    <option value="">Today / Earliest Available (Within 4 hours)</option>
                    <option value="tomorrow-morning">Tomorrow Morning (11:00 AM IST)</option>
                    <option value="tomorrow-afternoon">Tomorrow Afternoon (3:30 PM IST)</option>
                    <option value="this-weekend">Saturday Morning (11:30 AM IST)</option>
                  </select>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-semibold text-zinc-600 hover:text-zinc-950"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-zinc-950 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Confirm & Book Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7" />
            </div>

            <div className="text-xs font-mono text-zinc-400 mb-1">
              REF #SKL-{Math.floor(100000 + Math.random() * 900000)}
            </div>

            <h3 className="text-2xl font-bold font-display text-zinc-950 mb-2">
              Strategy Session Confirmed
            </h3>
            <p className="text-sm text-zinc-600 max-w-md mx-auto mb-6">
              Thank you, <strong>{formData.contactName}</strong>. Our Senior Growth Director will review <strong>{formData.projectName}</strong> ({formData.city}) and connect via WhatsApp & Email at <strong>{formData.phone}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-left text-xs text-zinc-700 space-y-2 mb-8">
              <div className="font-semibold text-zinc-900">What will be delivered on the call:</div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Micro-market lead density analysis for {formData.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Exact creative reels and ad templates proven for {formData.propertyType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Custom proposal tailored to your {formData.monthlyBudget} budget</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-3 bg-zinc-950 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
