import AdvantageSection from '@/components/home/Advantage';
import AppSection from '@/components/home/AppSection';
import BenefitSection from '@/components/home/Benefit';
import Definition from '@/components/home/Definition';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import UniquenessSection from '@/components/home/Uniqueness';
import AppLayout from '@/components/layout/AppLayout';

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <Pricing />
      <BenefitSection />
      <AdvantageSection />
      <Definition />
      <UniquenessSection />
      <AppSection />
    </AppLayout>
  );
}
