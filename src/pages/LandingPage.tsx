import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { MissionBrief } from '../components/MissionBrief';
import { GameOverview } from '../components/GameOverview';
import { RecruitmentSection } from '../components/RecruitmentSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <main className="min-h-screen w-full overflow-x-hidden selection:bg-orange selection:text-navy">
      <HeroSection />
      <MissionBrief />
      <GameOverview />
      <RecruitmentSection />
      <FeaturesGrid />
      <Footer />
    </main>;
}