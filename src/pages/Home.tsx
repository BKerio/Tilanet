import Hero from '@/sections/Hero';
import WelcomeSection from '@/sections/WelcomeSection';
import ServicesGrid from '@/sections/ServicesGrid';
import WhyDynatrix from '@/sections/Why';
import StatsCounter from '@/sections/StatsCounter';
import ClientLogos from '@/sections/ClientLogos';
import Testimonials from '@/sections/Testimonials';
import CTABanner from '@/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServicesGrid />
      <WhyDynatrix />
      <StatsCounter />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
    </>
  );
}
