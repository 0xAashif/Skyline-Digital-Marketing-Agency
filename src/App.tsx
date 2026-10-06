import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofMetrics } from './components/ProofMetrics';
import { Services } from './components/Services';
import { ContentSystem } from './components/ContentSystem';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { AddOnsAccordion } from './components/AddOnsAccordion';
import { AuditBookingModal } from './components/AuditBookingModal';
import { Footer } from './components/Footer';
import { PricingPlan, ServiceItem } from './types';
import { PRICING_PLANS } from './data/agencyData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlanForBooking, setSelectedPlanForBooking] = useState<PricingPlan | null>(null);

  const handleOpenBooking = (planName?: string) => {
    if (planName) {
      const found = PRICING_PLANS.find(
        (p) => p.name.toLowerCase() === planName.toLowerCase() || p.id.toLowerCase() === planName.toLowerCase()
      );
      setSelectedPlanForBooking(found || null);
    } else {
      setSelectedPlanForBooking(null);
    }
    setIsBookingOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForBooking(plan);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    // Service selected from grid
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 flex flex-col font-sans selection:bg-zinc-950 selection:text-white antialiased">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section (The Agency Hook) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Real Estate Impact & Proof Strip */}
        <ProofMetrics />

        {/* 2. Services (What We Do) */}
        <Services onSelectService={handleSelectService} />

        {/* 3. The Content System (Agency Methodology & 5 Pillars & 5-Step Process) */}
        <ContentSystem />

        {/* Interactive Inquiries & ROI Forecasting Engine */}
        <RoiCalculator onOpenBooking={() => handleOpenBooking()} />

        {/* Developer Case Studies with Quantified Outcomes */}
        <CaseStudies onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Pricing (Transparent & Scalable) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 5. Add-Ons & Workflow Accordion */}
        <AddOnsAccordion onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Quiet, Refined Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Audit & Strategy Call Booking Drawer/Modal */}
      <AuditBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPlan={selectedPlanForBooking}
      />
    </div>
  );
}
