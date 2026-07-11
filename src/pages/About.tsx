import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award } from 'lucide-react';
import { companyInfo, coreValues } from '@/data/siteData';
import CTABanner from '@/sections/CTABanner';
import PageHero from '@/components/PageHero';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.mission-card', { opacity: 0, y: 40, stagger: 0.15, duration: 0.7,
        scrollTrigger: { trigger: '.mission-grid', start: 'top 80%' }});
      gsap.from('.values-card', { opacity: 0, y: 40, stagger: 0.1, duration: 0.6,
        scrollTrigger: { trigger: '.values-grid', start: 'top 80%' }});
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted General Supplier"
        description={`${companyInfo.name} delivers dependable supply solutions to individuals, businesses, parastatals, and government institutions across Kenya and East Africa.`}
      />

      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="mission-grid grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="mission-card flex flex-col justify-between h-full">
              <div className="w-full">
                <img 
                  src="/service-procurement.jpg" 
                  alt="General supply and procurement" 
                  className="w-full aspect-[1.7/1] object-cover rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-[#e1e2e7]/40" 
                />
              </div>
              <div className="mt-8 lg:mt-12 flex-1 flex flex-col justify-end">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">Mission</h2>
                <p className="text-[16px] sm:text-[18px] leading-[32px] text-[#3c3f44] font-normal">
                  {companyInfo.mission}
                </p>
              </div>
            </div>

            <div className="mission-card flex flex-col justify-between h-full mt-12 md:mt-0">
              <div className="mb-8 lg:mb-12 flex-1 flex flex-col justify-start">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mb-4">Vision</h2>
                <p className="text-[16px] sm:text-[18px] leading-[32px] text-[#3c3f44] font-normal">
                  {companyInfo.vision}
                </p>
              </div>
              <div className="w-full">
                <img 
                  src="/about-team.jpg" 
                  alt="Tila-Net team" 
                  className="w-full aspect-[1.7/1] object-cover rounded-[32px] shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-[#e1e2e7]/40" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8f6f1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle align="left" eyebrow="Who We Are" title="Beyond the Brief" className="mb-8" />
              <div className="space-y-4 text-[15px] leading-[30px] text-[#6f7174]">
                <p>{companyInfo.about}</p>
                <p>{companyInfo.aboutExtended}</p>
                <p>{companyInfo.goal}</p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-5 border border-[#e1e2e7]">
                  <div className="text-3xl font-bold text-golden">30+</div>
                  <div className="text-[14px] text-[#6f7174] mt-1">Organizations supplied</div>
                </div>
                <div className="bg-white p-5 border border-[#e1e2e7]">
                  <div className="text-3xl font-bold text-charcoal">100%</div>
                  <div className="text-[14px] text-[#6f7174] mt-1">Client commitment</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/about-team.jpg" alt="Tila-Net team" className="shadow-[0_10px_60px_rgba(0,0,0,0.12)]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 border-4 border-golden shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-golden" />
                  <div>
                    <div className="font-semibold text-charcoal">Registered in Kenya</div>
                    <div className="text-[12px] text-[#6f7174]">Duly registered general supplier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="relative py-24 px-4 sm:px-6 lg:px-8 border-y-[12px] border-primary bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('/about-team.jpg')` }}
      >
        <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-[1px]" />
        
        <div className="container-custom relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-center text-primary tracking-tight mb-16">
            Core Values
          </h2>
          
          <div className="values-grid grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="flex flex-col gap-6 sm:gap-8">
              {coreValues.slice(0, 3).map((item, index) => (
                <div key={item.title} className="values-card flex items-center gap-3 sm:gap-4 max-w-[520px] mx-auto w-full group">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-extrabold text-white text-lg shadow-md shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {index + 1}
                  </div>
                  <div className="bg-[#008DA5] border border-white/10 rounded-[32px] px-6 py-4 flex-1 text-center shadow-lg transition-all duration-300 group-hover:bg-[#009ebc] group-hover:shadow-xl">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-primary uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-[22px] text-white/95 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 sm:gap-8">
              {coreValues.slice(3, 6).map((item, index) => (
                <div key={item.title} className="values-card flex items-center gap-3 sm:gap-4 max-w-[520px] mx-auto w-full group">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-extrabold text-white text-lg shadow-md shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {index + 4}
                  </div>
                  <div className="bg-[#008DA5] border border-white/10 rounded-[32px] px-6 py-4 flex-1 text-center shadow-lg transition-all duration-300 group-hover:bg-[#009ebc] group-hover:shadow-xl">
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-primary uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] leading-[22px] text-white/95 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
