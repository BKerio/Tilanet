import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, ShoppingCart, Briefcase, Store, Factory, Signal, Wheat, Clapperboard, Pill, ShieldCheck, GraduationCap, Plane, Car, HeartPulse, Zap, HeartHandshake, Landmark, Home } from 'lucide-react';
import { industries } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import IndustriesPieChart from '@/components/IndustriesPieChart';

gsap.registerPlugin(ScrollTrigger);

const industryIcons: Record<string, React.ElementType> = {
  'Banking & Capital Markets': Building2,
  'Consumer Goods': ShoppingCart,
  'Professional Services': Briefcase,
  'Retail': Store,
  'Manufacturing': Factory,
  'Telecommunications': Signal,
  'Agriculture': Wheat,
  'Media & Entertainment': Clapperboard,
  'Pharmaceuticals': Pill,
  'Insurance': ShieldCheck,
  'Education': GraduationCap,
  'Travel & Transportation': Plane,
  'Automotive': Car,
  'Healthcare': HeartPulse,
  'Energy': Zap,
  'Nonprofit': HeartHandshake,
  'Government': Landmark,
  'Real Estate': Home,
};

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.industries-chart', { opacity: 0, y: 40, duration: 0.8,
        scrollTrigger: { trigger: '.industries-chart', start: 'top 85%' }});
      gsap.from('.industry-card', { opacity: 0, y: 30, stagger: 0.04, duration: 0.5,
        scrollTrigger: { trigger: '.industries-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="Industries"
        title="Expertise Across Every Sector"
        description="We bring deep industry knowledge to deliver tailored solutions that address the unique challenges of your sector."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-golden mb-12 tracking-tight">
            Industries We Serve
          </h2>

          <div className="industries-chart bg-[#fafafa] border border-[#e1e2e7] p-6 sm:p-10 lg:p-14">
            <IndustriesPieChart />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f6f1] pt-0">
        <div className="container-custom">
          <p className="sec-subtitle text-center mb-3">Industry Verticals</p>
          <h3 className="sec-title text-center mb-12">Sectors We Support</h3>

          <div className="industries-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              const Icon = industryIcons[industry] || Building2;
              return (
                <div key={industry} className="industry-card group p-5 bg-white border border-[#e1e2e7] hover:border-golden transition-colors text-center">
                  <div className="w-12 h-12 rounded-full bg-[#f8f6f1] flex items-center justify-center mx-auto mb-3 group-hover:bg-charcoal transition-colors">
                    <Icon className="w-5 h-5 text-golden" />
                  </div>
                  <span className="text-[13px] font-medium text-charcoal leading-snug">{industry}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
