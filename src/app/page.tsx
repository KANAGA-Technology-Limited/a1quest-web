import Button from '@/common/Button/Button';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import TeamSection from '@/components/home/Team';
import AppLayout from '@/components/layout/AppLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
      <Pricing />
      <TeamSection />
    </AppLayout>
  );
}
