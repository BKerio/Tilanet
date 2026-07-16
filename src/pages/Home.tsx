import Hero from '@/sections/Hero';
import WelcomeSection from '@/sections/WelcomeSection';
import ServicesGrid from '@/sections/ServicesGrid';
import WhyChooseUs from '@/sections/Why';
import StatsCounter from '@/sections/StatsCounter';
import Testimonials from '@/sections/Testimonials';
import CTABanner from '@/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsCounter />
      <Testimonials />
      <CTABanner />
    </>
  );
}
