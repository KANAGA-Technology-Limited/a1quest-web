import AdvantageSection from '@/components/home/Advantage';
import AppSection from '@/components/home/AppSection';
import BenefitSection from '@/components/home/Benefit';
import Definition from '@/components/home/Definition';
import Hero from '@/components/home/Hero';
import LearningSection from '@/components/home/Learning';
import Pricing from '@/components/home/Pricing';
import TeamSection from '@/components/home/Team';
import UniquenessSection from '@/components/home/Uniqueness';
import AppLayout from '@/components/layout/AppLayout';

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <Pricing />
      <TeamSection />
      <BenefitSection />
      <AdvantageSection />
      <Definition />
      <LearningSection />
      <UniquenessSection />
      <AppSection />
    </AppLayout>
  );
}
